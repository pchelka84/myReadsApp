import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import * as BooksAPI from "./BooksAPI";

import HomeView from "./components/HomeView";
import SearchView from "./components/SearchView";

function App() {
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
    <div className='app'>
      <Routes>
        <Route
          exact
          path='/'
          element={<HomeView books={books} updateShelf={updateShelf} />}
        />
        <Route exact path='/search' element={<SearchView />} />
      </Routes>
    </div>
  );
}

export default App;
