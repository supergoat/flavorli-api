import uuidv4 from 'uuid/v4';
import AWS from 'aws-sdk';

let docClient = new AWS.DynamoDB.DocumentClient();

if (process.env.STAGE === 'dev') {
  docClient = new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: `http://localhost:${process.env.DYNAMODB_PORT}`,
    accessKeyId: 'DEFAULT_ACCESS_KEY', // needed if you don't have aws credentials at all in env
    secretAccessKey: 'DEFAULT_SECRET', // needed if you don't have aws credentials at all in env
  });
}

let RecipesTable = process.env.RECIPE_TABLE as string;
let UsersTable = process.env.USERS_TABLE as string;

const promisify = (
  callback: (fn: (err: AWS.AWSError, data: any) => void) => void,
): Promise<any> =>
  new Promise((resolve, reject) => {
    callback((err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

export const resolvers = {
  Query: {
    recipe: async (_: any, {id}: {id: string}) => {
      const data = await promisify(callback => {
        const params = {
          TableName: RecipesTable,
          KeyConditionExpression: 'id = :recipeId',
          ExpressionAttributeValues: {
            ':recipeId': id,
          },
        };

        docClient.query(params, callback);
      });

      return data?.Items?.[0];
    },
    recipes: async () => {
      const data = await promisify(callback => {
        const params = {
          TableName: RecipesTable,
        };

        docClient.scan(params, callback);
      });

      return data?.Items;
    },
    user: async (_: any, {id}: {id: string}) => {
      const usersResult = await promisify(callback => {
        const params = {
          TableName: UsersTable,
          KeyConditionExpression: 'id = :userId',
          ExpressionAttributeValues: {
            ':userId': id,
          },
        };

        docClient.query(params, callback);
      });

      const user = usersResult?.Items?.[0];
      const recipeIds = user.cookbooks[0].recipes;

      const recipesResult = await promisify(callback => {
        const params = {
          RequestItems: {
            [RecipesTable]: {
              Keys: recipeIds.map((recipeId: string) => ({
                id: recipeId,
              })),
            },
          },
        };

        docClient.batchGet(params, callback);
      });

      const recipes = recipesResult?.Responses[RecipesTable];

      user.cookbooks[0].recipes = recipes;

      return user;
    },
  },
  Mutation: {
    createRecipe: async (_: any, {recipe}: {recipe: any}, ctx: any) => {
      const newRecipe = {
        id: uuidv4(),
        createdAt: new Date().toISOString(),
        author: ctx.user.name,
        ...recipe,
      };
      await promisify(callback => {
        const params = {
          TableName: RecipesTable,
          Item: newRecipe,
        };

        docClient.put(params, callback);
      });

      return newRecipe;
    },
  },
};
