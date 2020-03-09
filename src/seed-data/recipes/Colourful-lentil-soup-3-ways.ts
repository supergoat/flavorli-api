import uuidv4 from 'uuid/v4';
import {IRecipe} from '../../types';

const timerOneId = uuidv4();
const timerTwoId = uuidv4();
export const LentilSoup: IRecipe = {
  id: '2ebcd586-75f1-4dfb-aaee-452a6ae18786',
  createdAt: new Date().toISOString(),
  author: 'James Wythe',
  name: 'Colourful Lentil Soup',
  video:
    'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/lentil_soup_2.mp4',
  image:
    'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/cauliflower-small.jpg',
  preparationTime: 5,
  cookingTime: 25,
  portions: '4',
  difficulty: 'Simple',
  notes: [
    "You can try this recipe as is or with a cauliflower topping. If you don't want to have the cauliflower topping you can skip step 1",
  ],
  ingredients: [
    {qty: '1', name: 'Cauliflower', notes: 'Optional'},
    {
      qty: '-',
      name: 'smoked paprika',
      notes: 'Optional if making with cauliflower',
    },
    {qty: '-', name: 'olive oil'},
    {qty: '450 g', name: 'potatoes', notes: 'You can also use sweet potatoes'},
    {qty: '2', name: 'cellery stalks'},
    {qty: '3-4', name: 'medium carrots'},
    {qty: '1', name: 'medium/large onion'},
    {qty: '2', name: 'garlic cloves'},
    {qty: '2 tbsp', name: 'olive oil'},
    {qty: '1.5 L', name: 'veg stock'},
    {
      qty: '1 cup',
      name: 'red split lentils',
      notes:
        'You can also use other types of lentils. Some lentils take longer to cook (for example brown lentils)',
    },
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
      qty: '1',
      name: 'small bowl',
      notes: 'to hold the onions',
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
    {
      qty: '1',
      name: 'chopping board',
    },
  ],
  steps: [
    {
      for: 'the roasted cauliflower',
      ovenTemperature: '180 C',
      notes: [
        'This step is optional, you can have the soup without the cauliflower',
      ],
      tasks: [
        {name: 'Pre heat the oven to 180 C'},
        {name: 'Chop the cauliflower into florets'},
        {name: 'Place the florets on a baking tray'},
        {
          name:
            'Sprinkle olive oil along with the smoked paprika until lightly covered',
        },
        {
          name: 'Place in the oven for 45 minutes (make sure to turn half way)',
          timer: {
            id: timerOneId,
            name: 'Step 1: Roasted Cauliflower',
            minutes: 45,
            seconds: 0,
          },
        },
      ],

      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/cauliflower.jpeg',
          alt: 'cauliflower',
        },
      ],
    },
    {
      for: 'the soup',
      tasks: [
        {
          name: 'Weigh 450 g of potatoes',
          notes: ['You will no longer need the scale'],
        },
        {
          name:
            'Peel and chop the potatoes into small cubes and place them in a large bowl',
          notes: ['You will no longer need the peeler'],
        },
        {name: 'Thinly slice 3 - 4 carrots and place them in the same bowl'},
        {
          name:
            'Thinly slice 2 celery stalcks and place them in the same bowl and set aside',
        },
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/lentil_soup_mise_en_place.mp4#t=50,113',
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/lentil_soup_celery_potatoes_carrot.jpeg',
          alt: 'vegetables',
        },
      ],
    },
    {
      for: 'the soup',
      tasks: [
        {
          name:
            'Prepare 1.5 L stock according to the pack instructions and set aside',
        },
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/lentil_soup_lentils_stock.jpeg',
          alt: 'lentils and stock',
        },
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/lentil_soup_mise_en_place.mp4#t=113,120',
    },
    {
      for: 'the soup',
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
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/lentil_soup_mise_en_place.mp4#t=11,49',
    },
    {
      for: 'the soup',
      tasks: [
        {
          name: 'Peel and crush 2 garlic cloves',
          notes: ['You will no longer need the knife and chopping board'],
        },
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/lentil_soup_onion_oil.jpeg',
          alt: 'oil and garlic',
        },
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/lentil_soup_mise_en_place.mp4#t=0,10',
    },
    {
      for: 'the soup',
      heatLevel: 'medium',
      tasks: [
        {name: 'Place a large plan over medium heat'},
        {
          name: 'Add 2 tbsps olive oil',
          notes: ['You will no longer need the tbsp'],
        },
        {
          name: 'Add the crushed garlic',
        },
        {name: 'Add a pinch of salt'},
        {name: 'Add a pinch of pepper'},
        {name: 'Stir well'},

        {
          name: 'Fry the garlic for a couple of minutes',
          timer: {
            id: uuidv4(),
            name: 'Fry garlic',
            minutes: 2,
            seconds: 0,
          },
        },
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/lentil_soup_2.mp4#t=2,20',
    },

    {
      for: 'the soup',
      tasks: [
        {name: 'Once the garlic is sizzling add the onion'},
        {
          name: 'Cook for 2 minutes until the onion softens',
          timer: {
            id: uuidv4(),
            name: 'Cook onion',
            minutes: 2,
            seconds: 0,
          },
        },
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/lentil_soup_2.mp4#t=20,27',
    },

    {
      for: 'the soup',
      tasks: [
        {name: 'Add the potatoes, carrots and celery'},
        {name: 'Add a pinch of salt'},
        {name: 'Add a pinch of pepper'},
        {
          name: 'Fry for for 5-10 minutes until the vegetables have softened',
          timer: {
            id: timerTwoId,
            name: 'Cook vegetables',
            minutes: 10,
            seconds: 0,
          },
        },
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/lentil_soup_2.mp4#t=27,37',
    },
    {
      for: 'the soup',
      heatLevel: 'high',
      links: [
        {
          from: 8,
          name: 'Fry vegetables',
          timerId: timerTwoId,
        },
      ],
      tasks: [
        {name: 'Add the stock'},
        {name: 'Add 1 cup of red split lentils'},
        {name: 'Bring to a boil'},
        {name: 'Once boiling place the lid on the pan'},
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/lentil_soup_2.mp4#t=37,54',
    },

    {
      for: 'the soup',
      heatLevel: 'mediumLow',
      tasks: [
        {
          name: 'Reduce the heat to medium/low',
        },
        {
          name: 'Set aside to simmer for 20 minutes',
          timer: {
            id: uuidv4(),
            name: 'Simmer lentils',
            minutes: 20,
            seconds: 0,
          },
        },
      ],
    },

    {
      for: 'assembling',
      tasks: [
        {name: 'Remove the soup from heat'},
        {name: 'In a bowl serve the soup'},
        {name: 'Add some cauliflower if using'},
        {name: 'Enjoy!'},
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/lentil_soup_2.mp4#t=54,57',
    },
  ],
};
