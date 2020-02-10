import {greekPastitsioRecipe} from './GreekPastitsio/recipe';
import {cheeseSauceRecipe} from './CheeseSauce/recipe';
import {chocolateCakeRecipe} from './ChocolateCake/recipe';

export const recipes = {
  [greekPastitsioRecipe.id]: greekPastitsioRecipe,
  [cheeseSauceRecipe.id]: cheeseSauceRecipe,
  [chocolateCakeRecipe.id]: chocolateCakeRecipe,
};
