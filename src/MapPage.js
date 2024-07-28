import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./MapPage.css";
import "leaflet/dist/leaflet.css";

const MapPage = () => {
  return (
    <div className="map-page">
      <div className="map-container">
        <h2>지금 당신 근처의 운동을 즐겨보세요!</h2>
        <div className="selection-container">
          <div className="region-selection">
            <h3>지역 선택</h3>
            <MapContainer
              center={[37.5665, 126.978]}
              zoom={12}
              style={{ height: "400px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[37.5665, 126.978]}>
                <Popup>서울</Popup>
              </Marker>
            </MapContainer>
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
