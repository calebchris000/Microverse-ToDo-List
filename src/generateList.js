import SaveData from './save.js';

const input = document.getElementById('input');
const todo = document.querySelector('.todo-list');

const newSave = new SaveData();

// * Changes the boolean property based on the checked input event
const updateBoolean = (i) => {
  const get = JSON.parse(localStorage.getItem('data'));

  get.forEach((item) => {
    if (item.index === i) {
      item.checked = !item.checked;
    }
  });

  localStorage.setItem('data', JSON.stringify(get));
};

// * Initialization of index property

let count = 0;

// * Changes the text decoration of the element based on the check state

const change = (list, check, todo, wrapper, wrapperCheck, text) => {
  list.style.textDecoration = text;
  todo.removeChild(wrapper);
  wrapperCheck.appendChild(check);
  wrapperCheck.appendChild(list);
  todo.prepend(wrapperCheck);
};

// * The todolist creation function itself
const load = (object, inp) => {
  count += 1;
  const wrapper = document.createElement('div');
  const wrapperCheck = document.createElement('div');
  const check = document.createElement('input');
  const list = document.createElement('input');

  check.type = 'checkbox';

  wrapper.classList.add('wrapper');
  wrapper.classList.add(count);
  wrapperCheck.classList.add('wrapperCheck');
  list.classList.add('list');
  check.classList.add('check');
  list.value = inp;

  check.checked = object.checked;
  object.text = inp;
  object.checked = check.checked;
  object.index = count;

  // * On click, event triggered causes the element to move to the wrappercheck

  check.addEventListener('change', () => {
    const bool = check.checked;
    updateBoolean(object.index);
    if (bool) {
      change(list, check, todo, wrapper, wrapperCheck, 'line-through');
    } else {
      //* Returns back to the wrapper element, so the
      //* WrapperCheck and wrapper is reversed to achieve that
      change(list, check, todo, wrapperCheck, wrapper, 'none');
    }
  });

  // * Saves data to the local storage

  newSave.add(object);

  wrapper.appendChild(check);
  wrapper.appendChild(list);

  todo.appendChild(wrapper);

  input.value = '';

  // * I had this bug that prevents the restored item from being crossed (marked as completed)
  // * So this fixed it.

  if (check.checked) {
    change(list, check, todo, wrapper, wrapperCheck, 'line-through');
  }
};

// * Initialize the object property
export const list = () => {
  const dataText = {};
  load(dataText, input.value);
};

// * On reload
const refresh = () => {
  const elem = localStorage.getItem('data');

  const parsed = JSON.parse(elem);
  localStorage.clear();

  if (parsed !== null) {
    parsed.forEach((item) => {
      load(item, item.text);
    });
  }
};

export const clearComplete = () => {
  const wrapperChecks = todo.querySelectorAll('.wrapperCheck');

  wrapperChecks.forEach((item) => {
    item.remove();
  });

  newSave.array = [];
  const get = JSON.parse(localStorage.getItem('data'));
  localStorage.clear();
  const cleaned = get.filter((x) => x.checked !== true);

  cleaned.forEach((item) => {
    newSave.add(item);
  });
};

window.onload = refresh;
