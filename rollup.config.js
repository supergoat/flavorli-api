import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

import {terser} from 'rollup-plugin-terser';

export default {
  input: 'index.ts', // our source file
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    terser(), // minifies generated bundles
  ],
};
