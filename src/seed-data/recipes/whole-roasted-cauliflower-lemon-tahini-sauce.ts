import {IRecipe} from 'src/types';
import uuidv4 from 'uuid/v4';

const timerOneId = uuidv4();
const timerTwoId = uuidv4();
export const WholeRoastedCauliflower: IRecipe = {
  id: 'd23cf850-a0a1-48d4-b8ea-776efaf32f40',
  createdAt: new Date().toISOString(),
  author: 'Robin Robertson',
  name: 'Whole Roasted Cauliflower with Lemon Tahini Sauce',
  image:
    'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/whole_cauliflower.jpeg',
  preparationTime: 5,
  cookingTime: 30,
  portions: '1',
  difficulty: '1',
  notes: ['This recipe requires a blender', 'This recipe requires baking'],
  ingredients: [
    {
      for: 'sauce',
      list: [
        {
          qty: '3',
          name: 'garlic cloves',
        },
        {
          qty: '2 tsp',
          name: 'white miso paste',
        },
        {
          qty: '1/2 cup (120 ml)',
          name: 'water',
        },
        {
          qty: '1 tbsp',
          name: 'tahini',
        },
        {
          qty: '1 1/2 tbsp',
          name: 'blended peeled lemon',
        },
        {
          qty: '2 tbsp',
          name: 'nutritional yeast',
        },
        {
          qty: '1/2 tsp',
          name: 'salt-free whole-grain mustard',
        },
        {
          qty: '1/4 tsp',
          name: 'ground tumeric',
        },
        {
          qty: '-',
          name: 'savory spice blend',
          notes: 'to taste',
        },

        {
          qty: '3 tbsp',
          name: 'parsley',
        },
        {
          qty: '-',
          name: 'ground black pepper',
        },
      ],
    },
    {
      for: 'cauliflower',
      list: [
        {
          qty: '1',
          name: 'head cauliflower',
        },
      ],
    },
  ],
  items: [
    {
      qty: '-',
      name: 'blender',
    },
    {
      qty: '1',
      name: 'pot',
      notes: 'Large enough to fit a cauliflower head',
    },
    {
      qty: '1',
      name: 'shallow baking tray',
      notes: 'Make sure it has a bit of depth to hold some water',
    },
  ],
  steps: [
    {
      for: 'for the cauliflower',
      heatLevel: 'high',
      tasks: [
        {
          name: 'Place a pot of water on high heat and set aside to boil',
          notes: ['Make sure there is enough water to immerse the cauliflower'],
        },
      ],
    },
    {
      for: 'for the sauce',
      tasks: [
        {
          name: 'Crush 3 garlic cloves',
        },
        {
          name: 'In a food processor or blender, add the garlic',
        },
        {
          name: 'Add 2 tsp white miso paste',
        },
        {
          name: 'Add 1/2 cup (120 ml) water',
        },
        {
          name: 'Add 1 tbsp tahini',
        },
        {
          name: 'Add 1 1/2 tbsp blended peeled lemon',
        },
        {
          name: 'Add 2 tbsp nutritional yeast',
        },
        {
          name: 'Add 1/2 tsp salt-free whole-grain mustard',
        },
        {
          name: 'Add 1/2 tsp ground tumeric',
        },
        {
          name: 'Add savory spice blend to taste',
        },
        {
          name: 'Blend until smooth and set aside',
        },
      ],
    },
    {
      for: 'for the cauliflower',
      ovenTemperature: '200 C',
      tasks: [
        {
          name: 'Pre heat the oven to 200 C',
        },
      ],
    },
    {
      for: 'for the cauliflower',
      heatLevel: 'medium',
      tasks: [
        {
          name: 'Remove the stem and leaves from the cauliflower',
        },
        {
          name:
            'Carefully place the cauliflower in the boiling water making sure its completely immersed',
        },
        {
          name: 'Lower the heat to medium',
        },
        {name: 'Place the lid on the pot'},
        {
          name: 'Cook for about 8 minutes until the cauliflower is blanched',
          timer: {
            id: timerOneId,
            name: 'Blanch Cauliflower',
            minutes: 8,
            seconds: 0,
          },
        },
      ],
    },
    {
      for: 'for the cauliflower',
      links: [
        {
          from: 8,
          name: 'Blanched cauliflower',
          timerId: timerOneId,
        },
      ],
      tasks: [
        {
          name:
            'Transfer the cauliflower to a shallow baking dish, with the stem side facing down',
        },
        {
          name: 'Add about 1 cm of the water from the pot to the baking dish',
        },
        {
          name:
            'Pour about half of the sauce on the cauliflower and use your fingers to rub it until the cauliflower is fully covered',
        },
        {
          name: 'Roast for about 40 minutes, until the cauliflower is tender',
          timer: {
            id: timerTwoId,
            name: 'Roast Cauliflower',
            minutes: 40,
            seconds: 0,
          },
        },
      ],
    },
    {
      for: 'for the sauce',
      tasks: [
        {
          name: 'Roughly chop 3 tbsp of chopped fresh parsley',
        },
        {
          name: 'Add the parsley to the remaining sauce',
        },
        {
          name: 'Add ground black pepper to taste',
        },
        {
          name: 'Stir well',
          notes: ['Adjust the seasonings if needed'],
        },
      ],
    },
    {
      for: 'for the cauliflower',
      links: [
        {
          from: 8,
          name: 'Blanched cauliflower',
          timerId: timerTwoId,
        },
      ],
      tasks: [
        {
          name: 'Remove the cauliflower from the oven',
        },
        {
          name:
            'If needed, heat the sauce in a small sauce pan or the microwave',
        },
        {
          name: 'Serve the cauliflower in a plate and top with more sauce',
        },
        {
          name: 'Enjoy! :)',
        },
      ],
    },
  ],
};
