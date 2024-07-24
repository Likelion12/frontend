import React from "react";
import Header from "./components/Header.js";
import SearchBar from "./components/SearchBar.js";
import RegistrationForm from "./components/RegistrationForm.js";
import CardList from "./components/CardList";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <div className="main-content">
        <RegistrationForm />
        <CardList />
      </div>
    </div>
  );
};

export default Home;
