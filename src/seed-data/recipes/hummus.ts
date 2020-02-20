import {IRecipe} from 'src/types';
import uuidv4 from 'uuid/v4';

export const Hummus: IRecipe = {
  id: uuidv4(),
  createdAt: new Date().toISOString(),
  author: 'James Wythe',
  name: 'Basil Hummus',
  image:
    'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/basil_hummus.jpg',
  preparationTime: 3,
  cookingTime: 0,
  portions: '3-4',
  difficulty: '1',
  notes: ['This recipe requires a blender'],
  ingredients: [
    {qty: '1 can (400 g)', name: 'chickpeas'},
    {qty: '1', name: 'garlic clove'},
    {qty: '0.5', name: 'large lemon'},
    {qty: '4 tbsps', name: 'water'},
    {qty: '3 tbsps', name: 'olive oil'},
    {qty: 'handful', name: 'fresh basil leaves'},
    {qty: '3 - 4 pinches', name: 'salt'},
    {qty: '2 - 3 pinches', name: 'pepper'},
  ],
  items: [
    {
      qty: '1',
      name: 'small bowl',
    },
    {
      qty: '-',
      name: 'Blender',
    },
  ],
  steps: [
    {
      no: 1,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'for the hummus',
        color: 'tagRed',
      },
      items: [],
      ingredients: [],
      tasks: [
        {
          name: 'Drain a can (400 g) of chickpeas and set aside',
        },
        {
          name: 'Peel and chop 1 garlic clove and set aside',
        },
        {
          name: 'Squeeze 0.5 lemon and set the juice aside',
        },
      ],
    },
    {
      no: 2,
      type: 'MISE_EN_PLACE',
      links: [
        {
          from: 1,
          heading: 'From Step 1',
          name: 'Chickpeas, chopped garlic and lemon',
        },
      ],
      tag: {
        text: 'for the hummus',
        color: 'tagRed',
      },
      items: [],
      ingredients: [
        {qty: '4 tbsps', name: 'water'},
        {qty: '3 tbsps', name: 'olive oil'},
        {
          qty: 'handful',
          name: 'fresh basil leaves',
          notes: "If you don't have fresh basil use dried",
        },
        {qty: '3 - 4 pinches', name: 'salt'},
        {qty: '2 - 3 pinches', name: 'pepper'},
      ],
      tasks: [
        {
          name: 'In a blender add the chickpeas',
        },
        {
          name: 'Add the lemon juice',
        },
        {
          name: 'Add the chopped garlic',
        },
        {
          name: 'Add 4 tbsps water',
        },
        {
          name: 'Add 3 tbsps olive oil',
        },

        {
          name: 'Add the basil leaves',
        },
        {
          name: 'Add 3 - 4 pinches of salt',
        },
        {
          name: 'Add 2 - 3 pinches of pepper',
        },
      ],
    },

    {
      no: 3,
      type: 'PREPARATION',
      tag: {
        text: 'for the hummus',
        color: 'tagRed',
      },
      items: [],
      ingredients: [],
      tasks: [
        {
          name:
            'Blend all the ingredients until thick and smooth for about 1 minute',
        },
        {name: 'Serve immediately or save in the fridge for later use'},
        {name: 'Enjoy!'},
      ],
      timer: {
        id: uuidv4(),
        name: 'Step 3: Blend',
        minutes: 1,
        seconds: 0,
      },
      images: [],
    },
  ],
};
