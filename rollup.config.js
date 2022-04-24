import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDeps from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import renameNodeModules from "rollup-plugin-rename-node-modules";

export default [
  {
    input: [
      './src/index.ts',
      //'./src/icons/index.ts',
    ],
    output: [
      // ESM
      {
        format: 'esm',
        sourcemap: true,
        dir: 'lib',
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].esm.js',
      },
      // CommonJS96+
      {
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
        dir: 'lib',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      peerDeps(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json'
      }),
      postcss(),
      terser(),
      //renameNodeModules("external")
    ],
  }
];
