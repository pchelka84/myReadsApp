import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomeView from "./HomeView";
import SearchView from "./SearchView";

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
