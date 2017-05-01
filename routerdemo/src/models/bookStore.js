//DataStore for this Demo
class BookStore { 

  /*book = function(id, title, info, moreInfo) {
    this.id = id;
    this.title = title;
    this.info = info;
    this.moreInfo = moreInfo;
  }*/

  constructor() {
    this.fetchBooks();
    this._books = [];
  }
  
  get books(){
    return this._books;
  }

  fetchBooks(){
    fetch("http://localhost:7777/books")
    .then((response)=> {
      return response.json()
    }).
    then((response) => {
      this._books = response;
      console.log("------------- " + JSON.stringify(this._books) + " ---------------");
    })
  }
  
  /*add = function(book){
    id = netxId();
    this._books.push(id, book);
  } 
  netxId = function(){
    var netxId = 0;
    return netxId++;
  }
  remove = function(book){
    this._books.remove(book);
  }
  edit = function(book){
    this._books.remove(book)
    this._books.push(book)
  }*/

}

export default new BookStore();