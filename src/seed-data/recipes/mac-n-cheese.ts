import {IRecipe} from 'src/types';

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
    {
      for: "mac 'n' cheese",
      list: [
        {qty: '200 g', name: 'macaroni'},
        {qty: '50 g', name: 'raw cashews'},
        {qty: '150 ml', name: 'plant-based milk'},
        {qty: '3 tbsps', name: 'nutritional yeast'},
        {qty: '1 tsp', name: 'dijon mustard'},
        {qty: '1.5 tsp', name: 'olive oil'},
        {qty: '-', name: 'salt', notes: 'to taste'},
        {qty: '-', name: 'pepper', notes: 'to taste'},
        {qty: '-', name: 'vegan grated cheese', notes: 'optional'},
        {qty: '-', name: 'paprika', notes: 'for presentation'},
      ],
    },
  ],
  notes: ['This recipe requires a blender', 'The final step requires baking'],
  items: [
    {
      qty: '-',
      name: 'Blender',
    },
    {
      qty: '-',
      name: 'measuring spoons',
    },
    {
      qty: '-',
      name: 'scale',
    },
    {
      qty: '1',
      name: 'Baking Dish',
      notes: 'large enough to hold 200 g macaroni with the cheese sauce',
    },
  ],
  steps: [
    {
      for: 'for the pasta',
      heatLevel: 'high',
      tasks: [
        {name: 'Place a pot of water on high heat and set aside to boil'},
      ],
      images: [],
    },
    {
      for: 'for the sauce',
      tasks: [
        {
          name:
            'Place 50 g cashews into a bowl and cover with hot water for 5 minutes',
          timer: {
            id: '9664758a-6961-4bfe-adb8-9e62289534c8',
            name: 'Step 2: Soak cashews',
            minutes: 5,
            seconds: 0,
          },
        },
      ],
      images: [],
    },
    {
      for: 'for the sauce',
      links: [
        {
          from: 2,
          name: 'Soaked cashews',
          timerId: '9664758a-6961-4bfe-adb8-9e62289534c8',
        },
      ],

      tasks: [{name: 'Drain the cashews and add them to a blender cup'}],
      images: [],
    },
    {
      for: 'for the sauce',
      tasks: [
        {
          name:
            'Add the 150 ml plant-based milk to the blender cup with the cashews',
        },
        {name: 'Add 3 tbsps nutritional yeast'},
        {name: 'Add 1 tsp dijon mustard'},
        {name: 'Add 1.5 tsp olive oil'},
        {name: 'Add a pinch of salt'},
        {name: 'Add a pinch of pepper'},
        {name: 'Blend until smooth and set aside'},
      ],
      images: [],
    },
    {
      for: 'for the sauce',
      ovenTemperature: '200 C',
      tasks: [{name: 'Pre-heat your oven to 200C'}],
      images: [],
    },
    {
      for: 'for the pasta',
      heatLevel: 'mediumHigh',
      tasks: [
        {name: 'In the pot with boiling water, add salt'},
        {name: 'Add 200 g of macaroni'},
        {
          name: 'Boil for ten minutes',
          timer: {
            id: '3969d7db-05f5-4ec4-acf3-c678f0078b00',
            name: 'Step 6: Cook Pasta',
            minutes: 10,
            seconds: 0,
          },
        },
      ],
      images: [],
    },
    {
      for: 'for assembling',
      links: [
        {
          from: 5,
          name: 'Cooked Pasta',
          timerId: '3969d7db-05f5-4ec4-acf3-c678f0078b00',
        },
        {from: 4, name: 'Cheese sauce'},
      ],
      tasks: [
        {name: 'Drain the pasta and add to a baking dish'},
        {name: 'Pour over the cheese sauce and mix'},
        {name: 'Sprinkle the vegan grated cheese on top if using'},
      ],
      images: [],
    },
    {
      for: 'for assembling',

      tasks: [
        {
          name: 'Place the pasta in the oven for 20 min at 200 C',
          timer: {
            id: '2d0f6cc0-6dfc-459a-bb1a-d18a1038114a',
            name: 'Step 10: Bake Pasta',
            minutes: 20,
            seconds: 0,
          },
        },
      ],
      images: [],
    },
    {
      for: 'for assembling',
      links: [
        {
          from: 8,
          name: 'Baked Pasta',
          timerId: '2d0f6cc0-6dfc-459a-bb1a-d18a1038114a',
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
