import uuidv4 from 'uuid/v4';
import {IRecipe} from '../../../types';

export const VegCurry: IRecipe = {
  id: uuidv4(),
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
    {qty: '2 tsp', name: 'Chopped Garlic Very Lazy'},
    {qty: '2 tsp', name: 'Chopped Red Chillies Very Lazy'},
    {qty: '2 tbsp', name: 'oil'},
    {qty: '1', name: 'red onion roughly'},
    {qty: '1 tbsp', name: 'ground coriander'},
    {qty: '1', name: 'courgette'},
    {qty: '1', name: 'aubergine'},
    {qty: '1', name: 'pepper'},
    {qty: '1', name: '400g tin of tomatoes'},
    {qty: '1', name: '400ml tin of coconut milk'},
    {qty: '1', name: '400g tin of chickpeas'},
    {qty: '200 ml (just under 1 cup)', name: 'water'},
    {qty: '100 g (roughly 1 cup)', name: 'ground almonds'},
    {qty: ' 1', name: 'Lime'},
    {qty: 'Handful', name: 'fresh coriander', notes: 'Optional'},
    {qty: 'Handful', name: 'fresh spinach', notes: 'Optional'},
    {qty: '-', name: 'Salt & pepper'},
  ],
  items: [
    {qty: '4', name: 'pinch bowl'},
    {qty: '3', name: 'small bowl'},
    {qty: '1', name: 'large bowl'},
    {qty: '1', name: 'glass'},
  ],
  steps: [
    {
      no: 1,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'For the chilli',
        color: 'tagRed',
      },
      items: [
        {
          qty: '2',
          name: 'pinch bowl',
        },
      ],
      ingredients: [
        {
          qty: '2 tbsp',
          name: 'oil',
        },
        {
          qty: '2 tsp',
          name: 'chopped garlic',
        },
        {
          qty: '1-2 tsp',
          name: 'chopped red chillies',
        },
      ],
      tasks: [
        {name: 'Add 2 tbsp oil in a pinch bowl and set aside'},
        {
          name:
            'Add 2 tsp chopped garlic in a separate pinch bowl and set aside',
        },
        {
          name:
            'Add 1-2 tsp chopped red chillies in the same pinch bowl and set aside ',
        },
      ],
      images: [
        {
          src:
            'http://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/chilli_onion_oil.jpeg',
          alt: 'oil, garlic and chilli',
        },
      ],
    },

    {
      no: 2,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'For the chilli',
        color: 'tagRed',
      },
      items: [
        {
          qty: '1',
          name: 'pinch bowl',
        },
        {
          qty: '1',
          name: 'small bowl',
        },
      ],
      ingredients: [
        {
          qty: '1 tbsp',
          name: 'ground coriander',
        },
        {
          qty: '1',
          name: 'onion',
        },
      ],
      tasks: [
        {name: 'Add 1 tbsp ground coriander in a pinch bowl and set aside'},
        {name: 'Peel and slice an onion and set aside in a bowl'},
      ],
      images: [
        {
          src:
            'http://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/onion_coriander.jpeg',
          alt: 'onion and coriander',
        },
      ],
    },

    {
      no: 3,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'For the chilli',
        color: 'tagRed',
      },
      items: [
        {
          qty: '1',
          name: 'large bowl',
        },
      ],
      ingredients: [
        {
          qty: '1',
          name: 'eggplant (aubergine)',
        },
        {
          qty: '1',
          name: 'zucchini (courget)',
        },
      ],
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
      no: 4,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'For the chilli',
        color: 'tagRed',
      },
      items: [
        {
          qty: '2',
          name: 'small bowls',
        },
        {
          qty: '1',
          name: 'glass',
        },
        {
          qty: '1',
          name: 'pinch bowl',
        },
      ],
      ingredients: [
        {
          qty: '1 (400 g)',
          name: 'tin of tomatoes',
        },

        {
          qty: '1 (400 ml)',
          name: 'tin of coconut milk',
        },
        {
          qty: '1 (400 g)',
          name: 'tin of chickpeas',
        },
        {
          qty: '1 cup (200 ml)',
          name: 'water',
        },
        {
          qty: '100 g',
          name: 'ground almonds',
        },
        {
          qty: '1',
          name: 'lime',
        },
        {
          qty: '-',
          name: 'salt & pepper',
        },
      ],
      tasks: [
        {name: 'Open and set aside 1 tin (400 g) of tomatoes'},
        {name: 'Open and set aside 1 tin (400 ml) of coconut milk'},
        {
          name:
            'Open 1 tin (400 g) of chickpeas, drain and rinse and place in a small bowl',
        },
        {name: 'Add 1 cup (200 ml) of water in a glass and set aside'},
        {name: 'Add 100 g ground almonds in a small bowl and set aside'},
        {name: 'Squeeze 1 lime and set aside in a pinch bowl'},
      ],
      images: [
        {
          src:
            'http://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/ingredients.jpeg',
          alt:
            'tomatoes, coconut milk, chickpeas, water, almonds and lime juice',
        },
      ],
    },

    {
      no: 5,
      type: 'PREPARATION',
      tag: {
        text: 'For the chilli',
        color: 'tagRed',
      },
      items: [
        {
          qty: '1',
          name: 'large pot',
        },
      ],
      links: [
        {from: 1, heading: 'From Step 1', name: 'Oil, garlic and chillies'},
      ],
      ingredients: [],
      tasks: [
        {name: 'Place a large pot over high heat'},
        {name: 'Add the oil'},
        {name: 'Add the chopped garlic'},
        {name: 'Add the chopped red chillies'},
        {name: 'Sauté for 1-2 minutes'},
      ],
      timer: {
        id: uuidv4(),
        name: 'Step 5: Sauté garlic and chillies',
        minutes: 2,
        seconds: 0,
      },
    },

    {
      no: 6,
      type: 'PREPARATION',
      tag: {
        text: 'For the chilli',
        color: 'tagRed',
      },
      items: [],
      links: [{from: 2, heading: 'From Step 2', name: 'Onion and coriander'}],
      ingredients: [],
      tasks: [
        {name: 'Add the onion'},
        {name: 'Add the ground coriander'},
        {name: 'Stir and sauté for 1-2 minutes'},
      ],
      timer: {
        id: uuidv4(),
        name: 'Step 6: Sauté onion',
        minutes: 2,
        seconds: 0,
      },
    },

    {
      no: 7,
      type: 'PREPARATION',
      tag: {
        text: 'For the chilli',
        color: 'tagRed',
      },
      items: [],
      links: [{from: 3, heading: 'From Step 3', name: 'Vegetables'}],
      ingredients: [],
      tasks: [
        {name: 'Add the vegetables'},
        {name: 'Stir and sauté for 4 minutes'},
      ],
      timer: {
        id: uuidv4(),
        name: 'Step 7: Sauté vegetables',
        minutes: 4,
        seconds: 0,
      },
    },

    {
      no: 8,
      type: 'PREPARATION',
      tag: {
        text: 'For the chilli',
        color: 'tagRed',
      },
      items: [],
      links: [
        {
          from: 4,
          heading: 'From Step 4',
          name: 'Tomatoes, coconut milk, chickpeas, water, almonds, lime juice',
        },
      ],
      ingredients: [],
      tasks: [
        {name: 'Add the tinned tomatoes'},
        {name: 'Add the coconut milk'},
        {name: 'Add the chickpeas'},
        {name: 'Add the water'},
        {name: 'Add the ground almonds'},
        {name: 'Add the lime juice'},
        {name: 'Salt and pepper to taste. Make sure to add enough salt'},
        {name: 'Stir well'},
        {
          name:
            'Cook on a high heat for approximately 10 minutes until the chilli thickens',
        },
      ],
      timer: {
        id: uuidv4(),
        name: 'Step 8: Cook Chilli',
        minutes: 10,
        seconds: 0,
      },
    },
  ],
};
