import Delete from "./delete.svg";
import { load } from "./generateList.js";
const todo = document.querySelector(".todo-list");

const menuItems = (list, img, collectionMenu, count) => {
  list.disabled = !list.disabled;

  const trashCan = document.createElement("img");
  trashCan.classList.add("trashcan");
  trashCan.src = Delete;
  collectionMenu.removeChild(img);
  collectionMenu.appendChild(trashCan);

  trashCan.addEventListener("click", () => {
    let data = JSON.parse(localStorage.getItem("data"));

    let filtered = data.filter((x) => x.index !== count);
    todo.innerHTML = "";
    filtered.forEach((item) => {
      load(item, item.text);
    });

    localStorage.setItem("data", JSON.stringify(filtered));
  });
};

export default menuItems;
