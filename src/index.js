import Sortable from 'sortablejs';
import { generateElements } from './container.js';
import { list } from './generateList.js';
import { clearComplete } from './clear.js';
// import { draggable } from "./draggable.js";

import './index.scss';

generateElements();
const items = document.querySelector('.todo-list');

const input = document.getElementById('input');
const clear = document.querySelector('.clear');

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    list();
  }
});

clear.addEventListener('click', clearComplete);

const sortable = new Sortable(items, {
  animation: 150,
});

sortable();
