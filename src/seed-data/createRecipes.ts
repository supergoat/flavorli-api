const jsonfile = require('jsonfile');
import {Rissoto} from './recipes/broccoli-lemon-mint-risotto';
import {LentilSoup} from './recipes/Colourful-lentil-soup-3-ways';
import {ChocolateCake} from './recipes/chocolate-cake';
import {MacNCheese} from './recipes/mac-n-cheese';
import {CherryBerrySmoothie} from './recipes/cherry-berry-smoothie';
import {GreekPastitsio} from './recipes/greek-pastitsio';
import {BananaChocolateSmoothie} from './recipes/banana-chocolate-smoothie';
import {VegCurry} from './recipes/veg-curry';
import {panayiotis} from './users/panayiotis';

const recipes = [
  Rissoto,
  LentilSoup,
  ChocolateCake,
  MacNCheese,
  CherryBerrySmoothie,
  GreekPastitsio,
  BananaChocolateSmoothie,
  VegCurry,
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
