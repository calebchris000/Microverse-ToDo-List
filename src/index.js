import { generateElements } from './container.js';
import { list } from './generateList.js';
import { clearComplete } from './clear.js';
import './index.scss';

generateElements();

const input = document.getElementById('input');
const clear = document.querySelector('.clear');

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    list();
  }
});

clear.addEventListener('click', clearComplete);
