import {IRecipe} from 'types';

export const BananaChocolateSmoothie: IRecipe = {
  id: 'ecd040e7-08b4-454e-94e1-2a910342d4f0',
  createdAt: '2020-01-19T20:06:42.873Z',
  author: 'Robin Robertson',
  name: 'Banana-Chocolate Smoothie',
  image:
    'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/BananaChocolateSmoothie.jpeg',
  preparationTime: 7,
  cookingTime: 0,
  portions: '1',
  difficulty: '1',
  ingredients: [
    {
      qty: '1',
      name: 'frozen ripe banana, cut into chunks before freezing',
    },
    {
      qty: '1/2 cup/35 g',
      name: 'Frozen Blueberries',
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
      qty: '1/2 tsp',
      name: 'vanilla extract',
    },
    {
      qty: '1 tbsp',
      name: 'almond butter (or peanut butter)',
    },
    {
      qty: '1 tbsp',
      name: 'sugar (optional, depending on the sweetness of the fruit)',
    },
    {
      qty: '1 cup/22.5 g',
      name: 'raw spinach leaves',
    },
    {
      qty: '3 to 4',
      name: 'ice cubes (optional)',
    },
    {
      qty: '1 1/2 cup (360 ml)',
      name: 'water',
    },
  ],
  items: [
    {
      qty: '1',
      name: 'Blender',
    },
    {
      qty: '1',
      name: 'Cup',
    },
    {
      qty: '1/2',
      name: 'cup',
    },
    {
      qty: '1',
      name: 'tablespoon',
    },
    {
      qty: '1',
      name: 'teaspoon',
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
          name: 'frozen ripe banana, cut into chunks before freezing',
        },
        {
          qty: '1/2 cup/35 g',
          name: 'Frozen Blueberries',
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
          qty: '1/2 tsp',
          name: 'vanilla extract',
        },
        {
          qty: '1 tbsp',
          name: 'almond butter (or peanut butter)',
        },
        {
          qty: '1 tbsp',
          name: 'sugar (optional, depending on the sweetness of the fruit)',
        },
        {
          qty: '1 cup/22.5 g',
          name: 'raw spinach leaves',
        },
        {
          qty: '3 to 4',
          name: 'ice cubes (optional)',
        },
        {
          qty: '1 1/2 cup (360 ml)',
          name: 'water',
        },
      ],
      tasks: [
        {
          name:
            'Add 1 frozen ripe banana, cut into chunks before freezing in a blender',
        },
        {name: 'Add 1/2 cup/35 g Frozen Blueberries'},
        {name: 'Add 2 tbsps unsweetened cocoa powder'},
        {name: 'Add 1 tbsp ground flaxseeds (or linseeds)'},
        {name: 'Add 1 tsp vanilla extract'},
        {name: 'Add 1 tbsp almond butter (or peanut butter)'},
        {
          name:
            'Add 1 tbsp sugar (optional, depending on the sweetness of the fruit)',
        },
        {name: 'Add 1 cup/22.5 g raw spinach leaves'},
        {name: 'Add 3 to 4 ice cubes (optional)'},
        {name: 'Add 1 1/2 cup cup (360 ml) water'},
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
        },
        {name: 'For thinner texture, add less ice (if using) or more water'},
        {name: 'Serve immediately'},
      ],
      timer: {
        id: '1650eae6-a535-427b-89f3-c137b87e91aa',
        name: 'Step 2: Blend',
        minutes: 1,
        seconds: 0,
      },
      images: [],
    },
  ],
};
