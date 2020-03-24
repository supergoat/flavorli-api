import uuidv4 from 'uuid/v4';
import {IRecipe} from '../../types';

export const BananaBreadPancakes: IRecipe = {
  id: '7ccfc90a-fad3-4c3f-a82b-327b67591617',
  createdAt: new Date().toISOString(),
  author: 'James Wythe',
  name: 'Banana Bread Pancakes',
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
      for: 'batter',
      list: [
        {
          qty: '2',
          name: 'ripe bananas',
          notes: 'Ripe bananas will make the pancakes sweeter',
        },
        {qty: '1 tsp', name: 'cinnamon'},
        {qty: '1 tsp', name: 'baking powder'},
        {
          qty: '100 g (3/4 cup)',
          name: 'flour',
          notes: 'I use gluten free self-raising flour',
        },
        {qty: '1 tbsp', name: 'maple syrup'},
        {
          qty: '140-150 ml',
          name: 'plant based milk',
          notes: 'I use unsweetened almond',
        },
        {qty: '25 g', name: 'Chocolate', notes: 'Optional'},
      ],
    },
    {
      for: 'frying',
      list: [{qty: '-', name: 'Oil', notes: 'For frying. I use coconut oil'}],
    },
  ],
  items: [
    {qty: '1', name: 'large bowl', notes: 'For the batter'},
    {qty: '1', name: 'Hand whisk'},
    {
      qty: '-',
      name: 'mesuring spoons',
    },
    {
      qty: '-',
      name: '1/4 measuring cup',
      notes: 'I use this to pour the pancake mix',
    },
    {
      qty: '1',
      name: 'frying pan',
    },
  ],
  steps: [
    {
      for: 'for the batter',
      tasks: [
        {
          name: 'Peel 2 ripe bananas',
        },
        {
          name: 'Add the bananas to a large bowl',
        },
        {
          name: 'Mash the bananas using a fork',
          notes: ['You will no longer need the fork'],
        },
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/pan_cakes.mp4#t=4,9',
    },
    {
      for: 'for the batter',
      tasks: [
        {
          name: 'To the mashed bananas add 1 tsp cinnamon',
        },
        {
          name: 'Add 1 tsp baking powder',
          notes: ['You will no longer need the tsp'],
        },
        {
          name: 'Add 100 g flour',
        },
        {
          name: 'Add 1 tbsp maple syrup',
          notes: ['You will no longer need the tbsp'],
        },
        {
          name: 'Add 140 - 150 ml plant based milk',
        },
        {
          name: 'Whisk the ingredients until well combined',
          notes: ['You will no longer need the hand whisk'],
        },
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/pan_cakes.mp4#t=9,29',
    },
    {
      for: 'for the batter',
      notes: [
        'This step is optional',
        'You can add anything that you like instead of chocolate. For example strawberries, blueberries etc',
      ],
      tasks: [
        {
          name: 'Chop 25 g of chocolate',
        },
        {
          name: 'Add the chocolate chunks to the batter and mix well',
        },
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/pan_cakes.mp4#t=29,35',
    },
    {
      for: 'for frying',
      heatLevel: 'high',
      tasks: [
        {name: 'Place a frying pan over high heat'},
        {
          name:
            'Once its hot, add approximately 1 tsp coconut oil and spread evenly',
        },
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/pan_cakes.mp4#t=34,40',
    },
    {
      for: 'for frying',
      heatLevel: 'medium',
      tasks: [
        {
          name: 'Reduce the heat to medium',
        },
        {
          name: 'Pour a small amount of pancake mix into the pan.',
          notes: [
            'I like to use a 1/4 size measuring cup to pour the pancake mix',
          ],
        },
        {
          name:
            'Fry the pancake on either side for approximately 1.5 minutes until golden',
          timer: {
            id: uuidv4(),
            name: 'Fry pancake side',
            minutes: 1,
            seconds: 30,
          },
        },
        {
          name: 'Repeat the above step until all the pancake mix is finished',
        },
      ],
      video:
        'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/pan_cakes.mp4#t=41,85',
    },
  ],
};
