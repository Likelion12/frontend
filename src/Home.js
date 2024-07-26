import React from "react";
import SearchBar from "./components/SearchBar.js";
import RegistrationForm from "./components/RegistrationForm.js";
import CardList from "./components/CardList";

const Home = () => {
  return (
    <div>
      <SearchBar />
      <div className="main-content">
        <RegistrationForm />
        <CardList />
      </div>
    </div>
  );
};

export default Home;
