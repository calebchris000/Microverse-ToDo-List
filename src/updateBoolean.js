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

export default updateBoolean;