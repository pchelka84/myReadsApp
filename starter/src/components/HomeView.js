import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import * as BooksAPI from "../BooksAPI";

const HomeView = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

  const updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => BooksAPI.getAll())
      .then((books) => setBooks(books));
  };

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

export default HomeView;
