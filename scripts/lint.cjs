/**
 * typescript-eslint does not support TypeScript 7 yet; resolve `typescript` to the
 * TS 6 copy used only for ESLint. Project typechecking uses TypeScript 7 (`tsc`).
 */
const path = require('path');
const Module = require('module');

const ts6Entry = path.join(
  __dirname,
  '..',
  'node_modules',
  'typescript-6',
  'lib',
  'typescript.js'
);

const resolveFilename = Module._resolveFilename;
Module._resolveFilename = function (request, parent, isMain, options) {
  if (request === 'typescript') {
    return ts6Entry;
  }
  return resolveFilename.call(this, request, parent, isMain, options);
};

require(path.join(__dirname, '..', 'node_modules', 'eslint', 'bin', 'eslint.js'));
