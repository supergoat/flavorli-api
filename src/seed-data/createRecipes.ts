const jsonfile = require('jsonfile');
import {LentilSoup} from './recipes/Colourful-lentil-soup-3-ways';
import {SpicyPasta} from './recipes/spicy-pasta';

import {panayiotis} from './users/panayiotis';
import {IRecipe} from 'src/types';
import {BananaBreadPancakes} from './recipes/banana_bread_pancakes';
import {PadThai} from './recipes/pad_thai';
import {BananaChocolateSmoothie} from './recipes/banana-chocolate-smoothie';
import {CherryBerrySmoothie} from './recipes/cherry-berry-smoothie';

const recipes: IRecipe[] = [
  // Rissoto,
  LentilSoup,
  SpicyPasta,
  BananaBreadPancakes,
  PadThai,
  // ChocolateCake,
  // MacNCheese,
  CherryBerrySmoothie,
  // GreekPastitsio,
  BananaChocolateSmoothie,
  // VegCurry,
];

const users = [panayiotis];

createJSONFile('./Recipes.json', recipes);
createJSONFile('./Users.json', users);

function createJSONFile(fileName: string, data: Object) {
  jsonfile.writeFileSync(fileName, data, function(err: string) {
    if (err) {
      console.error(err);
    } else {
      console.log('data created successfully');
    }
  });
}
