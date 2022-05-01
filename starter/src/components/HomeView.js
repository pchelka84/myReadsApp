import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

const HomeView = () => {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <BookShelf />
      </div>
      <Link className='open-search' to='/search'>
        Add a book
      </Link>
    </div>
  );
};

export default HomeView;
