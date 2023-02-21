export default class SaveData {
  constructor() {
    this.array = [];
  }

  add(data) {
    this.array.push(data);
    const stringified = JSON.stringify(this.array);
    localStorage.setItem('data', stringified);
  }

  restore(item, input) {
    this.item = item;
    const parsed = JSON.parse(this.item);

    parsed.forEach((value) => {
      input.value = value;
    });
  }
}