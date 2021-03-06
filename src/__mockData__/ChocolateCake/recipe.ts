export const chocolateCakeRecipe = {
  id: '2',
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
      name: 'sugar',
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
      qty: '1/2 cup',
      name: 'sunflower oil',
    },
    {
      qty: '1 tsp',
      name: 'vanilla extract',
    },
    {
      qty: '2 tsp',
      name: 'white vinegar',
    },
    {
      qty: '55 g',
      name:
        'dark chocolate (preferably at least 70 percent cacao), finely chopped',
    },
    {
      qty: '1/2 cup',
      name: "confectioners' sugar, sifted",
    },
    {
      qty: '2',
      name: 'tablespoons water',
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
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      items: [
        {
          qty: '1',
          name: 'Large Bowl',
        },
      ],
      ingredients: [
        {
          qty: '1 1/2 cup',
          name: 'all-purpose flour',
        },
        {
          qty: '1 cup',
          name: 'sugar',
        },
        {
          qty: '3/4 tsp',
          name: 'bicarbonate soda',
        },
        {
          qty: '1/2 tsp',
          name: 'salt',
        },
      ],
      tasks: [
        'Add 1 1/2 cup of all-purpose flour in a large bowl',
        'Add 1 cup of sugar',
        'Add 3/4 tsp bicarbonate soda',
        'Add 1/2 tsp salt',
        'Mix well and set aside',
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
      tag: {
        text: 'Cake',
        color: 'tagRed',
      },
      items: [
        {
          qty: '1',
          name: 'Glass',
        },
        {
          qty: '1',
          name: 'Pinch Bowl',
        },
      ],
      ingredients: [
        {
          qty: '1/2 cup',
          name: 'sunflower oil',
        },
        {
          qty: '1 tsp',
          name: 'vanilla extract',
        },
      ],

      tasks: [
        'Add 1/2 cup sunflower oil in a glass and set aside',
        'Add 1 tsp vanilla extract in a pinch bowl set aside',
      ],
      images: [
        {
          src: 'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/oil.jpeg',
          alt: 'sunflower oil',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/vanilla_extract.jpeg',
          alt: 'vanilla extract',
        },
      ],
    },
    {
      tag: {
        text: 'Cake',
        color: 'tagRed',
      },
      items: [
        {
          qty: '1',
          name: 'Pinch Bowl',
        },
      ],
      ingredients: [
        {
          qty: '2 tsp',
          name: 'white vinegar',
        },
      ],

      tasks: ['Add 2 tsp white vinegar in a pinch bowl and set aside'],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/white_vinegar.jpeg',
          alt: 'white vinegar',
        },
      ],
    },
    {
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      items: [
        {
          qty: '1',
          name: 'Small Bowl',
        },
      ],
      ingredients: [
        {
          qty: '1/2 cup',
          name: 'unsweetened cocoa powder',
        },
      ],
      tasks: [
        'Add 1/2 cup unsweetened cocoa powder in a small bowl and set aside',
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/cocoa_powder.jpeg',
          alt: 'Cocoa Powder',
        },
      ],
    },
    {
      tag: {
        text: 'Cake',
        color: 'tagRed',
      },

      items: [
        {
          qty: '1',
          name: 'Small Bowl',
        },
      ],
      ingredients: [
        {
          qty: '1 cup',
          name: 'water',
        },
      ],
      tasks: [
        'Warm 1 cup of water and pour it in the bowl with the cocoa powder',
        'Mix until dissolved',
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/cocoa_mixture.jpeg',
          alt: 'cocoa mixture',
        },
      ],
    },
    {
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      tasks: [
        'Pre heat the oven at 180 degrees,  (or 160 degrees if fan oven)',
      ],
      ingredients: [],
      items: [],
      images: [],
    },
    {
      tag: {
        text: 'Cake',
        color: 'tagRed',
      },
      links: [
        {from: 2, heading: 'From Step 2', name: 'Cocoa and water mixture'},
      ],
      items: [],
      ingredients: [
        {
          qty: '1/2 cup',
          name: 'sunflower oil',
        },
        {
          qty: '1 tsp',
          name: 'vanilla extract',
        },
      ],
      tasks: [
        'Make a hole in the middle of the flour mixture',
        'Add the oil',
        'Add the cocoa mixture',
        'Add the vanilla extract',
        'Mix until homogeneous',
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
      tag: {
        text: 'Cake',
        color: 'tagRed',
      },
      items: [
        {
          qty: '1',
          name: '8-inch round cake pan with spray',
        },
      ],
      ingredients: [
        {
          qty: '2 tsp',
          name: 'white vinegar',
        },
      ],

      tasks: [
        'Add the white vinegar',
        'Mix just until combined',
        'Then immediately pour the mixture into the cake pan',
      ],
      images: [
        {
          src: 'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/cake.jpeg',
          alt: 'Cake',
        },
      ],
    },
    {
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      tasks: [
        'Bake until inserting a knife in the cake center comes out clean',
      ],
      ingredients: [],
      items: [],
      images: [],
    },
  ],
};
