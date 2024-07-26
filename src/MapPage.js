import React from "react";
import { Link } from "react-router-dom";
import "./MapPage.css";

const MapPage = () => {
  return (
    <div className="map-page">
      <header className="header">
        <div className="logo">DoGether!</div>
        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                소셜링
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                크루
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                플레이스
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/map">
                지도
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                마이페이지
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                로그인
              </Link>
            </li>
          </ul>
        </nav>
        <div className="search-icon">🔍</div>
      </header>
      <div className="map-container">
        <h2>지금 당신 근처의 운동을 즐겨보세요!</h2>
        <div className="selection-container">
          <div className="region-selection">
            <h3>지역 선택</h3>
            <img
              src="/path/to/your/map-image.png"
              alt="지역 지도"
              className="map-image"
            />
          </div>
          <div className="date-selection">
            <h3>날짜 선택</h3>
            <input type="date" className="date-picker" />
          </div>
          <button className="search-button">검색하기</button>
        </div>
        <ResultSection title="마감 임박" />
        <ResultSection title="인기 크루" />
        <ResultSection title="마감 임박" />
      </div>
    </div>
  );
};

const ResultSection = ({ title }) => {
  return (
    <section className="result-section">
      <h3>{title}</h3>
      <div className="card-container">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="card">
              <div className="card-image">
                <img src="/path/to/your/card-image.jpg" alt="운동 이미지" />
                <div className="card-tag">광진구</div>
                <div className="card-date">2024.07.24</div>
                <div className="card-cost">무료</div>
              </div>
              <div className="card-content">
                <p className="card-title">중랑천 러닝 3km</p>
                <p className="card-description">
                  중랑천을 따라 걷는 러닝 초보 모집!
                </p>
                <p className="card-participants">인원 5/10</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default MapPage;
