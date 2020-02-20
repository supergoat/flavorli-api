import {IRecipe} from 'src/types';
import uuidv4 from 'uuid/v4';

export const BananaChocolateSmoothie: IRecipe = {
  id: uuidv4(),
  createdAt: new Date().toISOString(),
  author: 'Robin Robertson',
  name: 'Banana-Chocolate Smoothie',
  image:
    'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/BananaChocolateSmoothie.jpeg',
  preparationTime: 7,
  cookingTime: 0,
  portions: '1',
  difficulty: '1',
  notes: ['This recipe requires a blender'],
  ingredients: [
    {
      qty: '1',
      name: 'very ripe banana',
      notes:
        'Make sure that the banana is very ripe or the smoothie will not be sweet',
    },
    {
      qty: '0.5 cup (35 g)',
      name: 'frozen blueberries',
    },
    {
      qty: '2 tbps',
      name: 'unsweetened cocoa powder',
    },
    {
      qty: '1 tbsp',
      name: 'ground flaxseeds (or linseeds)',
    },
    {
      qty: '0.5 tsp',
      name: 'vanilla extract',
    },
    {
      qty: '1 tbsp',
      name: 'almond butter (or peanut butter)',
    },
    {
      qty: '1 tbsp',
      name: 'sugar',
      notes: 'Optional',
    },
    {
      qty: '1 cup (22.5 g)',
      name: 'raw spinach leaves',
    },
    {
      qty: '3 to 4',
      name: 'ice cubes',
      notes: 'Optional',
    },
    {
      qty: '1.5 cup (360 ml)',
      name: 'water',
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
      no: 1,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'Smoothie',
        color: 'tagRed',
      },
      items: [
        {
          qty: '1',
          name: 'Blender',
        },
      ],
      ingredients: [
        {
          qty: '1',
          name: 'very ripe banana',
        },
        {
          qty: '0.5 cup/35 g',
          name: 'frozen blueberries',
        },
        {
          qty: '2 tbps',
          name: 'unsweetened cocoa powder',
        },
        {
          qty: '1 tbsp',
          name: 'ground flaxseeds (or linseeds)',
        },
        {
          qty: '0.5 tsp',
          name: 'vanilla extract',
        },
        {
          qty: '1 tbsp',
          name: 'almond butter (or peanut butter)',
        },
        {
          qty: '1 tbsp',
          name: 'sugar',
          notes: 'Optional',
        },
        {
          qty: '1 cup/22.5 g',
          name: 'raw spinach leaves',
        },
        {
          qty: '3 to 4',
          name: 'ice cubes',
          notes: 'Optional',
        },
        {
          qty: '1.5 cup (360 ml)',
          name: 'water',
        },
      ],
      tasks: [
        {
          name: 'Cut 1 very ripe banana into chunks and add it to the blender',
        },
        {name: 'Add 0.5 cup (35 g) frozen blueberries'},
        {name: 'Add 2 tbsps unsweetened cocoa powder'},
        {name: 'Add 1 tbsp ground flaxseeds (or linseeds)'},
        {name: 'Add 1 tsp vanilla extract'},
        {name: 'Add 1 tbsp almond butter (or peanut butter)'},
        {
          name: '(Optional) Add 1 tbsp sugar',
          notes: [
            'If the banana is not very ripe the smoothie will not be sweet enough. In that case you can add some sugar',
          ],
        },
        {name: 'Add 1 cup (22.5 g) raw spinach leaves'},
        {name: '(Optional) Add 3 to 4 ice cubes'},
        {name: 'Add 1.5 cup (360 ml) water'},
      ],
      images: [],
    },
    {
      no: 2,
      type: 'PREPARATION',
      tag: {
        text: 'Smoothie',
        color: 'tagRed',
      },
      items: [],
      ingredients: [],
      tasks: [
        {
          name:
            'Blend all the ingredients until thick and smooth for about 1 minute',
          notes: ['For thinner texture, add less ice (if using) or more water'],
        },
        {name: 'Serve immediately'},
        {name: 'Enjoy!'},
      ],
      timer: {
        id: uuidv4(),
        name: 'Step 2: Blend',
        minutes: 1,
        seconds: 0,
      },
      images: [],
    },
  ],
};
