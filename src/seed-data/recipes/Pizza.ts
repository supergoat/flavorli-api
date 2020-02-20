import {IRecipe} from 'src/types';
import uuidv4 from 'uuid/v4';

export const Hummus: IRecipe = {
  id: uuidv4(),
  createdAt: new Date().toISOString(),
  author: 'James Wythe',
  name: 'Healthy one-pan wrappizza',
  image:
    'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/healthy-one-pan-pizza.jpg',
  preparationTime: 5,
  cookingTime: 15,
  portions: '1',
  difficulty: '1',
  ingredients: [
    {qty: '1 tsp', name: 'coconut oil', notes: 'You can also use olive oil'},
    {qty: '80g', name: 'chickpea flour', notes: '(Also known as gram flour)'},
    {qty: '1 tsp', name: 'mixed herbs', notes: 'optional'},
    {qty: '1 tbsp', name: 'flaxseed', notes: 'optional'},
    {qty: 'pinch', name: 'salt & pepper'},
    {qty: '115 ml', name: 'water'},
    {
      qty: '-',
      name: 'Hummus',
      notes: 'If you want to create your own in 5 minutes click the ingredient',
      link: 'See link',
    },
    {
      qty: '2-3',
      name: 'broccoli florets',
      notes: 'Optional, topping. You can add more if you like',
    },
    {
      qty: '2-3',
      name: 'cherry tomatoes',
      notes: 'Optional, topping. You can add more if you like',
    },
    {qty: '-', name: 'courgette', notes: 'Optional, topping'},
    {qty: '-', name: 'artichokes', notes: 'Optional, topping'},
    {
      qty: '1',
      name: 'red bell pepper',
      notes: 'Optional, topping. You can add more if you like',
    },
    {qty: 'handful', name: 'spinach', notes: 'Optional, topping'},
    {qty: '1 tsp', name: 'mixed herbs', notes: 'Optional, topping'},
    {qty: '1', name: 'avocado', notes: 'Optional, topping'},
    {qty: '1', name: 'red onion', notes: 'Optional, topping'},
    {
      qty: 'Pinch',
      name: 'chilli flakes',
      notes: 'Optional, topping',
    },
    {
      qty: 'Pinch',
      name: 'salt & pepper',
      notes: 'Optional, topping',
    },
  ],
  items: [],
  steps: [
    {
      no: 1,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'for the toppings',
        color: 'tagRed',
      },
      items: [
        {
          qty: '1',
          name: 'large bowl',
        },
        {qty: '1', name: 'pinch bowl'},
      ],
      ingredients: [
        {
          qty: '2-3',
          name: 'broccoli florets',
          notes: 'Optional, topping. You can add more if you like',
        },
        {
          qty: '2-3',
          name: 'cherry tomatoes',
          notes: 'Optional, topping. You can add more if you like',
        },
        {qty: '-', name: 'courgette', notes: 'Optional, topping'},
        {qty: '-', name: 'artichokes', notes: 'Optional, topping'},
        {
          qty: '1',
          name: 'red bell pepper',
          notes: 'Optional, topping. You can add more if you like',
        },
        {qty: 'handful', name: 'spinach', notes: 'Optional, topping'},
        {qty: '1 tsp', name: 'mixed herbs', notes: 'Optional, topping'},
        {qty: '1', name: 'avocado', notes: 'Optional, topping'},
        {qty: '1', name: 'red onion', notes: 'Optional, topping'},
      ],
      tasks: [
        {
          name: 'Add 2 -3 broccoli florets in a large bowl',
        },
        {
          name:
            'Wash and slice 2-3 cherry tomatoes and add them to the same bowl',
        },
        {
          name:
            'Wash and chop 1 courgette into small cubes and add it the same bowl',
        },
        {
          name: 'Roughly chop a few spinach leaves and add them the same bowl',
        },
        {
          name: 'In a pinch bowl add 1 tsp mixed herbs and set aside',
        },
      ],
    },
    {
      no: 1,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'for the base',
        color: 'tagRed',
      },
      items: [
        {
          qty: '1',
          name: 'large pan',
        },
      ],
      ingredients: [
        {
          qty: '1 tsp',
          name: 'coconut oil',
          notes: 'You can also use olive oil',
        },
      ],
      tasks: [
        {
          name:
            'In a large pan add 1 tsp coconut oil or olive oil and set aside to heat',
        },
      ],
    },

    {
      no: 2,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'for the base',
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
          qty: '80 g',
          name: 'chickpea flour',
          notes: '(Also known as gram flour)',
        },
        {qty: '1 tsp', name: 'mixed herbs', notes: 'optional'},
        {qty: '1 tbsp', name: 'flaxseeds', notes: 'optional'},
        {qty: 'pinch', name: 'salt'},
        {qty: 'pinch', name: 'pepper'},
        {qty: '115 ml', name: 'water'},
      ],
      tasks: [
        {
          name: 'Meanwhile, in a large bowl add 80 g chickpea flour',
        },
        {
          name: 'Add 1 tsp mixed herbs if using',
        },
        {
          name: 'Add 1 tbsp flaxseeds if using',
        },
        {
          name: 'Add a pinch of salt',
        },
        {
          name: 'Add a pinch of pepper',
        },
        {
          name: 'Mix well together to make sure there are no lumps',
        },
        {
          name: 'Now add 115 ml water and whisk until a smooth batter forms',
        },
      ],
    },

    {
      no: 3,
      type: 'PREPARATION',
      links: [
        {
          from: 1,
          heading: 'From Step 1',
          name: 'Heated pan',
        },
        {
          from: 2,
          heading: 'From Step 2',
          name: 'Batter mixture',
        },
      ],
      tag: {
        text: 'for the base',
        color: 'tagRed',
      },
      items: [],
      ingredients: [],
      tasks: [
        {
          name: 'Ensure the pan is smoking hot',
        },
        {
          name:
            'Pour in the batter mixture as you would for a pancake and tilt the pan until its evenly spread',
        },
        {
          name: 'Fry for 2 -3 minutes',
        },
      ],
      timer: {
        id: uuidv4(),
        name: 'Step 3: Fry base',
        minutes: 3,
        seconds: 0,
      },
    },

    {
      no: 4,
      type: 'PREPARATION',
      tag: {
        text: 'for the base',
        color: 'tagRed',
      },
      items: [],
      ingredients: [],
      tasks: [
        {
          name:
            'Flip the base to the other side and fry for an additional 2-4 minutes',
        },
      ],
      timer: {
        id: uuidv4(),
        name: 'Step 4: Fry base',
        minutes: 3,
        seconds: 0,
      },
    },

    {
      no: 5,
      type: 'PREPARATION',
      links: [
        {
          from: 4,
          heading: 'From Step 4',
          name: 'Fried base',
        },
      ],

      tag: {
        text: 'for the base',
        color: 'tagRed',
      },
      items: [],
      ingredients: [
        {
          qty: '1 tsp',
          name: 'coconut oil',
          notes: 'You can also use olive oil',
        },
      ],
      tasks: [
        {
          name: 'Once the base is complete remove from the pan',
          notes: ['Keep the pan to fry the vegetable'],
        },
        {
          name: 'Add 1 tsp of oil to the pan',
        },
        {
          name: 'Add all the vegetables to the pan',
        },
        {
          name: 'Add the mixed herbs',
        },
        {
          name: 'Fry down for around 3-5 mins',
        },
      ],
    },
  ],
};
