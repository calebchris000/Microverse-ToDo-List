const todo = document.querySelector('.todo-list');

export const clearComplete = () => {
  const wrapperChecks = todo.querySelectorAll('.wrapperCheck');

  wrapperChecks.forEach((item) => {
    item.remove()
  });

  let get = JSON.parse(localStorage.getItem("data"))

  let cleaned = get.filter(x=> x.checked !== true);
  localStorage.setItem('data', JSON.stringify(cleaned))
};

export default clearComplete;
