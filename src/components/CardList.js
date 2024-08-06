import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "../index.css"; // 필요에 따라 CSS 파일을 수정합니다.

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
  const cardsPerPage = 9;
  const totalCards = 50; // 예시로 총 50개의 카드를 생성
  const [currentPage, setCurrentPage] = useState(0);

  const cards = Array.from({ length: totalCards }).map((_, index) => (
    <Link to={`/detail/${index}`} key={index}>
      <Card index={index} />
    </Link>
  ));

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * cardsPerPage;
  const currentCards = cards.slice(offset, offset + cardsPerPage);

  return (
    <div className="card-list-container">
      <div className="card-list">{currentCards}</div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={Math.ceil(totalCards / cardsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default CardList;
