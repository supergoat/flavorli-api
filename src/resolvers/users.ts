import {db} from '../docClient';
import {IUser, IRecipe} from 'src/types';

let RecipesTable = process.env.RECIPE_TABLE as string;
let UsersTable = process.env.USERS_TABLE as string;

export const user = async (_: any, {id}: {id: string}) => {
  const params = {
    TableName: UsersTable,
    KeyConditionExpression: 'id = :userId',
    ExpressionAttributeValues: {
      ':userId': id,
    },
  };

  const user = await db.query<IUser>(params);

  const recipeIds = user?.cookbooks[0].recipes;

  const recipeParams = {
    RequestItems: {
      [RecipesTable]: {
        Keys: recipeIds.map((recipeId: string) => ({
          id: recipeId,
        })),
      },
    },
  };

  const BatchRecipes = await db.batchGet<{[tableName: string]: IRecipe[]}>(
    recipeParams,
  );

  const recipes = BatchRecipes[RecipesTable];

  // @ts-ignore
  user.cookbooks[0].recipes = recipes;

  return user;
};
