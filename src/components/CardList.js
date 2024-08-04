import React from "react";
import { Link } from "react-router-dom";

const Card = ({ index }) => {
  return (
    <div className="card">
      <img src="placeholder.jpg" alt="Placeholder" />
      <div className="card-content">
        <div className="tag">Tag</div>
        <div className="date">Date</div>
        <h3>Title</h3>
        <p>Description</p>
      </div>
    </div>
  );
};

const CardList = () => {
  const cards = Array.from({ length: 9 }).map((_, index) => (
    <Link to={`/detail/${index}`} key={index}>
      <Card index={index} />
    </Link>
  ));

  return <div className="card-list">{cards}</div>;
};

export default CardList;
