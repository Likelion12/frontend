import React from "react";
import SearchBar from "./components/SearchBar";
import RegistrationForm from "./components/RegistrationForm";
import CardList from "./components/CardList";
import { Link } from "react-router-dom";
import "./CrewDetail.css";

const CrewDetail = () => {
  return (
    <div>
      <SearchBar />
      <Link to="/Crew">
        <button className="Crew-button">크루 등록</button>
      </Link>
      <div className="main-content">
        <RegistrationForm />
        <CardList />
      </div>
    </div>
  );
};

export default CrewDetail;
