import SaveData from "./save.js";
import Menu from "./menu.svg";
import menuItems from "./menuItems.js";
import updateBoolean from "./updateBoolean.js";
import refresh from "./refresh.js";

const input = document.getElementById("input");
const todo = document.querySelector(".todo-list");

const newSave = new SaveData();

// * Initialization of index property

let count = 0;

// * Changes the text decoration of the element based on the check state

const change = (
  list,
  check,
  todo,
  wrapper,
  wrapperCheck,
  text,
  collectionMenu,
  img
) => {
  list.style.textDecoration = text;
  todo.removeChild(wrapper);
  wrapperCheck.appendChild(check);
  collectionMenu.appendChild(list);
  collectionMenu.appendChild(img);
  wrapperCheck.appendChild(collectionMenu);
  todo.prepend(wrapperCheck);
};



// * The todolist creation function itself
export const load = (object, inp) => {
  count += 1;
  const wrapper = document.createElement("div");
  const wrapperCheck = document.createElement("div");
  const check = document.createElement("input");

  const collectionMenu = document.createElement("div");

  const list = document.createElement("input");
  const img = document.createElement("img");
  img.src = Menu;

  check.type = "checkbox";

  wrapper.classList.add("wrapper");
  wrapper.classList.add(count);
  wrapperCheck.classList.add("wrapperCheck");

  collectionMenu.classList.add(".collectionMenu");
  img.classList.add("menu");
  list.classList.add("list");
  check.classList.add("check");

  wrapper.setAttribute("draggable", true);
  list.setAttribute("draggable", false);
  check.setAttribute("draggable", false);

  list.value = inp;
  list.disabled = true;
  check.checked = object.checked;
  object.text = inp;
  object.checked = check.checked;
  object.index = count;

  img.addEventListener("click", () =>
    menuItems(list, img, collectionMenu, count)
  );

  // * On click, event triggered causes the element to move to the wrappercheck

  check.addEventListener("change", () => {
    const bool = check.checked;
    updateBoolean(object.index);
    if (bool) {
      change(
        list,
        check,
        todo,
        wrapper,
        wrapperCheck,
        "line-through",
        collectionMenu,
        img
      );
    } else {
      //* Returns back to the wrapper element, so the
      //* WrapperCheck and wrapper is reversed to achieve that
      change(
        list,
        check,
        todo,
        wrapperCheck,
        wrapper,
        "none",
        collectionMenu,
        img
      );
    }
  });

  // * Saves data to the local storage

  newSave.add(object);
  collectionMenu.appendChild(list);
  collectionMenu.appendChild(img);
  wrapper.appendChild(check);
  wrapper.appendChild(collectionMenu);

  todo.appendChild(wrapper);

  input.value = "";

  // * I had this bug that prevents the restored item from being crossed (marked as completed)
  // * So this fixed it.

  if (check.checked || object.checked) {
    change(list, check, todo, wrapperCheck, wrapper, "line-through");
  }
};

// * Initialize the object property
export const list = () => {
  const dataText = {};
  load(dataText, input.value);
};



window.onload = refresh;

export default list;
