import React from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "react-calendar/dist/Calendar.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import members from "./membersData"; // 멤버 데이터 가져오기
import "./Detail.css";

// Marker icon 설정
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const Detail = () => {
  return (
    <div className="detail-page">
      <div className="content-container">
        <h1>한강 주말 러닝 3KM</h1>
        <div className="event-details">
          <img
            src="https://via.placeholder.com/448x448"
            alt="러닝 이미지"
            className="main-image"
          />
          <div className="event-info">
            <div className="tags">
              <span className="tag">런닝</span>
              <span className="tag">초급</span>
              <span className="tag">무료</span>
            </div>
            <p>날짜: 2024.07.21(일)</p>
            <p>장소: 뚝섬한강공원</p>
            <Calendar className="calendar" />
            <div className="map-container">
              <MapContainer
                center={[37.566535, 126.97796919999996]}
                zoom={13}
                className="map"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[37.566535, 126.97796919999996]}>
                  <Popup>한강 주말 러닝 3KM 장소</Popup>
                </Marker>
              </MapContainer>
            </div>
            <button className="register-button">등록하기</button>
          </div>
        </div>
        <div className="member-info">
          <div className="member-header">멤버 정보</div>
          <div className="members">
            {members.map((member) => (
              <div key={member.id} className="member">
                <img src={member.image} alt={`${member.name} 이미지`} />
              </div>
            ))}
          </div>
          <p className="member-count">6/8</p>
        </div>
        <p className="event-description">
          불차고 가끔 수인 닭발집에서 막걸리닭발파전오징어볶음 때리는걸 좋아하는
          사람입니다. 젊으신 분 환영, 열심히 뛰시는 분 환영, 친화력 좋으신 분
          환영, 장마철이지만 일요일은비가 안온답니다-!!! 미루던 장거리 lsd
          훈련하기 딱 좋은 시기입니다-!! 몸이 근질근질하셨던 분들-!! 지금
          도전하세요-!!
        </p>
        <div className="related-events">
          <h3>'한강 주말 런닝 3km'와 유사한 소셜링</h3>
          <div className="related-cards">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="card">
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
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
