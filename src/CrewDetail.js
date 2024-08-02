import React from "react";
import SearchBar from "./components/SearchBar";
import CrewFilter from "./components/CrewFilter";
import CardList from "./components/CardList";
import { Link } from "react-router-dom";
import "./CrewDetail.css";

const CrewDetail = () => {
  return (
    <div>
      <SearchBar />
      <Link to="/crew-registration">
        <button className="Crew-button">크루 등록</button>
      </Link>

      <div className="main-content">
        <CrewFilter />
        <CardList />
      </div>
    </div>
  );
};

export default CrewDetail;
