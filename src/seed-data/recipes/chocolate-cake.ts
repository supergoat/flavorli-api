import {IRecipe} from 'src/types';

export const ChocolateCake: IRecipe = {
  id: 'd69fec4b-0eb5-425c-a807-6a1022bc34d1',
  createdAt: '2020-01-19T11:44:42.873Z',
  author: 'Martha Stewart',
  name: 'Chocolate Cake',
  image:
    'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/chocolate_cake.jpg',
  preparationTime: 25,
  cookingTime: 40,
  portions: '6-8',
  difficulty: '1',
  ingredients: [
    {
      for: 'cake',
      list: [
        {
          qty: '1 cup',
          name: 'water',
        },
        {
          qty: '1/2 cup',
          name: 'unsweetened cocoa powder',
        },
        {
          qty: '1 1/2 cup',
          name: 'all-purpose flour',
        },
        {
          qty: '1 cup',
          name: 'date sugar',
        },
        {
          qty: '3/4 tsp',
          name: 'bicarbonate soda',
        },
        {
          qty: '1/2 tsp',
          name: 'salt',
        },
        {
          qty: '1',
          name: 'banana',
        },
        {
          qty: '1 tsp',
          name: 'vanilla extract',
        },
        {
          qty: '2 tsp',
          name: 'white vinegar',
        },
      ],
    },
  ],
  items: [
    {
      qty: '1',
      name: 'Small Bowl',
    },
    {
      qty: '1',
      name: 'Large Bowl',
    },
    {
      qty: '1',
      name: '8-inch round cake pan with spray',
    },
    {
      qty: '1',
      name: 'Hand Whisk',
    },
  ],
  steps: [
    {
      for: 'for the cake',
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
        {name: 'Add 1 1/2 cup of all-purpose flour'},
        {name: 'Add 1 cup of date sugar'},
        {name: 'Add 3/4 tsp bicarbonate soda'},
        {name: 'Add 1/2 tsp salt'},
        {name: 'Mix well and set aside'},
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/flour_mixture_1.jpeg',
          alt: 'flour mixture 1',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/flour_mixture_2.jpeg',
          alt: 'flour mixture 2',
        },
      ],
    },

    {
      for: 'for the sauce',
      tasks: [
        {
          name:
            'Add 1/2 cup unsweetened cocoa powder in a small bowl and set aside',
        },
        {
          name:
            'Warm 1 cup of water and pour it in the bowl with the cocoa powder',
        },
        {name: 'Mix until dissolved'},
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/cocoa_powder.jpeg',
          alt: 'Cocoa Powder',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/cocoa_mixture.jpeg',
          alt: 'cocoa mixture',
        },
      ],
    },

    {
      for: 'for the sauce',
      tasks: [
        {
          name:
            'Pre heat the oven at 180 degrees,  (or 160 degrees if fan oven)',
        },
      ],
      images: [],
    },
    {
      for: 'for the cake',
      links: [
        {
          from: 5,
          name: 'Cocoa and water mixture',
        },
      ],
      tasks: [
        {name: 'Make a hole in the middle of the flour mixture'},
        {name: 'Add the cocoa mixture'},
        {name: 'Add 1 tsp vanilla extract'},
        {name: 'Mix until homogeneous'},
      ],
      images: [
        {
          src: 'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/hole.jpeg',
          alt: 'hole',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/cake_mixture.jpeg',
          alt: 'Cake mixture',
        },
      ],
    },
    {
      for: 'for the cake',
      tasks: [
        {name: 'Add 2 tsp white vinegar'},
        {name: 'Mix just until combined'},
        {name: 'Then immediately pour the mixture into the cake pan'},
      ],
      images: [
        {
          src: 'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/cake.jpeg',
          alt: 'Cake',
        },
      ],
    },
    {
      for: 'for the sauce',
      tasks: [
        {
          name:
            'Bake until inserting a knife in the cake center comes out clean',
        },
      ],
      images: [],
    },
  ],
};
