import React from "react";
import "./App.css";

import HomeView from "./HomeView";
import SearchView from "./SearchView";

function App() {
  return (
    <div className='app'>
      <HomeView />
      <SearchView />
    </div>
  );
}

export default App;
