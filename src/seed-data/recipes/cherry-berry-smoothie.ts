import {IRecipe} from 'src/types';
import uuidv4 from 'uuid/v4';

export const CherryBerrySmoothie: IRecipe = {
  id: '2ee649cc-0915-4b71-86bd-3e741067ff9b',
  createdAt: new Date().toISOString(),
  author: 'Robin Robertson',
  name: 'Cherry Berry Smoothie',
  image:
    'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/CherryBerrySmoothie.jpeg',
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
      qty: '1 cup (100 g)',
      name: 'frozen blueberries',
    },
    {
      qty: '0.5 cup (110 g)',
      name: 'pitted cherries',
      notes: 'fresh or frozen ',
    },
    {
      qty: '1 tbsp',
      name: 'ground flaxseeds (or linseeds)',
      notes:
        'Flaxseeds improve regular bowel movements and can improve your digestive health. In addition they can help lower cholesterol and may play an important role in improving heart health. They also lower the risk of strokes',
    },
    {
      qty: '1 tbsp',
      name: 'almond butter (or peanut butter)',
    },
    {
      qty: '1 cup (22.5 g)',
      name: 'raw spinach leaves',
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
      for: 'the smoothie',
      tasks: [
        {
          name: 'Cut 1 very ripe banana into chunks and add it to the blender',
        },
        {name: 'Add 1 cup (100 g) frozen blueberries'},
        {name: 'Add 0.5 cup (110 g) fresh or frozen pitted cherries'},
        {name: 'Add 1 tbsp ground flaxseeds (or linseeds)'},
        {name: 'Add 1 tbsp almond butter (or peanut butter)'},
        {name: 'Add 1 cup (22.5 g) raw spinach leaves'},
        {name: 'Add 1.5 cup  (360 ml) water'},
      ],
      images: [],
    },
    {
      for: 'the smoothie',
      tasks: [
        {
          name:
            'Blend all the ingredients until thick and smooth for about 1 minute',
          notes: ['For thinner texture, add less ice (if using) or more water'],
          timer: {
            id: uuidv4(),
            name: 'Step 2: Blend',
            minutes: 1,
            seconds: 0,
          },
        },
        {name: 'Serve immediately'},
        {name: 'Enjoy!'},
      ],

      images: [],
    },
  ],
};
