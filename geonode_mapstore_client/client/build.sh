#!/bin/bash
set -e

npx rimraf package-lock.json npm-shrinkwrap.json node_modules
npm update
yarn install
npm run compile
npm run lint