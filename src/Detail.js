import React from "react";
import { useParams } from "react-router-dom";
import Header from "./components/Header.js";

const Detail = () => {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <div className="detail">
        <img src="placeholder.jpg" alt="Placeholder" />
        <h2>한강 주말 러닝 3KM</h2>
        <p>일자: 2024.07.21(일)</p>
        <p>장소: 장소</p>
        <p>가격: 무료</p>
        <p>정원: 8</p>
        <div className="member-info">
          <h3>멤버 정보</h3>
          <div className="members">
            {Array.from({ length: 6 }).map((_, index) => (
              <span key={index}>😃</span>
            ))}
          </div>
          <p>6/8</p>
        </div>
        <p>부차가 가끔 수인 ...</p>
        <div className="related-events">
          <h3>관련 소셜링</h3>
          <div className="card-list">
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="card" key={index}>
                <img src="placeholder.jpg" alt="Placeholder" />
                <h4>중앙천 런닝 3km</h4>
                <p>일자: 2024.07.21(일)</p>
                <p>장소: 장소</p>
                <p>가격: 무료</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
