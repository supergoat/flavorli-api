import uuidv4 from 'uuid/v4';
import {IRecipe} from 'src/types';

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
      for: 'sauce',
      list: [
        {
          qty: '2',
          name: 'eggplants',
        },
        {
          qty: '4 - 6 tbsp',
          name: 'olive oil',
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
          qty: '1 tsp',
          name: 'oregano',
        },
        {
          qty: '1 tbsp',
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
          qty: '-',
          name: 'olive oil',
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
    },
  ],
  items: [
    {qty: '1', name: 'pinch bowl', notes: 'for the spices'},
    {qty: '2', name: 'measuring jars', notes: 'for the oil and wine'},
    {
      qty: '1',
      name: 'large bowl',
      notes: 'for holding the vegetables',
    },
    {qty: '1', name: 'small bowl', notes: 'for the flour'},
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
      qty: '1',
      name: 'chopping board',
    },
    {
      qty: '-',
      name: 'measuring spoons',
    },
    {
      qty: '-',
      name: 'ovenproof baking dish',
      notes: 'approximately 40 cm. For best results ensure it has enough depth',
    },
  ],
  steps: [
    {
      for: 'the sauce',
      tasks: [
        {name: 'Add 50 g of white wine in a measuring jar and set aside'},
        {name: 'Open and set aside 400 g of canned tomatoes'},
      ],
      images: [],
    },
    {
      for: 'the sauce',
      tasks: [
        {
          name: 'Wash 2 zucchinis and set aside',
        },
        {
          name: 'Wash 1 red bell pepper and set aside',
        },
        {
          name: 'Wash 1 green bell pepper and set aside',
        },
        {
          name: 'Wash 2 eggplants and set aside',
        },
      ],
    },
    {
      for: 'the sauce',
      tasks: [
        {
          name:
            'Cut 2 zucchinis into small cubes and place them in a large bowl',
        },
        {
          name:
            'Cut 1 red bell pepper into small cubes and place it in the same bowl',
        },
        {
          name:
            'Cut 1 green bell pepper into small cubes and place it in the same bowl',
        },
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
      for: 'the sauce',
      tasks: [
        {name: 'Finely chop 1 onion and set aside'},
        {
          name: 'Finely chop 1 garlic clove and set aside',
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
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/garlic.png',
          alt: 'Cutting Garlic 1',
        },
      ],
    },

    {
      for: 'the sauce',
      tasks: [
        {
          name: 'Cut 2 eggplants into 1 cm cubes',
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
      for: 'the sauce',
      links: [],
      heatLevel: 'high',
      tasks: [
        {name: 'Place a pot of water on high heat and set aside to boil'},
      ],
      images: [],
    },
    {
      for: 'the sauce',
      links: [],
      heatLevel: 'high',
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
      for: 'the sauce',
      tasks: [
        {name: 'Add the eggplants to the pan'},
        {
          name: 'Sauté for 1-2 minutes',
          timer: {
            id: 'dabff1de-88a7-4213-9866-17c9100a8eb1',
            name: 'Step 13: Sauté eggplant',
            minutes: 2,
            seconds: 0,
          },
        },
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
    },
    {
      for: 'the sauce',
      tasks: [
        {name: 'Add the onion and the garlic to the pan'},
        {
          name: 'Mix and sauté for 1-2 minutes',
          timer: {
            id: '855b7667-72d1-414b-9052-9b168b676b1e',
            name: 'Step 14: Sauté onion and garlic',
            minutes: 2,
            seconds: 0,
          },
        },
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
    },
    {
      for: 'the sauce',
      tasks: [
        {name: 'Add the zucchinis and peppers to the pan'},
        {
          name: 'Mix and sauté for 4-5 minutes, until the vegetables are soft',
          timer: {
            id: '38d474fc-d6b0-4339-9274-ca7d9bb3265b',
            name: 'Step 15: Sauté zucchinis and peppers',
            minutes: 5,
            seconds: 0,
          },
        },
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
    },

    {
      for: 'the sauce',
      tasks: [
        {name: 'In a pinch bowl add 1 tsp oregano'},
        {name: 'Add 1 tbsp thyme'},
        {name: 'Add 1 tsp chili flakes'},
        {
          name: 'Add 1 tbsp granulated sugar and set aside',
        },
      ],
      images: [],
    },
    {
      for: 'the sauce',
      tasks: [
        {name: 'Add the spices to the pan'},
        {name: 'Add 1 tbsp tomato paste to the pan'},
        {
          name: 'Add salt and pepper to taste',
          notes: ['Taste to make sure you added enough salt'],
        },
        {
          name: 'Mix and sauté for 1-2 minutes',
          timer: {
            id: uuidv4(),
            name: 'Saute vegetables',
            minutes: 2,
            seconds: 0,
          },
        },
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
      for: 'the sauce',
      heatLevel: 'mediumLow',
      tasks: [
        {name: 'Deglaze the pan with the white wine'},
        {name: 'Add 1 400 g can of tomatoes to the pan'},
        {
          name: 'Simmer at medium-low heat for 10 minutes',
          timer: {
            id: '6d9f031e-77c9-45da-9543-1187bff32124',
            name: 'Step 17: Simmer Sauce',
            minutes: 10,
            seconds: 0,
          },
        },
      ],

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
      for: 'the sauce',
      heatLevel: 'mediumHigh',
      tasks: [
        {name: 'In the pot with boiling water, add salt'},
        {name: 'Add 500 g macaroni'},
        {
          name: 'Boil for ten minutes',
          timer: {
            id: '82a9d341-781e-4d52-9984-78f8545f02f6',
            name: 'Step 18: Cook Pasta',
            minutes: 10,
            seconds: 0,
          },
        },
      ],

      images: [
        {
          src: 'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/pasta.png',
          alt: 'Add the macaroni',
        },
      ],
    },
    {
      for: 'the sauce',
      links: [
        {
          from: 13,
          name: 'Pan with vegetables',
          timerId: '6d9f031e-77c9-45da-9543-1187bff32124',
        },
        {
          from: 14,
          name: 'Macaroni',
          timerId: '82a9d341-781e-4d52-9984-78f8545f02f6',
        },
      ],
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
      for: 'the bechamel',
      tasks: [
        {name: 'Add 80 g of olive oil in a measuring jar and set aside'},
        {
          name: 'Add 80 g of all-purpose flour in a small bowl and set aside',
          notes: ['You will no longer need the scale'],
        },
      ],
      images: [],
    },
    {
      for: 'assembling',
      links: [],
      tasks: [{name: 'Preheat the oven at 180 C set to fan'}],
      ovenTemperature: '180 C',
      images: [],
    },
    {
      for: 'the bechamel',
      tasks: [
        {name: 'Place a small pot over medium heat'},
        {name: 'Add the 80 g of olive oil'},
        {name: 'Add the 80 g of flour'},
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
      for: 'the bechamel',
      notes: ['This step requires you to be hands on and stirring'],
      tasks: [
        {
          name: 'Add 1 L plant based milk in 7-8 batches, stirring constantly',
          notes: [
            'Wait for the bechamel to thicken before adding the next batch',
          ],
        },
        {
          name:
            'As soon as it thickens and comes to boil (bubbles start forming), remove from the heat',
        },
        {name: 'Season with salt, pepper and nutmeg to taste'},
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
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/bechamel_prep_9.png',
          alt: 'Wait for bechamel to boil 1',
        },
        {
          src:
            'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/bechamel_prep_8.png',
          alt: 'Add the spices 2',
        },
      ],
    },
    {
      for: 'assembling',
      links: [
        {from: 15, name: 'Pasta Mixture'},
        {from: 19, name: 'Bechamel sauce'},
      ],

      tasks: [
        {
          name:
            'Pour approximately 100g of the bechamel into the pasta mixture',
        },
        {name: 'Add 1 tsp oregano'},
        {
          name: 'Add 1 tbsp mint',
        },
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
      for: 'assembling',
      tasks: [
        {
          name:
            'Grease 40 cm ovenproof baking dish with approximately 1 tbsp olive oil',
        },
        {
          name:
            'Sprinkle with approximately 25 g of breadcrumbs, rotating the baking dish until the base is fully covered',
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
      for: 'assembling',
      links: [
        {
          from: 20,
          name: 'Pasta Mixture with Bechamel',
        },
      ],

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
      for: 'assembling',
      links: [{from: 19, name: 'Bechamel sauce'}],

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
      for: 'assembling',

      tasks: [
        {
          name:
            'Sprinkle the surface with approximately 25 g breadcrumbs until it is mostly covered',
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
      for: 'assembling',
      links: [],
      tasks: [
        {
          name: 'Bake for 25 - 30 minutes',
          timer: {
            id: 'e77fbc23-67bc-43c8-86da-0b8938dbb79f',
            name: 'Step 29: Bake Pastitsio',
            minutes: 30,
            seconds: 0,
          },
        },
      ],

      images: [],
    },

    {
      for: 'assembling',
      links: [],

      tasks: [
        {
          name: 'Remove and let it cool for 10 minutes',
          timer: {
            id: uuidv4(),
            name: 'Let the pasta bake cool',
            minutes: 10,
            seconds: 0,
          },
        },
        {
          name: 'Serve with some mint leaves and oregano',
        },
        {name: 'Enjoy! :)'},
      ],

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
