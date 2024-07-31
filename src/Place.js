import React from "react";
import "./Place.css";

const Place = () => {
  return (
    <div className="place-page">
      <h1 className="place-title">광진구 건국대학교 테니스장</h1>
      <div className="intro-image">
        <img src="https://via.placeholder.com/1235x505" alt="테니스장 이미지" />
      </div>
      <div className="facility-description">시설 안내</div>
      <div className="facility-details">
        <h3>시설 소개글</h3>
        <div className="map-container">
          <div className="map-placeholder">지도 위치</div>
        </div>
        <h3>장소 안내</h3>
        <p>주소 : 서울시 광진구 아차산로 1길 100</p>
        <p>전화번호 : 010-1234-5678</p>
      </div>
      <div className="reviews">
        <h3>후기</h3>
        <div className="review-cards">
          <div className="review-card">
            <p>
              광진구에서 제일 깔끔한
              <br />
              테니스장이라고 생각하고,
              <br />
              계속 방문 예정입니다!
            </p>
            <p className="review-author">광진구시민</p>
          </div>
          <div className="review-card">
            <p>
              광진구에서 제일 깔끔한
              <br />
              테니스장이라고 생각하고,
              <br />
              계속 방문 예정입니다!
            </p>
            <p className="review-author">광진구시민</p>
          </div>
          <div className="review-card">
            <p>
              광진구에서 제일 깔끔한
              <br />
              테니스장이라고 생각하고,
              <br />
              계속 방문 예정입니다!
            </p>
            <p className="review-author">광진구시민</p>
          </div>
        </div>
      </div>
      <div className="related-events">
        <h3>“[시설 정보]”에서 진행 중인 인기 공고</h3>
        <div className="related-cards">
          <div className="card">
            <img
              src="https://via.placeholder.com/261x261"
              alt="소셜링 이미지"
              className="card-image"
            />
            <div className="card-content">
              <p className="card-title">중랑천 런닝 3km</p>
              <p className="card-date">2024.07.21(일)</p>
              <p className="card-location">장소: 중랑천</p>
              <p className="card-cost">무료</p>
              <p className="card-participants">인원 5/10</p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://via.placeholder.com/261x261"
              alt="소셜링 이미지"
              className="card-image"
            />
            <div className="card-content">
              <p className="card-title">중랑천 런닝 3km</p>
              <p className="card-date">2024.07.21(일)</p>
              <p className="card-location">장소: 중랑천</p>
              <p className="card-cost">무료</p>
              <p className="card-participants">인원 5/10</p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://via.placeholder.com/261x261"
              alt="소셜링 이미지"
              className="card-image"
            />
            <div className="card-content">
              <p className="card-title">중랑천 런닝 3km</p>
              <p className="card-date">2024.07.21(일)</p>
              <p className="card-location">장소: 중랑천</p>
              <p className="card-cost">무료</p>
              <p className="card-participants">인원 5/10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;
