import React from "react";

const Card = () => {
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

export default Card;
