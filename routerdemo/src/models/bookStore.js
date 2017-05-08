
import {observable, useStrict, action} from "mobx";

class BookStore {


  @observable _books = [];
  
  constructor() {
    this.fetchBooks();
  }
  get books() {
    return this._books;
  }

  getBook(id) {
    return this._books.filter((book) => {
      return book.id === Number(id);
    })[0];
  }

  fetchBooks = () => {
    fetch("http://localhost:7777/books")
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        this._books = response;
        console.log("Got books from server");
      })
  }
}

let store = new BookStore();

window.store = store;

export default store;