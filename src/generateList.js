import SaveData from "./save.js";

const input = document.getElementById("input");
const todo = document.querySelector(".todo-list");

const newSave = new SaveData();

// * Changes the boolean property based on the checked input event
const updateBoolean = (i) => {
  let get = JSON.parse(localStorage.getItem("data"));

  get.forEach((item) => {
    if (item.index == i) {
      item.checked = !item.checked;
    }
    
  });

  localStorage.setItem("data", JSON.stringify(get));
};

// * Initialization of index property
let count = 0;

// * The todolist creation function itself
const load = (object, inp) => {
  count += 1;
  const wrapper = document.createElement("div");
  const wrapperCheck = document.createElement("div");
  const check = document.createElement("input");
  const list = document.createElement("input");

  check.type = "checkbox";

  wrapper.classList.add(`wrapper`);
  wrapper.classList.add(count);
  wrapperCheck.classList.add("wrapperCheck");
  list.classList.add("list");
  check.classList.add("check");
  list.value = inp;

  check.checked = object.checked;
  object.text = inp;
  object.checked = check.checked;
  object.index = count;

  // * On click, event triggered causes the element to move to the wrappercheck
  check.addEventListener("change", () => {
    const bool = check.checked;
    updateBoolean(object.index);
    if (bool) {
      list.style.textDecoration = "line-through";
      todo.removeChild(wrapper);
      wrapperCheck.appendChild(check);
      wrapperCheck.appendChild(list);
      todo.prepend(wrapperCheck);
    } else {
      list.style.textDecoration = "none";
      todo.removeChild(wrapperCheck);
      wrapper.appendChild(check);
      wrapper.appendChild(list);
      todo.appendChild(wrapper);
    }
  });

  // * Saves data to the local storage
  newSave.add(object);

  wrapper.appendChild(check);
  wrapper.appendChild(list);

  todo.appendChild(wrapper);

  input.value = "";
};

// * Initialize the object property
export const list = () => {
  let dataText = {};
  load(dataText, input.value);
};

// * On reload
const refresh = () => {
  const elem = localStorage.getItem("data");

  const parsed = JSON.parse(elem);

  parsed.forEach((item) => {
    load(item, item.text);
  });
};

window.onload = refresh;

export default list;
