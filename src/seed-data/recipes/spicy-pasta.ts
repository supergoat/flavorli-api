import uuidv4 from 'uuid/v4';
import {IRecipe} from '../../types';

const timerOneId = uuidv4();
const timerTwoId = uuidv4();
const timerThreeId = uuidv4();
export const SpicyPasta: IRecipe = {
  id: '2a72fea6-8379-4a8f-8178-f5f5d3d67194',
  createdAt: new Date().toISOString(),
  author: 'James Wythe',
  name: '10 Minute spicy pasta',
  video:
    'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/spicy_pasta_final.mp4#t=4,89',
  image: 'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/spicy_pasta.png',
  preparationTime: 5,
  cookingTime: 10,
  portions: '4',
  difficulty: 'Simple',
  notes: [],
  ingredients: [
    {
      for: 'pasta',
      list: [
        {qty: '250 g', name: 'pasta'},
        {qty: '3 tbsp', name: 'olive oil'},
        {qty: '250 g', name: 'cherry tomatoes'},
        {qty: 'hanful', name: 'olives'},
        {qty: '4', name: 'large garlic cloves'},
        {qty: 'pinch', name: 'chilli flakes'},
        {qty: '1 tsp', name: 'paprika'},
        {qty: 'handful', name: 'fresh basil'},
      ],
    },
    {
      for: 'serving',
      list: [{qty: '-', name: 'fresh basil'}],
    },
  ],
  items: [
    {
      qty: '1',
      name: 'chopping board',
    },
    {qty: '1', name: 'pinch bowl', notes: 'for the spices'},

    {qty: '1', name: 'pot', notes: 'large enough to hold 250 g pasta'},
    {
      qty: '1',
      name: 'sauce pan',
    },
    {
      qty: '1',
      name: 'Tongs',
      notes: 'Optional. To transfer the pasta to the sauce',
    },
    {
      qty: '-',
      name: 'measuring spoons',
    },
  ],
  steps: [
    {
      for: 'the pasta',
      heatLevel: 'high',
      tasks: [
        {
          name: 'Place a pot of water on high heat and set aside to boil',
        },
      ],
    },
    {
      for: 'for the pasta',
      tasks: [{name: 'Chop a handful of olives'}],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/spicy_pasta_mise_en_place.mp4#t=2,37',
    },
    {
      for: 'for the pasta',
      heatLevel: 'medium',
      tasks: [
        {name: 'Place a sauce pan over medium heat'},
        {
          name: 'Drizzle with 3 tbsps of olive oil',
          notes: ['You will no longer need the tbsp'],
        },
        {
          name:
            'Once the pan is hot, add 250 g of cherry tomatoes and mix well',
          notes: ['Keep the tomatoes whole as this speeds up the recipe'],
        },
        {
          name: 'Add the chopped olives to the pan and mix',
        },
        {
          name:
            'Now set the pan aside for the tomatoes and olives to fry for approximately 5 minutes',
          timer: {
            id: timerOneId,
            name: 'Fry tomatoes',
            minutes: 5,
            seconds: 0,
          },
        },
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/spicy_pasta_final.mp4#t=4,19',
    },
    {
      for: 'for the pasta',
      tasks: [
        {
          name: 'Meanwhile crush 4 large garlic cloves and set aside',
          notes: ['You will no longer need the knife and chopping board'],
        },
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/spicy_pasta_mise_en_place.mp4#t=38,52',
    },
    {
      for: 'for the pasta',
      tasks: [
        {
          name: 'In a pinch bowl, add 1 tsp of paprika',
          notes: ['You will no longer need the tsp'],
        },
        {
          name: 'Add 1/2 tsp of chilli flakes and set aside',
          notes: [
            'You can add more or less chilli flakes, depending on how spicy you want the sauce',
            'You will no longer need the 1/2 tsp',
          ],
        },
      ],
    },
    {
      for: 'for the pasta',
      links: [
        {
          from: 4,
          name: 'Fried tomatoes',
          timerId: timerOneId,
        },
      ],
      tasks: [
        {
          name: 'Add the crushed garlic cloves to the pan',
        },
        {
          name: 'Add the spices',
          notes: ['You will no longer need the tsp'],
        },
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/spicy_pasta_final.mp4#t=20,29',
    },
    {
      for: 'for the pasta',
      heatLevel: 'mediumLow',
      tasks: [
        {
          name: 'Using a fork pinch and squash the tomatoes',
        },
        {
          name:
            'Mix well and set aside to simmer over medium/low heat for approximately 10 minutes',
          timer: {
            id: timerTwoId,
            name: 'Simmer sauce',
            minutes: 10,
            seconds: 0,
          },
        },
      ],

      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/spicy_pasta_final.mp4#t=29,50',
    },
    {
      for: 'for the pasta',
      heatLevel: 'mediumHigh',
      tasks: [
        {name: 'In the pot with boiling water, add salt'},
        {name: 'Add 250 g pasta'},
        {name: 'Reduce the heat to medium/high'},
        {
          name:
            'Boil for approximately ten minutes until the pasta is al dente',
          timer: {
            id: timerThreeId,
            name: 'Boil pasta',
            minutes: 10,
            seconds: 0,
          },
        },
      ],
    },
    {
      for: 'for the pasta',
      links: [
        {
          from: 6,
          name: 'Tomato sauce',
          timerId: timerTwoId,
        },
      ],
      tasks: [
        {
          name: 'Remove the sauce from the heat',
        },
        {
          name: 'Add in a hanful of basil and stir until it wits',
        },
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/spicy_pasta_final.mp4#t=51,57',
    },
    {
      for: 'for serving',
      links: [
        {
          from: 7,
          name: 'Pasta',
          timerId: timerThreeId,
        },
      ],
      tasks: [
        {
          name: 'Remove the pasta from the heat',
        },
        {
          name: 'Bring the pasta pot close to the sauce pan',
        },
        {
          name:
            'Using tongs directly place the pasta from the boiling water into the sauce',
        },
        {
          name: 'Mix the pasta with the sauce until the pasta is fully covered',
        },
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/spicy_pasta_final.mp4#t=57,70',
    },
    {
      for: 'for serving',
      tasks: [
        {
          name: 'Serve in a plate adding some fresh basil on top',
        },
        {
          name: 'Enjoy!',
        },
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/spicy_pasta_final.mp4#t=70,90',
    },
  ],
};
