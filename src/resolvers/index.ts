import {recipe, recipes, createRecipe} from './recipes';
import {user} from './users';

export const resolvers = {
  Query: {
    recipe,
    recipes,
    user,
  },
  Mutation: {
    createRecipe,
  },
};
