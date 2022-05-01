import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomeView from "./components/HomeView";
import SearchView from "./components/SearchView";

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element={<HomeView />} />
        <Route exact path='/search' element={<SearchView />} />
      </Routes>
    </div>
  );
}

export default App;
