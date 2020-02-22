import {db} from '../docClient';

let UsersTable = process.env.USERS_TABLE as string;

export const addRecipeToCookbook = async (
  _: any,
  {recipeId}: {recipeId: string},
  ctx: any,
) => {
  const params: AWS.DynamoDB.DocumentClient.UpdateItemInput = {
    TableName: UsersTable,
    Key: {
      id: '9b2ba367-08ec-4b49-8334-7dc28bcce0c0',
    },
    UpdateExpression:
      'SET cookbooks[0].recipes = list_append(if_not_exists(cookbooks[0].recipes, :empty_list), :recipeId)',

    ExpressionAttributeValues: {
      ':recipeId': recipeId,
      ':empty_list': [],
    },
    ReturnValues: 'ALL_NEW',
  };

  const cookbook = await db.update(params);

  console.log(cookbook);

  return cookbook;
};
