import uuidv4 from 'uuid/v4';
import {IRecipe} from '../../types';

export const SummerTimeOatMeal: IRecipe = {
  id: '6f624294-eeff-4d82-a205-b144a35bfd6c',
  createdAt: new Date().toISOString(),
  author: 'Robin Robertson',
  name: 'Summetime oatmeal',
  image:
    'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/summertime_oatmeal.jpeg',
  preparationTime: 7,
  cookingTime: 0,
  portions: '1',
  difficulty: '1',
  notes: ['This recipe requires a blender'],
  ingredients: [
    {
      for: 'oatmeal',
      list: [
        {
          qty: '1 cup (100 g)',
          name: 'rolled oats',
        },
        {
          qty: '1 tbsp',
          name: 'chia seeds',
        },
        {
          qty: '1 tbsp',
          name: ' ground flaxseeds',
          notes: 'You can also use linseeds',
        },
        {
          qty: '1/2 tsp',
          name: 'ground cinnamon',
        },
        {
          qty: '1 3/4 cups (425 ml)',
          name: 'plant based milk',
        },
        {
          qty: '2 tbsp',
          name: 'date syrup',
        },
        {
          qty: '1 tsp',
          name: 'vanilla extract',
        },
        {
          qty: '2/3 cup (65 g)',
          name: 'fresh/frozen blueberries',
          notes: 'You can also use 2/3 cup (125 g) strawberries',
        },
      ],
    },
  ],
  items: [
    {
      qty: '1',
      name: 'medium bowl',
    },
  ],
  steps: [
    {
      for: 'for the oatmeal',
      tasks: [
        {
          name: 'In a medium bowl add 1 cup (100 g) rolled oats',
        },
        {
          name: 'Add 1 tbsp chia seeds',
        },
        {
          name: 'Add 1 tbsp ground flaxseeds',
          notes: ['You can also use linseeds'],
        },
        {
          name: 'Add 1/2 tsp ground cinnamon',
        },
        {
          name: 'Add 1 3/4 cup (425 ml) plant based milk',
        },
        {
          name: 'Add 2 tbsp date syrup',
        },
        {
          name: 'Add 1 tsp vanilla extract',
        },
        {
          name: 'Add 2/3 cup (65 g) fresh/frozen bluberries',
          notes: ['You can use 2/3 cup (125 g) strawberries instead'],
        },
        {
          name: 'Stir to mix well',
        },
      ],
    },
    {
      for: 'for the oatmeal',
      tasks: [
        {
          name: 'Transfer the oatmeal to two small bowls and cover tightly',
        },
        {
          name: 'Refrigerate over night',
        },
      ],
    },
    {
      for: 'for serving',
      tasks: [
        {
          name: 'Transfer the oatmeal to two small bowls and cover tightly',
        },
        {
          name: 'Refrigerate over night',
        },
        {
          name: 'Enjoy :)',
        },
      ],
    },
  ],
};
