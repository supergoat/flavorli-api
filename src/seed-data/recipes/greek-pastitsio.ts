import {IRecipe} from 'types';

export const GreekPastitsio: IRecipe = {
  id: 'e76c7f69-fe2c-4a76-8576-83155b0f8541',
  author: 'Akis Petratzikis',
  name: 'Greek Pastitsio',
  createdAt: '2020-01-18T21:27:42.873Z',
  image:
    'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/greek_pastitsio.jpg',
  preparationTime: 25,
  cookingTime: 40,
  portions: '8-10',
  difficulty: '2',
  ingredients: [
    {
      qty: '2',
      name: 'eggplants',
    },
    {
      qty: '1',
      name: 'onion',
    },
    {
      qty: '1 clove',
      name: 'garlic',
    },
    {
      qty: '2',
      name: 'zucchinis',
    },
    {
      qty: '1',
      name: 'red bell pepper',
    },
    {
      qty: '1',
      name: 'green bell pepper',
    },
    {
      qty: '2 tsp',
      name: 'oregano',
    },
    {
      qty: '2 tbsp',
      name: 'thyme',
    },
    {
      qty: '1 tsp',
      name: 'chilli flakes',
    },
    {
      qty: '1 tbsp',
      name: 'granulated sugar',
    },
    {
      qty: '1 tbsp',
      name: 'tomato paste',
    },
    {
      qty: '50 g',
      name: 'white wine',
    },
    {
      qty: '400 g',
      name: 'canned tomatoes',
    },
    {
      qty: '500 g',
      name: 'macaroni',
    },
    {
      qty: '80 g',
      name: 'all-purpose flour',
    },
    {
      qty: '80 g',
      name: 'olive oil',
    },
    {
      qty: '1 L',
      name: 'plant based milk',
    },
    {
      qty: '50 g',
      name: 'dry breadcrumbs',
    },
    {
      qty: '1 tbsp',
      name: 'mint',
    },
    {
      qty: '1',
      name: 'squeeze bottle olive oil',
    },
    {
      qty: '-',
      name: 'salt',
    },
    {
      qty: '-',
      name: 'pepper',
    },
  ],
  items: [
    {qty: '3', name: 'pinch bowls', notes: 'for the condiments'},
    {qty: '2', name: 'glasses', notes: 'for measuring the oil and wine'},
    {
      qty: '3',
      name: 'large bowls',
      notes: 'for holding the vegetables and the pasta',
    },
    {qty: '4', name: 'small bowl'},
    {qty: '1', name: 'pot', notes: 'big enough to hold 400g of macaroni'},
    {
      qty: '1',
      name: 'large sauce pan',
      notes:
        'This needs to be approximately double the size of the pot used to boil the macaroni',
    },
    {
      qty: '1',
      name: 'pot',
      notes: 'big enough to hold 1L of plant based milk',
    },
    {qty: '1', name: 'hand whisk'},
    {
      qty: '-',
      name: 'ovenproof baking dish',
      notes: 'approximately 40 cm. For best results ensure it has enough depth',
    },
  ],
  steps: [
    {
      no: 1,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      items: [
        {
          qty: '2',
          name: 'pinch bowls',
        },
      ],
      ingredients: [
        {
          qty: '1 tsp',
          name: 'oregano',
        },
        {
          qty: '1 tbsp',
          name: 'thyme',
        },
        {
          qty: '1 tsp',
          name: 'chili flakes',
        },
        {
          qty: '1 tbsp',
          name: 'granulated sugar',
        },
        {
          qty: '1 tbsp',
          name: 'tomato paste',
        },
      ],
      tasks: [
        {name: 'Add 1 tsp oregano in a pinch bowl'},
        {name: 'Add 1 tbsp thyme in the same pinch bowl'},
        {name: 'Add 1 tsp chili flakes in the same pinch bowl'},
        {
          name:
            'Add 1 tbsp granulated sugar in the same pinch bowl and set aside',
        },
        {
          name:
            'Add 1 tbsp tomato paste in a separate pinch bowl and set aside',
        },
      ],
      images: [],
    },
    {
      no: 2,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      items: [
        {
          qty: '1',
          name: 'glass',
        },
      ],
      ingredients: [
        {
          qty: '50 g',
          name: 'white wine',
        },
        {
          qty: '400 g',
          name: 'canned tomatoes',
        },
      ],
      tasks: [
        {name: 'Add 50 g of wine in a glass and set aside'},
        {name: 'Open and set aside 400 g of canned tomatoes'},
      ],
      images: [],
    },
    {
      no: 3,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      items: [
        {
          qty: '1',
          name: 'large bowl',
        },
      ],
      ingredients: [
        {
          qty: '500 g',
          name: 'macaroni',
        },
      ],
      tasks: [{name: 'Measure 500 g of macaroni and set aside in a bowl'}],
      images: [],
    },
    {
      no: 4,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'Bechamel',
        color: 'tagOrange',
      },
      items: [
        {qty: '1', name: 'glass'},
        {qty: '1', name: 'small bowl'},
      ],
      ingredients: [
        {
          qty: '80 g',
          name: 'olive oil',
        },
        {
          qty: '80 g',
          name: 'all-purpose flour',
        },
      ],
      tasks: [
        {name: 'Add 80 g of olive oil in a glass and set aside'},
        {name: 'Add 80 g of all-purpose flour in a small bowl and set aside'},
      ],
      images: [],
    },
    {
      no: 5,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'Bechamel',
        color: 'tagOrange',
      },
      items: [],
      ingredients: [
        {
          qty: '1 L',
          name: 'plant based milk',
        },
      ],
      tasks: [{name: 'Set a 1L carton of plant based milk aside'}],
      images: [],
    },
    {
      no: 6,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'Assembling',
        color: 'tagPink',
      },
      items: [
        {
          qty: '1',
          name: 'pinch bowl',
        },
      ],
      ingredients: [
        {
          qty: '1 tsp',
          name: 'oregano',
        },
        {
          qty: '1 tbsp',
          name: 'mint',
        },
      ],
      tasks: [
        {name: 'Add 1 tsp oregano in a pinch bowl'},
        {name: 'Add 1 tbsp mint to the same pinch bowl and set aside'},
        {name: 'You will no longer need the tsp and tbsp'},
      ],
      images: [],
    },
    {
      no: 7,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'Assembling',
        color: 'tagPink',
      },
      items: [{qty: '1', name: 'small bowl'}],
      ingredients: [
        {
          qty: '50 g',
          name: 'breadcrumbs',
        },
      ],
      tasks: [
        {name: 'Add 50 g of breadcrumbs in a glass'},
        {name: 'You will no longer need the scale'},
      ],
      images: [],
    },
    {
      no: 8,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      items: [
        {
          qty: '1',
          name: 'large bowl',
        },
      ],
      ingredients: [
        {
          qty: '2',
          name: 'eggplants',
        },
      ],
      tasks: [
        {
          name:
            'Wash 2 eggplants, cut them into 1 cm cubes and place them in a large bowl',
        },
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/eggplant_1.png',
          alt: 'Chef cutting the top of the eggplant off',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/eggplant_2.png',
          alt:
            'Chef placing the eggplant vertically, with the cut top facing upward, cutting the eggplant into columns',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/eggplant_3.png',
          alt:
            'Chef stacking half the eggplant columns horizontally and cutting the eggplant in columns',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/eggplant_4.png',
          alt: '-',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/eggplant_5.png',
          alt:
            'Chef putting the eggplant together and cutting into little squares',
        },
      ],
    },
    {
      no: 9,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      tasks: [
        {name: 'Finely chop 1 onion and place it in a small bowl'},
        {
          name:
            'Finely chop 1 garlic clove and place it in the same small bowl and set aside',
        },
      ],
      ingredients: [
        {
          qty: '1',
          name: 'onion',
        },
        {qty: '1', name: 'garlic clove'},
      ],
      items: [
        {
          qty: '1',
          name: 'small bowl',
        },
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/onion_1.png',
          alt: 'Cutting Onion 1',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/onion_2.png',
          alt: 'Cutting Onion 2',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/onion_3.png',
          alt: 'Cutting Onion 3',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/garlic.png',
          alt: 'Cutting Garlic 1',
        },
      ],
    },
    {
      no: 10,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      items: [
        {
          qty: '1',
          name: 'large bowl',
        },
      ],
      ingredients: [
        {
          qty: '2',
          name: 'zucchinis',
        },
        {
          qty: '1',
          name: 'red bell pepper',
        },
        {
          qty: '1',
          name: 'green bell pepper',
        },
      ],
      tasks: [
        {
          name:
            'Wash 2 zucchinis, cut them into small cubes and place them in a bowl',
        },
        {
          name:
            'Wash 1 red bell pepper, cut it into small cubes and place it in the same bowl',
        },
        {
          name:
            'Wash 1 green bell pepper, cut it into small cubes, add it in the same bowl and set aside',
        },
        {name: 'You will no longer need the knife and cutting board'},
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/zucchini_1.png',
          alt: 'Cutting Zucchini 1',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/zucchini_2.png',
          alt: 'Cutting Zucchini  2',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/zucchini_3.png',
          alt: 'Cutting Zucchini 3',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/zucchini_4.png',
          alt: 'Cutting Zucchini 4',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/pepper.png',
          alt: 'Cutting the peppers 1',
        },
      ],
    },
    {
      no: 11,
      type: 'PREPARATION',
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      links: [],
      items: [
        {
          qty: '1',
          name: 'pot',
        },
      ],
      ingredients: [],
      tasks: [
        {name: 'Place a pot of water on medium heat and set aside to boil'},
      ],
      images: [],
    },
    {
      no: 12,
      type: 'PREPARATION',
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      links: [],
      items: [
        {
          qty: '1',
          name: 'sauce pan',
        },
      ],
      ingredients: [
        {
          qty: 'approx. 4 - 6 tbsps',
          name: 'olive oil',
        },
      ],
      tasks: [
        {name: 'Place a sauce pan over high heat'},
        {
          name:
            'Drizzle the sauce pan with approximately 4 - 6 tbsps of olive oil',
        },
      ],
      images: [],
    },
    {
      no: 13,
      type: 'PREPARATION',
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      links: [
        {
          from: 8,
          heading: 'From Step 8',
          name: 'Eggplants',
        },
      ],
      items: [],
      ingredients: [],
      tasks: [
        {name: 'Add the eggplant to the pan'},
        {name: 'Sauté for 1-2 minutes'},
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/add_eggplant_1.png',
          alt: 'Add eggplant 1',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/add_eggplant_2.png',
          alt: 'Add eggplant 2',
        },
      ],
      timer: {
        id: 'dabff1de-88a7-4213-9866-17c9100a8eb1',
        name: 'Step 13: Sauté eggplant',
        minutes: 2,
        seconds: 0,
      },
    },
    {
      no: 14,
      type: 'PREPARATION',
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      links: [
        {
          from: 9,
          heading: 'From Step 9',
          name: 'Onion and garlic',
        },
      ],
      items: [],
      ingredients: [],
      tasks: [
        {name: 'Add the onion and the garlic to the pan and mix'},
        {name: 'Sauté for 1-2 minutes'},
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/add_garlic_onion.png',
          alt: 'Add garlic and onion 1',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/add_garlic_onion_2.png',
          alt: 'Add garlic and onion 2',
        },
      ],
      timer: {
        id: '855b7667-72d1-414b-9052-9b168b676b1e',
        name: 'Step 14: Sauté onion and garlic',
        minutes: 2,
        seconds: 0,
      },
    },
    {
      no: 15,
      type: 'PREPARATION',
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      links: [
        {
          from: 10,
          heading: 'From Step 10',
          name: 'Zucchinis and peppers',
        },
      ],
      items: [],
      ingredients: [],
      tasks: [
        {name: 'Add the zucchinis and peppers to the pan and mix'},
        {name: 'Sauté for 4-5 minutes, until the vegetables are ready'},
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/zucchini_peppers.png',
          alt: 'Add zucchini and peppers 1',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/saute_sauce.png',
          alt: 'Saute 1',
        },
      ],
      timer: {
        id: '38d474fc-d6b0-4339-9274-ca7d9bb3265b',
        name: 'Step 15: Sauté zucchinis and peppers',
        minutes: 5,
        seconds: 0,
      },
    },
    {
      no: 16,
      type: 'PREPARATION',
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      links: [
        {
          from: 1,
          heading: 'From Step 1',
          name: 'Spices and tomato paste',
        },
      ],
      items: [],
      ingredients: [],
      tasks: [
        {name: 'Add the spices to the pan'},
        {name: 'Add the tomato paste to the pan'},
        {name: 'Add salt and pepper to taste'},
        {name: 'Mix and sauté'},
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/spices_pasta_mixture.png',
          alt: 'Add the spices 1',
        },
      ],
    },
    {
      no: 17,
      type: 'PREPARATION',
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      links: [
        {
          from: 2,
          heading: 'From Step 2',
          name: 'Wine and canned tomatoes',
        },
      ],
      items: [],
      ingredients: [],
      tasks: [
        {name: 'Deglaze the pan with the wine'},
        {name: 'Add the canned tomatoes to the pan'},
        {name: 'Simmer at medium-low heat for 10 minutes'},
      ],
      timer: {
        id: '6d9f031e-77c9-45da-9543-1187bff32124',
        name: 'Step 17: Simmer Sauce',
        minutes: 10,
        seconds: 0,
      },
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/tomato.png',
          alt: 'Add the tomatoes 1',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/tomato_2.png',
          alt: 'Add the tomatoes 2',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/saute_sauce.png',
          alt: 'Saute Sauce 3',
        },
      ],
    },
    {
      no: 18,
      type: 'PREPARATION',
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      links: [{from: 11, heading: 'From Step 11', name: 'Boiling water'}],
      items: [],
      ingredients: [
        {
          qty: '-',
          name: 'salt',
        },
        {
          qty: '500 g',
          name: 'macaroni',
        },
      ],
      tasks: [
        {name: 'In the pot with boiling water, add salt'},
        {name: 'Add the macaroni'},
        {name: 'Boil for ten minutes'},
      ],
      timer: {
        id: '82a9d341-781e-4d52-9984-78f8545f02f6',
        name: 'Step 18: Cook Pasta',
        minutes: 10,
        seconds: 0,
      },
      images: [
        {
          src: 'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/pasta.png',
          alt: 'Add the macaroni',
        },
      ],
    },
    {
      no: 19,
      type: 'PREPARATION',
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      links: [
        {
          from: 17,
          heading: 'From Step 17',
          name: 'Pan with vegetables',
          timerId: '6d9f031e-77c9-45da-9543-1187bff32124',
        },
        {
          from: 18,
          heading: 'From Step 18',
          name: 'Macaroni',
          timerId: '82a9d341-781e-4d52-9984-78f8545f02f6',
        },
      ],
      items: [],
      ingredients: [],
      tasks: [
        {
          name:
            'Drain the macaroni and transfer to the pan with the vegetables',
        },
        {name: 'Mix and set aside'},
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/pasta_mixture_1.png',
          alt: 'Add the pasta to the vegetables 1',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/pasta_mixture_2.png',
          alt: 'Add the pasta to the vegetables 2',
        },
      ],
    },
    {
      no: 20,
      type: 'PREPARATION',
      tag: {
        text: 'Assembling',
        color: 'tagPink',
      },
      links: [],
      items: [],
      ingredients: [],
      tasks: [{name: 'Preheat the oven at 180 C set to fan'}],
      images: [],
    },
    {
      no: 21,
      type: 'PREPARATION',
      tag: {
        text: 'Bechamel',
        color: 'tagOrange',
      },
      links: [
        {
          from: 4,
          heading: 'From Step 4',
          name: 'Olive oil and all-purpose flour',
        },
      ],
      items: [
        {qty: '1', name: 'small pot'},
        {qty: '-', name: 'hand whisk'},
      ],
      ingredients: [],
      tasks: [
        {name: 'Place a small pot over medium heat'},
        {name: 'Add the olive oil'},
        {name: 'Add the flour'},
        {
          name:
            'Using a hand whisk, mix well until all of the flour is absorbed',
        },
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/bechamel_prep_1.png',
          alt: 'Add the oil and flour',
        },
      ],
    },
    {
      no: 22,
      type: 'PREPARATION',
      tag: {
        text: 'Bechamel',
        color: 'tagOrange',
      },
      links: [
        {
          from: 5,
          heading: 'From Step 5',
          name: 'Plant based milk',
        },
      ],
      items: [],
      ingredients: [],
      tasks: [
        {
          name:
            'Add the plant based milk in 7-8 batches, stirring constantly. Wait for the bechamel to thicken before adding the next batch.',
        },
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/bechamel_prep_2.png',
          alt: 'Add the milk 1',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/bechamel_prep_3.png',
          alt: 'Add the milk 2',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/bechamel_prep_4.png',
          alt: 'Add the milk 3',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/bechamel_prep_5.png',
          alt: 'Add the milk 4',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/bechamel_prep_6.png',
          alt: 'Add the milk 5',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/bechamel_prep_7.png',
          alt: 'Add the milk 6',
        },
      ],
    },
    {
      no: 23,
      type: 'PREPARATION',
      tag: {
        text: 'Bechamel',
        color: 'tagOrange',
      },
      links: [],
      items: [],
      ingredients: [
        {
          qty: '-',
          name: 'salt',
        },
        {
          qty: '-',
          name: 'pepper',
        },
        {
          qty: '-',
          name: 'nutmeg',
        },
      ],
      tasks: [
        {name: 'Season with salt, pepper and nutmeg to taste'},
        {
          name:
            'As soon as it thickens and comes to boil (bubbles start forming), remove from the heat',
        },
        {name: 'You will no longer need the hand whisk'},
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/bechamel_prep_8.png',
          alt: 'Add the spices 2',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/bechamel_prep_9.png',
          alt: 'Wait for bechamel to boil 1',
        },
      ],
    },
    {
      no: 24,
      type: 'PREPARATION',
      tag: {
        text: 'Assembling',
        color: 'tagPink',
      },
      links: [
        {from: 19, heading: 'From Step 19', name: 'Pasta Mixture'},
        {from: 23, heading: 'From Step 23', name: 'Bechamel sauce'},
        {from: 6, heading: 'From Step 6', name: 'Oregano and mint'},
      ],
      items: [],
      ingredients: [],
      tasks: [
        {
          name:
            'Pour approximately 100g of the bechamel into the pasta mixture',
        },
        {name: 'Add the oregano and mint'},
        {name: 'Mix well'},
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/pasta_mixture_3.png',
          alt: 'Add the bechamel to the pasta mixture 1',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/pasta_mixture_4.png',
          alt: 'Add the bechamel to the pasta mixture 2',
        },
      ],
    },
    {
      no: 25,
      type: 'PREPARATION',
      tag: {
        text: 'Assembling',
        color: 'tagPink',
      },
      links: [{from: 7, heading: 'From Step 7', name: 'Breadcrumbs'}],
      items: [{qty: '-', name: '40 cm ovenproof baking dish'}],
      ingredients: [
        {
          qty: 'approx 1 tbsp',
          name: 'olive oil',
        },
      ],
      tasks: [
        {
          name:
            'Grease 40 cm ovenproof baking dish with approximately 1 tbsp olive oil',
        },
        {
          name:
            'Sprinkle approximately half the breadcrumbs, rotating the baking dish until the base is fully covered with breadcrumps',
        },
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/baking_dish_1.png',
          alt: 'Sprinkle breadcrumbs 1',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/baking_dish_2.png',
          alt: 'Spread breadcrumbs 2',
        },
      ],
    },
    {
      no: 26,
      type: 'PREPARATION',
      tag: {
        text: 'Assembling',
        color: 'tagPink',
      },
      links: [
        {
          from: 24,
          heading: 'From Step 24',
          name: 'Pasta Mixture with Bechamel',
        },
      ],
      items: [],
      ingredients: [],
      tasks: [{name: 'Add the pasta mixture to the baking dish'}],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/baking_dish_3.png',
          alt: 'Add the pasta mixture 11',
        },
      ],
    },
    {
      no: 27,
      type: 'PREPARATION',
      tag: {
        text: 'Assembling',
        color: 'tagPink',
      },
      links: [{from: 23, heading: 'From Step 23', name: 'Bechamel sauce'}],
      items: [],
      ingredients: [],
      tasks: [
        {
          name:
            'Pour the remaining bechamel sauce in the baking dish and spread until its fully covered',
        },
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/assembling_1.png',
          alt: 'Assembling 1',
        },
      ],
    },
    {
      no: 28,
      type: 'PREPARATION',
      tag: {
        text: 'Assembling',
        color: 'tagPink',
      },
      links: [{from: 7, heading: 'From Step 7', name: 'Breadcrumbs'}],
      items: [],
      ingredients: [
        {
          qty: 'approx. 1 tbsp',
          name: 'olive oil',
        },
        {
          qty: 'approx. 1 tbsp',
          name: 'thyme',
        },
        {
          qty: '-',
          name: 'pepper',
        },
      ],
      tasks: [
        {
          name:
            'Sprinkle the remaining breadcrumbs in the baking dish until most of the surface is covered',
        },
        {name: 'Sprinkle approximately 1 tbsp of olive oil'},
        {name: 'Sprinkle with some thyme'},
        {name: 'Sprinkle with some pepper'},
      ],
      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/assembling_3.png',
          alt: 'Assembling 2',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/assembling_4.png',
          alt: 'Assembling 3',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/assembling_5.png',
          alt: 'Assembling 4',
        },
      ],
    },
    {
      no: 29,
      type: 'PREPARATION',
      tag: {
        text: 'Assembling',
        color: 'tagPink',
      },
      links: [],
      items: [
        {
          qty: '1',
          name: 'Oven Mitts',
        },
      ],
      ingredients: [],
      tasks: [
        {name: 'Bake for 25 - 30 minutes'},
        {name: 'Remove and let it cool'},
      ],
      timer: {
        id: 'e77fbc23-67bc-43c8-86da-0b8938dbb79f',
        name: 'Step 29: Bake Pastitsio',
        minutes: 30,
        seconds: 0,
      },

      images: [
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/serve_1.png',
          alt: 'Assembling 5',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/serve_2.png',
          alt: 'Assembling 6',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/serve_3.png',
          alt: 'Assembling 7',
        },
      ],
    },
  ],
};
