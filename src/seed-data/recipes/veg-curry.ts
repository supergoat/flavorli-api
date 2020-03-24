import uuidv4 from 'uuid/v4';
import {IRecipe} from '../../types';

const timerOneId = uuidv4();
export const VegCurry: IRecipe = {
  id: 'b1f0b7fe-4c86-419c-b372-c69aca2083c9',
  createdAt: new Date().toISOString(),
  author: 'James Wythe',
  name: 'Veg Curry',
  image:
    'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/15-Minute-Veg-Curry-Top-Pot.jpg',
  preparationTime: 10,
  cookingTime: 10,
  portions: '4',
  difficulty: 'Simple',
  notes: [],
  ingredients: [
    {
      for: 'chilli',
      list: [
        {qty: '2', name: 'garlic cloves'},
        {qty: '2', name: 'red chillies'},
        {qty: '2 tbsp', name: 'oil'},
        {qty: '1', name: 'red onion'},
        {qty: '1 tbsp', name: 'ground coriander'},
        {qty: '1', name: 'courgette'},
        {qty: '1', name: 'aubergine'},
        {qty: '1', name: 'pepper'},
        {qty: '1', name: '400 g tin of tomatoes'},
        {qty: '1', name: '400 ml tin of coconut milk'},
        {qty: '1', name: '400 g tin of chickpeas'},
        {qty: '200 ml (just under 1 cup)', name: 'water'},
        {qty: '100 g (roughly 1 cup)', name: 'ground almonds'},
        {qty: ' 1', name: 'Lime'},
        {qty: 'Handful', name: 'fresh coriander', notes: 'Optional'},
        {qty: 'Handful', name: 'fresh spinach', notes: 'Optional'},
        {qty: '-', name: 'Salt & pepper'},
      ],
    },
  ],
  items: [
    {qty: '1', name: 'pinch bowl'},
    {qty: '1', name: 'small bowl'},
    {qty: '1', name: 'large bowl'},
    {qty: '1', name: 'citrus squeezer'},
  ],
  steps: [
    {
      for: 'for the chilli',
      tasks: [
        {
          name:
            'Wash 1 eggplant, cut it into 1 cm cubes and place it in a large bowl',
        },
        {
          name:
            'Wash 1 zucchini, cut it into small cubes and place it in the same bowl',
        },
        {
          name:
            'Wash 1 bell pepper, cut it into small cubes and place it in the same bowl',
        },
        {name: 'You will no longer need the knife and cutting board'},
      ],
      images: [
        {
          src:
            'http://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/eggplant_zucchini_pepper.jpeg',
          alt: 'eggplant, zucchini and pepper',
        },
      ],
    },
    {
      for: 'for the chilli',
      tasks: [{name: 'Slice an onion and set aside'}],
    },
    {
      for: 'for the chilli',
      tasks: [
        {
          name: 'Crush 2 large garlic cloves',
        },
        {
          name: 'Slice and deseed 2 red chillis',
        },
      ],
    },
    {
      for: 'for the chilli',
      tasks: [
        {name: 'Place a large pot over high heat'},
        {name: 'Add 2 tbsp oil'},
        {name: 'Add the crushed garlic cloves'},
        {name: 'Add the chopped red chillies'},
        {
          name: 'Sauté for 1-2 minutes',
          timer: {
            id: uuidv4(),
            name: 'Step 5: Sauté garlic and chillies',
            minutes: 2,
            seconds: 0,
          },
        },
      ],
    },

    {
      for: 'for the chilli',
      tasks: [
        {name: 'Add the onion'},
        {name: 'Add 1 tbsp ground coriander'},
        {
          name: 'Stir and sauté for 1-2 minutes',
          timer: {
            id: uuidv4(),
            name: 'Step 6: Sauté onion',
            minutes: 2,
            seconds: 0,
          },
        },
      ],
    },

    {
      for: 'for the chilli',
      links: [{from: 3, name: 'Vegetables'}],
      tasks: [
        {name: 'Add the vegetables'},
        {
          name: 'Stir and sauté for 4 minutes',
          timer: {
            id: uuidv4(),
            name: 'Step 7: Sauté vegetables',
            minutes: 4,
            seconds: 0,
          },
        },
      ],
    },

    {
      for: 'for the chilli',
      tasks: [
        {
          name: 'Open and set aside 1 tin (400 g) of tomatoes',
        },
        {name: 'Measure 1 cup (200 ml) of water in measuring jar set aside'},
        {name: 'Add 100 g ground almonds in a small bowl and set aside'},
        {name: 'Squeeze 1 lime and set aside'},
        {
          name:
            'Open 1 tin (400 g) of chickpeas, drain, rinse and place in a small bowl',
        },
      ],
    },

    {
      for: 'for the chilli',
      links: [
        {
          from: 4,
          name: 'Soft vegetables',
          timerId: timerOneId,
        },
      ],
      heatLevel: 'mediumHigh',
      tasks: [
        {name: 'Add the chopped tomatoes'},
        {name: 'Add the coconut milk'},
        {name: 'Add the chickpeas'},
        {name: 'Add the water'},
        {name: 'Add the ground almonds'},
        {name: 'Add the lime juice'},
        {name: 'Salt and pepper to taste. Make sure to add enough salt'},
        {name: 'Stir well'},
        {
          name:
            'Cook on a medium/high heat for approximately 10 minutes until the chilli thickens',
          timer: {
            id: uuidv4(),
            name: 'Step 8: Cook Chilli',
            minutes: 10,
            seconds: 0,
          },
        },
      ],
    },
  ],
};
