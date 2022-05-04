import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import PropTypes from "prop-types";

const HomeView = ({ books, updateShelf }) => {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <BookShelf
          shelfName='Currently Reading'
          shelf='currentlyReading'
          books={books.filter((book) => book.shelf === "currentlyReading")}
          updateShelf={updateShelf}
        />
        <BookShelf
          shelfName='Want to Read'
          shelf='wantToRead'
          books={books.filter((book) => book.shelf === "wantToRead")}
          updateShelf={updateShelf}
        />
        <BookShelf
          shelfName='Read'
          shelf='read'
          books={books.filter((book) => book.shelf === "read")}
          updateShelf={updateShelf}
        />
      </div>
      <Link className='open-search' to='/search'>
        Add a book
      </Link>
    </div>
  );
};

HomeView.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default HomeView;
