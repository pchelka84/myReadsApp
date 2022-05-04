import { Link } from "react-router-dom";
import React, { useState } from "react";

const SearchView = ({ books, updateShelf }) => {
  const [query, setQuery] = useState("");

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
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'></ol>
      </div>
    </div>
  );
};

export default SearchView;
