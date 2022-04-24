import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDeps from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import multi from '@rollup/plugin-multi-entry';
import multiInput from 'rollup-plugin-multi-input';
import path from 'path';
// import visualizer from 'rollup-plugin-visualizer';
import { getFiles } from './scripts/buildUtils';

const extensions = ['.js', '.ts', '.jsx', '.tsx'];

export default [
  {
    input: [
      './src/index.ts',
      './src/icons/index.ts',
      // ...getFiles('./src/components', extensions),
      //...getFiles('./src/icons', extensions),
    ],
    output: [
      // ESM
      {
        format: 'esm',
        sourcemap: true,
        dir: 'lib',
        preserveModules: true,
        entryFileNames: '[name].esm.js',
      },
      // CommonJS96+
      {
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
        dir: 'lib',
        preserveModules: true,
      },
    ],
    plugins: [
      peerDeps(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'lib',
      }),
      postcss(),
      terser(),
      multiInput({ relative: 'src/' })
      // multiInput({ 
      //   relative: 'src/', 
      //   transformOutputPath: (output, input) => `icons/${path.basename(output)}`, 
      // })
      // visualizer({
      //   filename: 'bundle-analysis.html',
      //   open: true,
      // }),
    ],
  },
  // {
  //   input: [
  //     './src/icons/index.ts'
  //   ],
  //   output: [
  //     // ESM
  //     {
  //       format: 'esm',
  //       sourcemap: true,
  //       dir: 'lib/icons',
  //       preserveModules: true,
  //       entryFileNames: '[name].esm.js',
  //     },
  //     // CommonJS96+
  //     {
  //       format: 'cjs',
  //       sourcemap: true,
  //       exports: 'named',
  //       dir: 'lib/icons',
  //       preserveModules: true,
  //     },
  //   ],
  //   plugins: [
  //     peerDeps(),
  //     resolve(),
  //     commonjs(),
  //     typescript({
  //       tsconfig: './tsconfig.json',
  //       declaration: true,
  //       declarationDir: 'lib/icons',
  //     }),
  //     postcss(),
  //     terser(),
  //     multi()
  //   ],
  // }
];
