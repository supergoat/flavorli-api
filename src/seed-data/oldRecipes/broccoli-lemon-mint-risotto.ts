import uuidv4 from 'uuid/v4';
import {IRecipe} from '../../types';

const timerIdOne = uuidv4();
const timerIdTwo = uuidv4();
export const Rissoto: IRecipe = {
  id: '2a72fea6-8379-4a8f-8178-f5f5d3d67194',
  createdAt: new Date().toISOString(),
  author: 'James Wythe',
  name: 'Broccoli, lemon, mint risotto',
  image: 'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/risotto.jpeg',
  preparationTime: 10,
  cookingTime: 10,
  portions: '4-6',
  difficulty: 'Simple',
  notes: [
    'This recipe requires a blender',
    'At somep point you will need to be hands on and stirring for approximately 25 minutes',
  ],
  ingredients: [],
  items: [],
  steps: [
    {
      for: 'the risotto',
      tasks: [
        {
          name:
            'Place a small pot of water on medium-high heat and set aside to boil',
        },
      ],
    },
    {
      for: 'the risotto',
      tasks: [
        {
          name:
            'Add 60 ml (or 0.25 cup) extra-virgin olive oil in pinch bowl and set aside',
        },
        {name: 'Finely dice 0.5 onion and add it to a small bowl'},
        {
          name:
            'Chop 3 spring onions (scallions). Add them to the same small bowl and set aside',
          notes: ['Make sure to include the white and green parts'],
        },
      ],
    },
    {
      for: 'the risotto',
      tasks: [
        {name: 'Finely chop 1 clove garlic and set aside in a pinch bowl'},
        {
          name:
            'In a small bowl add 330 g (or 1.5 cups) arborio (risotto) rice and set aside',
        },
      ],
    },
    {
      for: 'the risotto',
      tasks: [{name: 'In small bowl add 80 g (0.5 cup) peas'}],
    },
    {
      for: 'the pesto',

      tasks: [
        {
          name:
            'In a a pinch bowl add 60 ml extra-virgin olive oil and set aside',
        },
        {name: 'In a small bowl add 10g (0.5 cup) mint leaves'},
        {name: 'Add 10g (0.5 cup) flat-leaft parsley leaves in the same bowl'},
        {name: 'Peel a garlic clove and add it to the same bowl'},
        {name: 'Zest the lemon in the same bowl'},
        {name: 'Then squeeze the lemon juice in a pinch bowl'},
      ],
    },
    {
      for: 'the risotto',
      tasks: [
        {name: 'Trim 1 broccoli head into florets, do not include the stalk'},
        {name: 'In the pot with boiling water, add salt'},
        {
          name: 'Add the broccoli and boil for 3-4 minutes',
          timer: {
            id: timerIdOne,
            name: 'Step 4: Boil broccoli',
            minutes: 4,
            seconds: 0,
          },
          notes: ['Do not overcook, you want to keep that bright green colour'],
        },
      ],
    },
    {
      for: 'the risotto',
      tasks: [
        {name: 'Drain the broccoli and run it under cold water until cool'},
        {name: 'Set aside to drain'},
        {
          name:
            'In the same pot that you used for the broccoli, prepare 1-1.25 litres (4-5 cups) vegetable stock',
          notes: [
            'Different vegetable stocks require different amounts of water to prepare. Make sure to follow the instructions on the package',
          ],
        },
        {
          name:
            'Set aside on medium-low heat to keep warm and continue to next step',
        },
      ],
    },

    {
      for: 'the risotto',
      tasks: [
        {name: 'In a large saucepan, heat the olive oil over medium heat'},
        {name: 'Add the onions'},
        {name: 'Add a big pinch of salt'},
        {
          name: 'Fry for 2 minutes or until the onions begin to soften',
          timer: {
            id: uuidv4(),
            name: 'Step 8: Fry onions',
            minutes: 2,
            seconds: 0,
          },
        },
      ],
    },
    {
      for: 'the risotto',
      tasks: [
        {name: 'Add the garlic and cook for a few seconds'},
        {name: 'Add the rice'},
        {
          name:
            'Stir well to coat and cook over low heat until the grains begin to look a little translucent around the edges',
        },
      ],
    },

    {
      for: 'the risotto',
      notes: [
        'This steps requires you to be hands on and stirring for approximately 25 minutes',
      ],
      tasks: [
        {
          name: 'Reduce the heat to low',
        },
        {
          name: 'Slowly begin to add the warm stock to the rice',
          notes: [
            'Add about 1 cup at a time, stiring constantly until it reduces before adding the next',
          ],
        },
        {
          name:
            'When you have added most of the stock, taste the rice. If its cooked stop adding more stock',
          notes: [
            'The rice should be creamy and cooked through',
            'You might not need to add all the stock. Different brands of rice need slightly different amounts of stock, so use your best judgement',
          ],
        },
      ],
    },
    {
      for: 'the pesto',

      tasks: [
        {
          name: 'Add the peas to the rice and cook for approximately 2 minutes',
          timer: {
            id: timerIdTwo,
            name: 'Step 11: Cook peas with rice',
            minutes: 2,
            seconds: 0,
          },
        },
        {name: 'Remove from the heat and set aside'},
      ],
    },
    {
      for: 'the pesto',
      tasks: [
        {name: 'In a blender, add the broccoli'},
        {name: 'Add the olive oil'},
        {name: 'Add the lemon juice'},
        {name: 'Add mint leaves, parsley leaves, garlic clove and lemon zest'},
        {
          name: 'Blend until smooth, approximately 2 minutes',
          timer: {
            id: uuidv4(),
            name: 'Step 12: Blend pesto',
            minutes: 2,
            seconds: 0,
          },
        },
      ],
    },

    {
      for: 'the pesto',
      tasks: [{name: 'Add the pesto and stir'}],
    },

    {
      for: 'Assembling',
      tasks: [
        {name: 'Serve the rissoto in a plate'},
        {name: 'Sprinkle with some vegan parmesan'},
        {name: 'Sprinkle with pepper'},
      ],
    },
  ],
};
