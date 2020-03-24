import uuidv4 from 'uuid/v4';
import {IRecipe} from '../../types';

const timerOneId = uuidv4();
const timerTwoId = uuidv4();
export const PadThai: IRecipe = {
  id: 'f226a394-b557-44c4-a735-18456bfb8573',
  createdAt: new Date().toISOString(),
  author: 'James Wythe',
  name: 'Pad Thai',
  video:
    'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/pad_thai_final.mp4',
  image: 'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/pad_thai.jpg',
  preparationTime: 20,
  cookingTime: 0,
  portions: '4',
  difficulty: 'Simple',
  notes: [],
  ingredients: [
    {
      for: 'pad thai',
      list: [
        {qty: '2 tbsp', name: 'sesame oil'},
        {qty: '1', name: 'large garlic clove'},
        {qty: '1', name: 'red onion'},
        {qty: '1/2', name: 'red chilli'},
        {qty: '1', name: 'broccoli head'},
        {qty: '1', name: 'red bell pepper'},
        {qty: '1 large handful', name: 'bean sprouts'},
        {
          qty: '1 small handful',
          name: 'unsalted peanuts crushed',
          notes: 'Some more for serving',
        },
        {qty: '1', name: 'lime'},
        {
          qty: '150 g',
          name: 'rice noodles',
          notes: 'You can also buy it precooked',
        },

        {qty: '1 tsp', name: ' sesame oil'},
        {qty: '3 tbsp', name: ' maple syrup'},
        {
          qty: '3 tbsp',
          name: ' tamari',
          notes:
            "If you can't find tamari, and you are not gluten free you can use soy sauce instead",
        },
        {
          qty: '1 heaped tsp',
          name: ' miso paste',
          notes:
            "I use brown rice miso. If you can't find miso you can use a bit more tamari",
        },
      ],
    },
    {
      for: 'serving',
      list: [
        {qty: '1 large handful', name: 'bean sprouts'},
        {
          qty: '-',
          name: 'crushed peanuts',
        },
        {
          qty: '-',
          name: 'chilli',
        },
      ],
    },
  ],
  items: [
    {qty: '1', name: 'chopping board'},
    {qty: '1', name: 'pinch bowl', notes: 'for the crushed peanuts'},
    {
      qty: '1',
      name: 'bowl',
      notes: 'for the vegetables',
    },
  ],
  steps: [
    {
      for: 'for the pad thai',
      tasks: [
        {name: 'Crush a handful of peanuts and set aside in a pinch bowl'},
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/pad_thai_mise_en_place_final.mp4#t=0,16',
    },
    {
      for: 'For the pad thai',
      tasks: [
        {
          name:
            'Chop 1 broccoli head into small florets and place inside a bowl',
        },
        {
          name: 'Slice 1 bell pepper and place inside the same bowl',
        },
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/pad_thai_mise_en_place_final.mp4#t=16,73',
    },
    {
      for: 'for the pad thai',
      heatLevel: 'medium',
      tasks: [
        {name: 'Place a pot of water on medium heat and set aside to boil'},
      ],
    },
    {
      for: 'For the sauce',
      tasks: [
        {
          name: 'Add 1 tsp seasame oil in a small bowl',
        },
        {name: 'Add 3 tbsp maple syrup in the same bowl'},
        {name: 'Add 3 tbsp tamari in the same bowl'},
        {
          name: 'Add 1 heaped tsp miso paste in the same bowl',
          notes: [
            'If you are not using miso paste add a 1 tbsp tamari',
            'You will no longer need the tsp',
          ],
        },
        {
          name: 'Then, using a hand whisk, mix well and set aside',
          notes: ['You will no longer need the hand whisk'],
        },
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/pad_thai_mise_en_place_final.mp4#t=132,141',
    },
    {
      for: 'For the pad thai',
      tasks: [
        {
          name: 'Peel and slice 1 onion',
        },
        {
          name: 'Crush 1 large garlic clove',
        },
        {
          name: 'Slice and deseed half a red chilli',
          notes: ['You will no longer need the knife and chopping board'],
        },
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/pad_thai_mise_en_place_final.mp4#t=73,129',
    },
    {
      for: 'for the pad thai',
      heatLevel: 'medium',
      tasks: [
        {name: 'Place a frying pan over medium heat'},
        {
          name: 'Add 2 tbsps sesame oil',
          notes: ['You will no longer need the tbsp'],
        },
        {
          name: 'Once the pan is hot add in the red onion, garlic and chilli',
        },
        {
          name: 'Fry for a couple minutes until softened',
          timer: {
            id: uuidv4(),
            name: 'Fry onion, garlic and chilli',
            minutes: 2,
            seconds: 0,
          },
        },
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/pad_thai_final.mp4#t=0,7',
    },
    {
      for: 'for the pad thai',
      tasks: [
        {name: 'Now add the broccoli and bell pepper'},
        {
          name: 'Fry together for 5 minutes until softned',
          timer: {
            id: timerOneId,
            name: 'Fry broccoli and bell pepper',
            minutes: 5,
            seconds: 0,
          },
        },
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/pad_thai_final.mp4#t=7,15',
    },
    {
      for: 'for the pad thai',
      heatLevel: 'medium',
      tasks: [
        {
          name: 'Add 150 g rice noodles to the boiling water',
        },
        {
          name:
            'Reduce the heat to medium and set aside to boil for approximately 5 minutes',
          timer: {
            id: timerTwoId,
            name: 'Boil rice noodles',
            minutes: 5,
            seconds: 0,
          },
        },
      ],
    },
    {
      for: 'for the pad thai',
      links: [
        {
          from: 5,
          name: 'Pad thai sauce mix',
        },
        {
          from: 7,
          name: 'Vegetables',
          timerId: timerOneId,
        },
      ],
      tasks: [
        {
          name: 'To the vegetables add a large handful of bean sprouts',
        },
        {
          name: 'Add the crushed peanuts',
        },
        {
          name: 'Squeeze a lime',
        },
        {
          name: 'Add the pad thai sauce and mix',
        },
        {
          name: 'Cook together for a couple minute',
        },
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/pad_thai_final.mp4#t=15,26',
    },
    {
      for: 'for the pad thai',
      links: [
        {
          from: 8,
          name: 'Cooked noodles',
          timerId: timerTwoId,
        },
      ],
      tasks: [
        {
          name: 'Drain the noodles and add them to the pan',
        },
        {
          name: 'Stir well until the noodles soak up all the sauce',
        },
        {
          name: 'Remove from the heat',
        },
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/pad_thai_final.mp4#t=26,45',
    },
    {
      for: 'for serving',
      tasks: [
        {
          name: 'Serve with extra bean sprouts, chilli and crushed peanuts',
        },
        {
          name: 'Enjoy',
        },
      ],
    },
  ],
};
