import React from "react";
import Card from "./Card";

const CardList = () => {
  const cards = Array.from({ length: 9 }).map((_, index) => (
    <Card key={index} />
  ));

  return <div className="card-list">{cards}</div>;
};

export default CardList;
