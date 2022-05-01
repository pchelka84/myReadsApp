import React from "react";
import Book from "./Book";

const BookShelf = ({ books, shelfName, shelf }) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{shelfName}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {books.map((book, id) => (
            <li key={id}>
              <Book book={book} shelf={shelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;