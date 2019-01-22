const browsersync = require('rollup-plugin-browsersync');
const babel = require('rollup-plugin-babel');
const {
  terser
} = require('rollup-plugin-terser');
const postcss = require('rollup-plugin-postcss');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const filesize = require('rollup-plugin-filesize');
const normalize = require('postcss-normalize');
const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = isProduction === false;

module.exports = {
  input: 'src/scripts/index.js',
  output: {
    file: 'public/giphy.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    filesize(),
    commonjs(),
    nodeResolve(),
    postcss({
      extract: true,
      plugins: [
        normalize
      ]
    }),
    (isProduction && browsersync({
      server: 'public'
    })),
    (isDevelopment && terser()),
  ]
};
