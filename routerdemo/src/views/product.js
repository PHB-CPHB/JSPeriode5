import React from "react";
import {Link} from "react-router";
import {observer} from "mobx-react";


@observer
export default class Product extends React.Component {
  constructor(props) {
    super(props);
    //This will read books from the server each time user navigates to
    //The product page (a simple way to ensure "updated data")
    this.props.route.bookStore.fetchBooks();
  }

  render() {
    const books = this.props.route.bookStore.books;
    return (
      <div>
        <h3>All our great books </h3>
        <ul>
          {books.map((book) => <li key={book.id}>
            {book.title} <Link to={`products/details/${book.id}`}>(details)</Link></li>)}
        </ul>
      </div>
    )
  }
}
