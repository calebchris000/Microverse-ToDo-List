import { load } from './generateList.js';

// * On reload
const refresh = () => {
  const elem = localStorage.getItem('data');
  const parsed = JSON.parse(elem);

  parsed.forEach((item) => {
    load(item, item.text);
  });
};

export default refresh;
