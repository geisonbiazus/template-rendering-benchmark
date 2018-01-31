import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import App from './app';
import template from './template';

const isMobile = true;
const initialState = { isMobile };

const list = [];

for (let i = 1; i <= 10000; i++) {
  list.push(i);
}

console.time('bench');

const appString = renderToStaticMarkup(<App list={list} />);

let result = template(appString);

// console.log(result);

console.timeEnd('bench');
