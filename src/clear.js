import SaveData from './save.js';

const todo = document.querySelector('.todo-list');

const newSave = new SaveData();
export const clearComplete = () => {
  const wrapperChecks = todo.querySelectorAll('.wrapperCheck');

  wrapperChecks.forEach((item) => {
    item.remove();

    const get = JSON.parse(localStorage.getItem('data'));

    const cleaned = get.filter((x) => x.checked !== true);
    newSave.add(...cleaned);
  });
};

export default clearComplete;
