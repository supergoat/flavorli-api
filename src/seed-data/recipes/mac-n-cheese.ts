import {IRecipe} from 'types';

export const MacNCheese: IRecipe = {
  id: '018fdcbd-5ddd-45c7-ad11-40df445f27c8',
  createdAt: '2020-01-19T20:06:42.873Z',
  author: 'James Wythe',
  name: 'Vegan Mac and Cheese',
  image:
    'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/Vegan-Mac-N-Cheese-with-plate.jpg',
  preparationTime: 5,
  cookingTime: 30,
  portions: '4',
  difficulty: '1',
  ingredients: [
    {qty: '400 g', name: 'macaroni'},
    {qty: '100 g', name: 'raw cashews'},
    {qty: '300 ml', name: 'plant-based milk'},
    {qty: '6 tbsp', name: 'nutritional yeast'},
    {qty: '2 tsp', name: 'dijon mustard'},
    {qty: '1 tbsp', name: 'olive oil'},
    {qty: '-', name: 'salt', notes: 'to taste'},
    {qty: '-', name: 'pepper', notes: 'to taste'},
    {qty: '-', name: 'vegan grated cheese', notes: 'optional'},
    {qty: '-', name: 'paprika', notes: 'for presentation'},
  ],
  notes: ['This recipe requires a blender', 'The final step requires baking'],
  items: [
    {
      qty: '1',
      name: 'Bowl',
    },
    {
      qty: '1',
      name: 'Pot',
    },
    {
      qty: '1',
      name: 'Blender',
    },
    {
      qty: '1',
      name: 'Baking Dish',
    },
  ],
  steps: [
    {
      no: 1,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'Pasta',
        color: 'tagRed',
      },
      links: [],
      items: [
        {
          qty: '1',
          name: 'Pot',
        },
      ],
      ingredients: [],
      tasks: [
        {name: 'Place a pot of water on medium heat and set aside to boil'},
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
      links: [],
      items: [
        {
          qty: '1',
          name: 'Bowl',
        },
      ],
      ingredients: [
        {
          qty: '100 g',
          name: 'raw cashews',
        },
      ],
      tasks: [
        {
          name:
            'Place 100g cashews into a bowl and cover with hot water for 5 minutes',
        },
      ],
      images: [],
      timer: {
        id: '9664758a-6961-4bfe-adb8-9e62289534c8',
        name: 'Step 2: Soak cashews',
        minutes: 5,
        seconds: 0,
      },
    },
    {
      no: 3,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'Pasta',
        color: 'tagRed',
      },
      links: [],
      items: [
        {
          qty: '1',
          name: 'Bowl',
        },
      ],
      ingredients: [
        {
          qty: '400 g',
          name: 'macaroni',
        },
      ],
      tasks: [{name: 'Add 400 g of macaroni to a bowl and set aside'}],
      images: [],
    },
    {
      no: 4,
      type: 'MISE_EN_PLACE',
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      links: [],
      items: [
        {
          qty: '1',
          name: 'Small Bowl',
        },
        {qty: '3', name: 'Pinch Bowls'},
      ],
      ingredients: [
        {
          qty: '300 ml',
          name: 'plant-based milk',
        },
        {
          qty: '6 tbsp',
          name: 'nutritional yeast',
        },
        {
          qty: '2 tsp',
          name: 'dijon mustard',
        },
        {
          qty: '1 tbsp',
          name: 'olive oil',
        },
      ],
      tasks: [
        {name: 'Add 300 ml of plant-based milk into a bowl and set aside'},
        {name: 'Add 6 tbsp nutritional yeast in a pinch bowl and set aside'},
        {name: 'Add 2 tsp dijon mustard in a pinch bowl and set aside'},
        {name: 'Add 1 tbsp olive oil in a pinch bowl and set aside'},
      ],
      images: [],
    },
    {
      no: 5,
      type: 'PREPARATION',
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      links: [],
      items: [],
      ingredients: [],
      tasks: [{name: 'Pre-heat your oven to 200C'}],
      images: [],
    },
    {
      no: 6,
      type: 'PREPARATION',
      tag: {
        text: 'Pasta',
        color: 'tagRed',
      },
      links: [
        {from: 1, heading: 'From Step 1', name: 'Boiling water'},
        {from: 3, heading: 'From Step 3', name: 'Macaroni'},
      ],
      items: [],
      ingredients: [
        {
          qty: '-',
          name: 'salt',
        },
        {
          qty: '400 g',
          name: 'macaroni',
        },
      ],
      tasks: [
        {name: 'In the pot with boiling water, add salt'},
        {name: 'Add the macaroni'},
        {name: 'Boil for ten minutes'},
      ],
      images: [],
      timer: {
        id: '3969d7db-05f5-4ec4-acf3-c678f0078b00',
        name: 'Step 6: Cook Pasta',
        minutes: 10,
        seconds: 0,
      },
    },
    {
      no: 7,
      type: 'PREPARATION',
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      links: [
        {
          from: 2,
          heading: 'From Step 2',
          name: 'Soaked cashews',
          timerId: '9664758a-6961-4bfe-adb8-9e62289534c8',
        },
      ],
      items: [
        {
          qty: '1',
          name: 'blender',
        },
      ],
      ingredients: [],
      tasks: [{name: 'Drain the cashews and add them to a blender cup'}],
      images: [],
    },
    {
      no: 8,
      type: 'PREPARATION',
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      links: [{from: 4, heading: 'From Step 4', name: 'Cheese ingredients'}],
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
      ],
      tasks: [
        {name: 'Add the plant-based milk to the blender cup with the cashews'},
        {name: 'Add the nutritional yeast'},
        {name: 'Add the dijon mustard'},
        {name: 'Add the olive oil'},
        {name: 'Add a pinch of salt'},
        {name: 'Add a pinch of pepper'},
        {name: 'Blend until smooth and set aside'},
      ],
      images: [],
    },
    {
      no: 9,
      type: 'PREPARATION',
      tag: {
        text: 'Assembling',
        color: 'tagRed',
      },
      links: [
        {
          from: 6,
          heading: 'From Step 6',
          name: 'Cooked Pasta',
          timerId: '3969d7db-05f5-4ec4-acf3-c678f0078b00',
        },
        {from: 8, heading: 'From Step 8', name: 'Cheese sauce'},
      ],
      items: [
        {
          qty: '1',
          name: 'Baking Dish',
        },
      ],
      ingredients: [
        {
          qty: '-',
          name: 'Vegan grated cheese',
        },
      ],
      tasks: [
        {name: 'Drain the pasta and add to a baking dish'},
        {name: 'Pour over the cheese sauce and mix'},
        {name: 'Sprinkle the vegan grated cheese on top if using'},
      ],
      images: [],
    },
    {
      no: 10,
      type: 'PREPARATION',
      tag: {
        text: 'Assembling',
        color: 'tagRed',
      },
      links: [],
      items: [],
      ingredients: [],
      tasks: [{name: 'Place the pasta in the oven for 20 min at 200 C'}],
      images: [],
      timer: {
        id: '2d0f6cc0-6dfc-459a-bb1a-d18a1038114a',
        name: 'Step 10: Bake Pasta',
        minutes: 20,
        seconds: 0,
      },
    },
    {
      no: 11,
      type: 'PREPARATION',
      tag: {
        text: 'Assembling',
        color: 'tagRed',
      },
      links: [
        {
          from: 10,
          heading: 'From Step 10',
          name: 'Baked Pasta',
          timerId: '2d0f6cc0-6dfc-459a-bb1a-d18a1038114a',
        },
      ],
      items: [],
      ingredients: [
        {
          qty: '-',
          name: 'paprika',
        },
      ],
      tasks: [
        {name: "Serve the mac 'n' cheese in a plate"},
        {name: 'Sprinkle with some paprika and serve immediately'},
        {name: 'Enjoy :)'},
      ],
      images: [],
    },
  ],
};
