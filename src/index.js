import { generateElements } from './container.js';
import { list, clearComplete } from './generateList.js';
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
