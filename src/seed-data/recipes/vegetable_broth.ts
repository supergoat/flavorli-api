import uuidv4 from 'uuid/v4';
import {IRecipe} from '../../types';

const timerOneId = uuidv4();
const timerTwoId = uuidv4();
export const VegetableBroth: IRecipe = {
  id: '967ec459-370f-4396-9fc0-8f72dbef2059',
  createdAt: new Date().toISOString(),
  author: 'Robin Robertson',
  name: 'Vegetable Broth',
  video:
    'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/pan_cakes.mp4#t=4,',
  image: 'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/pan_cakes.jpg',
  preparationTime: 20,
  cookingTime: 0,
  portions: '4',
  difficulty: 'Simple',
  notes: [],
  ingredients: [
    {
      for: 'vegetable broth',
      list: [
        {qty: '1.85 L', name: 'water'},
        {
          qty: '1',
          name: 'medium red onion',
        },
        {
          qty: '1',
          name: 'carrot',
        },
        {
          qty: '2',
          name: 'celery stalks',
        },
        {
          qty: '3',
          name: 'garlic cloves',
        },
        {
          qty: '2',
          name: 'dried mushrooms',
        },
        {
          qty: '1/3 cup (10 g)',
          name: 'coarsely chopped fresh parsley',
        },
        {
          qty: '1/2 tsp',
          name: 'ground black pepper',
        },
        {
          qty: '2 tbsp',
          name: 'white miso paste',
        },
        {
          qty: '-',
          name: 'savory spice blend',
        },
      ],
    },
  ],
  items: [],
  steps: [
    {
      for: 'for the vegetable broth',
      tasks: [
        {
          name: 'Coarsely chop 1 medium red onion and set aside',
        },
        {
          name: 'Cut 1 carrot into 2.5 cm pieces and set aside',
        },
        {
          name: 'Coarsely chop 2 celery stalks and set aside',
        },
        {
          name: 'Crush 3 garlic cloves and set aside',
        },
      ],
    },

    {
      for: 'for the vegetable broth',
      heatLevel: 'medium',
      tasks: [
        {name: 'Place a large pan on medium heat'},
        {
          name: 'Add 250 ml of water',
        },
        {
          name: 'Add the onion, carrot, celery stalks and garlic cloves',
        },
        {
          name: 'Set aside to cook for 5 minutes',
          timer: {
            id: timerOneId,
            name: 'Cook vegetables',
            minutes: 5,
            seconds: 0,
          },
        },
      ],
    },

    {
      for: 'for the vegetable broth',
      tasks: [{name: 'Meanwhile, coarsely chop 1/3 cup (10 g) fresh parsley'}],
    },
    {
      for: 'for the vegetable broth',
      heatLevel: 'high',
      links: [
        {
          from: 2,
          name: 'Vegetables',
          timerId: timerOneId,
        },
      ],
      tasks: [
        {name: 'Add the mushrooms to the vegetables'},
        {
          name: 'Add the parsley',
        },
        {
          name: 'Add 1/2 tsp ground black pepper',
        },
        {
          name: 'Add 7 cups (1.6 L) water and stir',
        },
        {
          name: 'Bring to a boil',
        },
      ],
    },
    {
      for: 'for the vegetable broth',
      heatLevel: 'mediumLow',
      tasks: [
        {name: 'Once boiling reduce the heat to medium low'},
        {
          name: 'Set aside to simmer for 1.5 hours',
          timer: {
            id: timerTwoId,
            name: 'Simmer vegetables',
            minutes: 90,
            seconds: 0,
          },
        },
      ],
    },

    {
      for: 'for the vegetable broth',
      links: [
        {
          from: 2,
          name: 'Cooked vegetables',
          timerId: timerTwoId,
        },
      ],
      tasks: [
        {
          name:
            'Let it cool for a while and then transfer toa high-speed belnder',
        },
        {
          name: 'Blend until smooth',
        },
        {
          name: 'Return the blended broth back to the pan',
        },
      ],
    },
    {
      for: 'for the vegetable broth',
      tasks: [
        {
          name:
            'Transfer approximately 1/3 cup (80 ml) of the broth  into a small cup',
        },
        {
          name: 'Add 2 tbsp white  miso paste',
        },
        {
          name: 'Stir well until the miso dissolves',
        },
        {
          name: 'Transfer the mixture back to the pan and stir',
        },
        {
          name: 'Add savory spice blend to staste',
        },
      ],
    },
    {
      for: 'for the vegetable broth',
      tasks: [
        {
          name: 'Let the broth cool to room temperature',
        },
        {
          name: 'Divide  the broth among containers with tight-sealing lids',
        },
        {
          name:
            'Store in the refrigerator (for up to 5 days) or freezer (for up to 3 months)',
        },
      ],
    },
  ],
};
