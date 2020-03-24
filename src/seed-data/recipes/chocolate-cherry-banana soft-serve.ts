import {IRecipe} from 'src/types';
import uuidv4 from 'uuid/v4';

// 1 fruit
// 1 berry
// 1 nuts
export const ChocolateCherryBananaSoftServe: IRecipe = {
  id: 'bb258813-1b2f-42b6-8263-a2e4949d55e6',
  createdAt: new Date().toISOString(),
  author: 'Robin Robertson',
  name: 'Chocolate Cherry Banana Soft Serve',
  image:
    'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/ChocolateCherryBananaSoftServe.jpg',
  preparationTime: 5,
  cookingTime: 30,
  portions: '1',
  difficulty: '1',
  notes: [
    'This recipe requires a blender',
    'You will need to freeze a ripe banana cut into chunks for a few hours before you can make this soft serve',
  ],
  ingredients: [
    {
      for: 'soft serve',
      list: [
        {
          qty: '1',
          name: 'banana',
        },
        {
          qty: '2',
          name: 'dates',
        },

        {
          qty: '2 tbsps',
          name: 'almond butter',
        },

        {
          qty: '1 cup',
          name: 'frozen cherries',
        },

        {
          qty: '2 tbsps',
          name: 'cocoa powder',
        },

        {
          qty: '1/2 tsp',
          name: 'vanilla extract',
        },

        {
          qty: '1/2 cup',
          name: 'unsweetened plant based milk',
        },
      ],
    },
    {
      for: 'serving',
      list: [
        {
          qty: '1',
          name: 'banana',
          notes: 'optional',
        },
      ],
    },
  ],
  items: [
    {
      qty: '1',
      name: 'Blender',
    },
  ],
  steps: [
    {
      for: 'for the soft serve',
      tasks: [
        {
          name: 'Peel the banana',
        },
        {
          name: 'Break into chunks',
        },
        {
          name: 'Freeze for several hours or overnight',
        },
      ],
    },
    {
      for: 'for the soft serve',
      tasks: [
        {
          name: 'Soak 2 dates in water for at least 30 minutes to soften',
          timer: {
            id: uuidv4(),
            name: 'Soak dates',
            minutes: 30,
            seconds: 0,
          },
        },
        {
          name: 'Drain the dates',
        },
      ],
    },
    {
      for: 'for the soft serve',
      tasks: [
        {
          name: 'In a blender or food processor, add the frozen banana chunks',
        },
        {
          name: 'Add the dates',
        },
        {
          name: 'Add 2 tbsps almond butter',
        },
        {
          name: 'Add 1 cup frozen cherries',
        },
        {
          name: 'Add 2 tbsps cocoa powder',
        },
        {
          name: 'Add 1/2 tsp vanilla extract',
        },
        {
          name: 'Add 1/4 cup unsweetened plant based milk',
        },
        {
          name: 'Blend until smooth, thick, and creamy',
          notes: [
            'Do not blend more than necessary as this would result in a thinner texture',
            'If you are having trouble blending, you may need to let the frozen banana chunks to soften a bit',
          ],
        },
      ],
    },
    {
      for: 'for serving',
      tasks: [
        {
          name: 'Serve in a bowl with a banana if using',
        },
        {
          name: 'Enjoy! :)',
        },
      ],
    },
  ],
};
