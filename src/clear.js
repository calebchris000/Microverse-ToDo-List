const todo = document.querySelector('.todo-list');

export const clearComplete = () => {
  const wrapperChecks = todo.querySelectorAll('.wrapperCheck');

  wrapperChecks.forEach((item) => {
    item.innerHTML = '';
  });
};

export default clearComplete;
