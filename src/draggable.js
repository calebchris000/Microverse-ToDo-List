import Sortable from 'sortablejs';

const items = document.querySelector('.todo-list');

const draggable = new Sortable(items, {
  animation: 150,
});

export default draggable;
// const allOf = document.querySelectorAll(".wrapper");

// let dragged = null;

// const dragStart = (event) => {
//   dragged = event.target;

//   dragged.classList.add("red");
// };

// const dragOver = (event) => {
//   event.preventDefault();
//   dragged.classList.add("red");
// }

// const dragLeave = (event) => {
//   dragged.classList.remove("red");
// };

// items.addEventListener("dragstart", dragStart);
// // items.addEventListener("dragover", dragOver);
// // items.addEventListener("dragleave", dragLeave);

// allOf.forEach((item) => {
// item.addEventListener("dragover", dragOver);
// item.addEventListener("dragleave", dragLeave);

// })