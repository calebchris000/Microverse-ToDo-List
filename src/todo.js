
export default class Todo {
    constructor(){
        this.books = []
    }

    add(item) {
        this.item = item
        this.books.push(this.item)
    }
}