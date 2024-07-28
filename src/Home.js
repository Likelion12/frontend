import React from "react";
import SearchBar from "./components/SearchBar.js";
import RegistrationForm from "./components/RegistrationForm.js";
import CardList from "./components/CardList";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <SearchBar />
      <Link to="/Social">
        <button className="Social-button">소셜링 등록</button>
      </Link>
      <div className="main-content">
        <RegistrationForm />
        <CardList />
      </div>
    </div>
  );
};

export default Home;
