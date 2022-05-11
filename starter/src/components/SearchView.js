import { Link } from "react-router-dom";
import React, { useState } from "react";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import PropTypes from "prop-types";

const SearchView = ({ books, updateShelf }) => {
  const [query, setQuery] = useState("");
  const [booksFound, setBooksFound] = useState([]);

  const updateQuery = (query) => {
    setQuery(query);
    searchBooksCollection(query);
  };

  const searchBooksCollection = (query) => {
    if (query) {
      BooksAPI.search(query).then((searchedBooks) => {
        searchedBooks.error ? setBooksFound([]) : setBooksFound(searchedBooks);
      });
    } else {
      setBooksFound([]);
    }
  };

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link className='close-search' to='/'>
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title, author, or ISBN'
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {query &&
            booksFound.map((bookFound) => {
              let shelf = "none";

              books.map((book) =>
                book.id === bookFound.id ? (shelf = book.shelf) : ""
              );

              return (
                <li key={bookFound.id}>
                  <Book
                    book={bookFound}
                    shelf={shelf}
                    updateShelf={updateShelf}
                  />
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
};

SearchView.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default SearchView;
