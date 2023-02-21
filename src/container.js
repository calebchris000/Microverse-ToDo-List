import Reload from './reload.png';

const header = document.querySelector('.header');
const clear = document.querySelector('.clear-link');

const refresh = () => {
  window.location.reload();
};

export const generateElements = () => {
  const headerWrapper = document.createElement('div');
  const headerText = document.createElement('h3');
  const reload = document.createElement('img');

  headerWrapper.classList.add('headerWrapper');
  headerText.classList.add('headerText');
  reload.classList.add('reload');

  headerText.textContent = "Today's To Do";
  reload.src = Reload;
  reload.onclick = refresh;

  headerWrapper.appendChild(headerText);
  headerWrapper.appendChild(reload);
  header.appendChild(headerWrapper);

  clear.textContent = 'Clear Completed';
};

export default generateElements;