import SaveData from './save.js';

const input = document.getElementById('input');
const todo = document.querySelector('.todo-list');
const newSave = new SaveData();

export const list = () => {
  const wrapper = document.createElement('div');
  const wrapperCheck = document.createElement('div');
  const check = document.createElement('input');
  const list = document.createElement('input');

  check.type = 'checkbox';

  wrapper.classList.add('wrapper');
  wrapperCheck.classList.add('wrapperCheck');
  list.classList.add('list');
  check.classList.add('check');
  list.value = input.value;

  check.addEventListener('change', () => {
    const bool = check.checked;

    if (bool) {
      list.style.textDecoration = 'line-through';
      todo.removeChild(wrapper);

      wrapperCheck.appendChild(check);
      wrapperCheck.appendChild(list);
      todo.prepend(wrapperCheck);
    } else {
      list.style.textDecoration = 'none';

      todo.removeChild(wrapperCheck);

      wrapper.appendChild(check);
      wrapper.appendChild(list);
      todo.appendChild(wrapper);
    }
  });

  newSave.add({ item: input.value });
  wrapper.appendChild(check);
  wrapper.appendChild(list);

  todo.appendChild(wrapper);

  input.value = '';
};

const refresh = () => {
  const data = localStorage.getItem('data');

  const parsed = JSON.parse(data);

  parsed.forEach((value) => {
    const list = document.createElement('input');
    const check = document.createElement('input');
    const wrapperCheck = document.createElement('div');
    const wrapper = document.createElement('div');

    check.type = 'checkbox';
    wrapper.classList.add('wrapper');
    list.classList.add('list');
    wrapperCheck.classList.add('wrapperCheck');
    check.classList.add('check');

    check.addEventListener('change', () => {
      const bool = check.checked;

      if (bool) {
        list.style.textDecoration = 'line-through';
        todo.removeChild(wrapper);

        wrapperCheck.appendChild(check);
        wrapperCheck.appendChild(list);
        todo.prepend(wrapperCheck);
      } else {
        list.style.textDecoration = 'none';

        todo.removeChild(wrapperCheck);

        wrapper.appendChild(check);
        wrapper.appendChild(list);
        todo.appendChild(wrapper);
      }
    });
    list.value = value.item;

    todo.appendChild(wrapper);
    wrapper.appendChild(check);
    wrapper.appendChild(list);
  });
};

window.onload = refresh;

export default list;