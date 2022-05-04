import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const BookShelf = ({ books, shelfName, shelf, updateShelf }) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{shelfName}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {books.map((book, id) => (
            <li key={id}>
              <Book book={book} shelf={shelf} updateShelf={updateShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelfName: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default BookShelf;
