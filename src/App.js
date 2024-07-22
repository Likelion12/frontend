import React from "react";
import Header from "./Header.js";
import SearchBar from "./SearchBar.js";
import RegistrationForm from "./RegistrationForm.js";
import CardList from "./CardList.js";

const App = () => {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <div className="main-content">
        <RegistrationForm />
        <CardList />
      </div>
    </div>
  );
};

export default App;
