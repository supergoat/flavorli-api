const jsonfile = require('jsonfile');
import {LentilSoup} from './recipes/Colourful-lentil-soup-3-ways';
import {SpicyPasta} from './recipes/spicy-pasta';

import {panayiotis} from './users/panayiotis';
import {IRecipe} from 'src/types';
import {BananaBreadPancakes} from './recipes/banana_bread_pancakes';
import {PadThai} from './recipes/pad_thai';
import {BananaChocolateSmoothie} from './recipes/banana-chocolate-smoothie';
import {CherryBerrySmoothie} from './recipes/cherry-berry-smoothie';
import {GreekPastitsio} from './recipes/greek-pastitsio';
import {MacNCheese} from './recipes/mac-n-cheese';
import {VegCurry} from './recipes/veg-curry';
import {CauliflowerSteaks} from './recipes/cauliflower_steaks';
import {VegetableBroth} from './recipes/vegetable_broth';
import {ChocolateCherryBananaSoftServe} from './recipes/chocolate-cherry-banana soft-serve';
import {WholeRoastedCauliflower} from './recipes/whole-roasted-cauliflower-lemon-tahini-sauce';
import {ChocolateCake} from './recipes/chocolate-cake';

const recipes: IRecipe[] = [
  // Rissoto,
  LentilSoup,
  SpicyPasta,
  BananaBreadPancakes,
  PadThai,

  ChocolateCherryBananaSoftServe,
  MacNCheese,
  CherryBerrySmoothie,
  GreekPastitsio,
  BananaChocolateSmoothie,
  VegCurry,
  CauliflowerSteaks,
  VegetableBroth,
  WholeRoastedCauliflower,
  ChocolateCake,
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
