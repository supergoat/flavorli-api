import {ingredients} from './ingredients';
import {items} from './items';
import {steps} from './steps';

export const greekPastitsioRecipe = {
  id: '1',
  author: 'Akis Petratzikis',
  name: 'Greek Pastitsio',
  image:
    'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/greek_pastitsio.jpg',
  preparationTime: 25,
  cookingTime: 40,
  portions: '8-10',
  difficulty: '2',
  ingredients,
  items,
  steps,
};
