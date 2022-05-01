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

  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <BookShelf
          shelf='currentlyReading'
          books={books.filter((book) => book.shelf === "currentlyReading")}
        />
        <BookShelf
          shelf='wantToRead'
          books={books.filter((book) => book.shelf === "wantToRead")}
        />
        <BookShelf
          shelf='read'
          books={books.filter((book) => book.shelf === "read")}
        />
      </div>
      <Link className='open-search' to='/search'>
        Add a book
      </Link>
    </div>
  );
};

export default HomeView;
