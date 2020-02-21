import {db} from 'src/docClient';
import uuidv4 from 'uuid/v4';

let RecipesTable = process.env.RECIPE_TABLE as string;

export const recipe = async (_: any, {id}: {id: string}) => {
  const params = {
    TableName: RecipesTable,
    KeyConditionExpression: 'id = :recipeId',
    ExpressionAttributeValues: {
      ':recipeId': id,
    },
  };

  return db.query(params);
};

export const recipes = async () => {
  const params = {
    TableName: RecipesTable,
  };

  return db.scan(params);
};

export const createRecipe = async (
  _: any,
  {recipe}: {recipe: any},
  ctx: any,
) => {
  const params = {
    TableName: RecipesTable,
    Item: {
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      author: ctx.user.name,
      ...recipe,
    },
  };

  const newRecipe = await db.put(params);

  return newRecipe;
};
