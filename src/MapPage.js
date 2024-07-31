import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./MapPage.css";

const MapPage = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="map-page">
      <div className="content-container">
        <h1>지금 당신 근처의 운동을 즐겨보세요!</h1>
        <div className="filters">
          <label>
            지역 선택
            <select>
              <option value="all">전체</option>
              <option value="서울">서울</option>
              <option value="부산">부산</option>
              <option value="대구">대구</option>
            </select>
          </label>
          <label>
            날짜 선택
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </label>
          <button className="search-button">검색하기</button>
        </div>
        <MapContainer
          center={[37.5665, 126.978]}
          zoom={13}
          className="main-map"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
        <div className="popular-list">
          <h2>마감 임박</h2>
          <div className="cards">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="card">
                  <img
                    src="https://via.placeholder.com/261x261"
                    alt="placeholder"
                  />
                  <div className="card-content">
                    <span>중랑천 런닝 3km</span>
                    <span>2024.07.21(일)</span>
                  </div>
                </div>
              ))}
          </div>
          <h2>인기 크루</h2>
          <div className="cards">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="card">
                  <img
                    src="https://via.placeholder.com/261x261"
                    alt="placeholder"
                  />
                  <div className="card-content">
                    <span>중랑천 런닝 3km</span>
                    <span>2024.07.21(일)</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
