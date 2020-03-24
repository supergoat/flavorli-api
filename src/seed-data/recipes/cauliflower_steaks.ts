import uuidv4 from 'uuid/v4';
import {IRecipe} from '../../types';

const timerOneId = uuidv4();
export const CauliflowerSteaks: IRecipe = {
  id: '3c7c7fec-1a7e-4352-8b3b-ce15077100fe',
  createdAt: new Date().toISOString(),
  author: 'Robin Robertson',
  name: 'Cauliflower steaks with chermoula sauce',
  image:
    'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/cauliflower_steak.jpeg',
  preparationTime: 7,
  cookingTime: 0,
  portions: '2',
  difficulty: '1',
  notes: ['This recipe requires a blender'],
  ingredients: [
    {
      for: 'cauliflower steak',
      list: [
        {
          qty: '1',
          name: 'head cauliflower',
        },
        {
          qty: '3',
          name: 'garlic cloves',
        },
        {
          qty: '3/4 cup (22 g)',
          name: ' fresh parsley',
        },
        {
          qty: '3/4 cups (38 g)',
          name: 'fresh coriander',
        },
        {
          qty: '1/4 tsp',
          name: 'ground tumeric',
        },
        {
          qty: '1 tsp',
          name: 'white miso paste',
        },
        {
          qty: '1/2 tsp',
          name: 'ground coriander',
        },
        {
          qty: '1/2 tsp',
          name: 'ground cumin',
        },
        {
          qty: '1/2 tsp',
          name: 'smoked paprika',
        },
        {
          qty: '1/4 tsp',
          name: 'ground ginger',
        },
        {
          qty: '1/4 tsp',
          name: 'cayenne pepper',
        },
        {
          qty: '1 tbsp',
          name: 'blended peeled lemon',
        },
      ],
    },
  ],
  items: [],
  steps: [
    {
      for: 'for the cauliflower',
      tasks: [
        {
          name: 'Preheat the oven to 220 C',
        },
      ],
    },
    {
      for: 'for the cauliflower',
      tasks: [
        {name: 'Chop the cauliflower into florets'},
        {name: 'Place the florets on a baking tray'},
        {
          name: 'Place in the oven for 30 minutes',
          notes: ['Turn half way through'],
          timer: {
            id: timerOneId,
            name: 'Step 1: Roasted Cauliflower',
            minutes: 45,
            seconds: 0,
          },
        },
      ],
    },
    {
      for: 'for the chermoula sauce',
      notes: ["Don't worry if it doesn't look smooth yet"],
      tasks: [
        {
          name: 'Crush 3 garlic cloves and add them to a blender',
        },
        {
          name:
            'Coarsely chop 3/4 cup (22 g) fresh parsley and add it to the blender',
        },
        {
          name:
            'Coarsely chop 3/4 cups (38 g) fresh coriander and add it to the blender',
        },

        {
          name: 'Process until finely minced',
        },
      ],
    },
    {
      for: 'for the chermoula sauce',
      tasks: [
        {
          name: 'Add 1/4 tsp ground tumeric',
        },
        {
          name: 'Add 1 tsp white miso paste to the blender',
        },
        {
          name: 'Add 1/2 tsp ground coriander',
        },
        {
          name: 'Add 1/2 tsp ground cumin',
        },
        {
          name: 'Add 1/2 tsp smoked paprika',
        },
        {
          name: 'Add 1/4 tsp ground ginger',
        },
        {
          name: 'Add 1/4 tsp cayenne pepper',
        },
        {
          name: 'Add 1 tbsp blended peeled lemon',
        },
        {
          name: 'Add 1/4 cup (60 ml) water',
        },
        {
          name: 'Process until the sauce is smooth and set aside',
          notes: [
            'Make sure you process it long enough for it to become smooth and runny',
          ],
        },
      ],
    },
    {
      for: 'for serving',
      links: [
        {
          from: 2,
          name: 'Roasted cauliflower',
          timerId: timerOneId,
        },
      ],
      tasks: [
        {
          name: 'Remove the roasted cauliflower from the oven',
        },
        {
          name: 'Serve hot topped with the sauce',
        },
      ],
    },
  ],
};
