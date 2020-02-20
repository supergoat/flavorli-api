import uuidv4 from 'uuid/v4';
import {IRecipe} from '../../types';

const timerOneId = uuidv4();
const timerTwoId = uuidv4();
export const LentilSoup: IRecipe = {
  id: uuidv4(),
  createdAt: new Date().toISOString(),
  author: 'James Wythe',
  name: 'Colourful Lentil Soup',
  image:
    'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/cauliflower-small.jpg',
  preparationTime: 10,
  cookingTime: 45,
  portions: '4',
  difficulty: 'Simple',
  notes: [
    "You can try this recipe as is or with a cauliflower topping. If you don't want to have the cauliflower topping you can skip step 1",
  ],
  ingredients: [
    {qty: '1', name: 'Cauliflower', notes: 'Optional'},
    {qty: '-', name: 'smoked paprika', notes: 'Optional'},
    {qty: '-', name: 'Olive oil'},
    {qty: '450 g', name: 'sweet potato'},
    {qty: '2', name: 'cellery stalks'},
    {qty: '3-4', name: 'medium carrots'},
    {qty: '1', name: 'medium/large onion'},
    {qty: '2', name: 'garlic cloves'},
    {qty: '2 tbsp', name: 'olive oil'},
    {qty: '1.5 l', name: 'veg stock'},
    {qty: '1 cup', name: 'red split lentils'},
    {qty: '-', name: 'salt', notes: 'to taste'},
    {qty: '-', name: 'pepper', notes: 'to taste'},
  ],
  items: [
    {
      qty: '1',
      name: 'baking tray',
      notes: 'Optional, if roasting the cauliflower',
    },
    {
      qty: '1',
      name: 'large pan',
    },
    {
      qty: '2',
      name: 'pinch bowls',
      notes: 'to hold the olive oil and garlic',
    },
    {
      qty: '2',
      name: 'small bowls',
      notes: 'to hold the onions and lentils',
    },
    {
      qty: '1',
      name: 'large bowl',
      notes: 'to hold the cut vegetables',
    },
    {
      qty: '1',
      name: 'large jar',
      notes: 'to prepare the stock',
    },
  ],
  steps: [
    {
      no: 1,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'for the roasted cauliflower',
        color: 'tagRed',
      },
      notes: [
        'This step is optional, you can have the soup without the cauliflower',
      ],
      ingredients: [
        {
          qty: '1',
          name: 'Cauliflower',
        },
        {
          qty: '-',
          name: 'Olive oil',
        },
        {
          qty: '-',
          name: 'smoked paprika',
        },
      ],
      items: [{qty: '1', name: 'Baking tray'}],
      tasks: [
        {name: 'Chop the cauliflower into florets'},
        {name: 'Place on a baking tray'},
        {
          name:
            'Sprinkle olive oil along with the smoked paprika until lightly covered',
        },
        {name: 'Place in the oven for 45 minutes (make sure to turn half way)'},
      ],
      timer: {
        id: timerOneId,
        name: 'Step 1: Roasted Cauliflower',
        minutes: 45,
        seconds: 0,
      },
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/cauliflower.jpeg',
          alt: 'cauliflower',
        },
      ],
    },
    {
      no: 2,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'for the soup',
        color: 'tagRed',
      },
      ingredients: [
        {
          qty: '2 tbsps',
          name: 'olive oil',
        },
        {
          qty: '2',
          name: 'garlic cloves',
        },
      ],
      items: [
        {
          qty: '2',
          name: 'pinch bowl',
        },
      ],
      tasks: [
        {name: 'Add 2 tbsps olive oil in a pinch bowl and set aside'},
        {
          name:
            'Peel and crush 2 garlic cloves. Place them in a pinch bowl and set aside',
        },
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/lentil_soup_onion_oil.jpeg',
          alt: 'oil and garlic',
        },
      ],
    },
    {
      no: 3,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'for the soup',
        color: 'tagRed',
      },
      ingredients: [
        {
          qty: '1',
          name: 'Onion',
        },
      ],
      items: [
        {
          qty: '1',
          name: 'small bowl',
        },
      ],
      tasks: [
        {
          name:
            'Peel and slice 1 onion and place it in a small bowl and set aside',
        },
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/lentil_soup_onion.jpeg',
          alt: 'onion',
        },
      ],
    },
    {
      no: 4,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'for the soup',
        color: 'tagRed',
      },
      ingredients: [
        {
          qty: '450 g',
          name: 'sweet potato',
        },
        {
          qty: '2',
          name: 'celery stalks',
        },
        {
          qty: '3-4',
          name: 'medium carrots',
        },
      ],
      items: [{qty: '1', name: 'large bowl'}],
      tasks: [
        {
          name:
            'Peel and chop the sweet potato into small cubes and place in a large bowl',
        },
        {name: 'Thinly slice the carrots and place them the same bowl'},
        {
          name:
            'Thinly slice the celery stalcks and place them the same bowl and set aside',
        },
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/lentil_soup_celery_potatoes_carrot.jpeg',
          alt: 'vegetables',
        },
      ],
    },
    {
      no: 5,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'for the soup',
        color: 'tagRed',
      },
      ingredients: [
        {
          qty: '1.5 L',
          name: 'stock',
        },
        {
          qty: '1 cup',
          name: 'lentils',
        },
      ],
      items: [
        {qty: '1', name: 'large jar'},
        {qty: '1', name: 'small bowl'},
      ],
      tasks: [
        {
          name:
            'Prepare 1.5 L stock according to the pack instructions and set aside',
        },
        {name: 'Add 1 cup of lentils in a small bowl and set aside'},
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/lentil_soup_lentils_stock.jpeg',
          alt: 'lentils and stock',
        },
      ],
    },

    {
      no: 6,
      type: 'PREPARATION',
      tag: {
        text: 'for the soup',
        color: 'tagRed',
      },
      links: [
        {
          from: 2,
          heading: 'From Step 2',
          name: 'Olive oil & garlic',
        },
      ],
      ingredients: [
        {
          qty: '1',
          name: 'salt & pepper',
        },
      ],
      items: [
        {
          qty: '1',
          name: 'large Pan',
        },
      ],
      tasks: [
        {name: 'Place a large plan over medium heat'},
        {name: 'Add the olive oil'},
        {name: 'Add the garlic'},
        {name: 'Add a pinch of salt and pepper and stir well'},
      ],
    },

    {
      no: 7,
      type: 'PREPARATION',
      tag: {
        text: 'for the soup',
        color: 'tagRed',
      },
      links: [
        {
          from: 3,
          heading: 'From Step 3',
          name: 'Onion',
        },
      ],
      ingredients: [],
      items: [],
      tasks: [
        {name: 'Once the onion is sizzling add the onion'},
        {name: 'Cook for 2 minute until the onion softens'},
      ],
      timer: {
        id: uuidv4(),
        name: 'Cook onion',
        minutes: 2,
        seconds: 0,
      },
    },

    {
      no: 8,
      type: 'PREPARATION',
      tag: {
        text: 'for the soup',
        color: 'tagRed',
      },
      links: [
        {
          from: 4,
          heading: 'From Step 4',
          name: 'Sweet potato, carrots and celery',
        },
      ],
      ingredients: [
        {
          qty: '1',
          name: 'salt & pepper',
        },
      ],
      items: [],
      tasks: [
        {name: 'Add the sweet potato, carrots and celery'},
        {name: 'Add a pinch of salt and pepper'},
        {name: 'Fry for for 5-10 minutes until the vegetables have softened'},
      ],
      timer: {
        id: uuidv4(),
        name: 'Cook vegetables',
        minutes: 10,
        seconds: 0,
      },
    },
    {
      no: 9,
      type: 'PREPARATION',
      tag: {
        text: 'for the soup',
        color: 'tagRed',
      },
      links: [
        {
          from: 5,
          heading: 'From Step 5',
          name: 'Stock and lentils',
        },
      ],
      ingredients: [
        {
          qty: '-',
          name: 'salt & pepper',
        },
      ],
      items: [],
      tasks: [
        {name: 'Add the stock'},
        {name: 'Add the lentils'},
        {name: 'Bring to a boil'},
        {name: 'Once boiling place the lid on the pan'},
        {name: 'Reduce to a simmer for 20 minutes'},
      ],
      timer: {
        id: timerTwoId,
        name: 'Simmer lentils',
        minutes: 20,
        seconds: 0,
      },
    },

    {
      no: 10,
      type: 'PREPARATION',
      tag: {
        text: 'for assembling',
        color: 'tagRed',
      },
      links: [
        {
          from: 1,
          heading: 'From Step 1',
          name: 'Roasted cauliflower',
          timerId: timerOneId,
        },
        {
          from: 9,
          heading: 'From Step 9',
          name: 'Lentil soup',
          timerId: timerTwoId,
        },
      ],
      ingredients: [],
      items: [],
      tasks: [
        {name: 'Remove the soup from heat'},
        {name: 'In a bowl serve the soup and add some cauliflower'},
        {name: 'Enjoy!'},
      ],
    },
  ],
};
