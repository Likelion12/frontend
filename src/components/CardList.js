import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const CardList = () => {
  const cards = Array.from({ length: 9 }).map((_, index) => (
    <Link to={`/detail/${index}`} key={index}>
      <Card />
    </Link>
  ));

  return <div className="card-list">{cards}</div>;
};

export default CardList;
