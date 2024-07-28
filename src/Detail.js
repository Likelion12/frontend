import React, { useState, useEffect } from "react";
import "./Detail.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import members from "./membersData"; // 멤버 데이터 가져오기

const Detail = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=18ffd1f93edc99fbc8ddb6cdab0f231c&autoload=false`;
    script.async = true;
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.566535, 126.97796919999996), // 예시: 서울
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        setMap(map);
      });
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div className="detail-page">
      <div className="content-container">
        <div className="main-content">
          <h1>한강 주말 러닝 3KM</h1>
          <div className="event-details">
            <img
              src="/path/to/your/main-image.jpg"
              alt="러닝 이미지"
              className="main-image"
            />
            <div className="event-info">
              <div className="tags">
                <span className="tag">러닝</span>
                <span className="tag">초급</span>
                <span className="tag">무료</span>
              </div>
              <p>날짜: 2024.07.21(일)</p>
              <Calendar className="calendar" />
              <p>장소: 뚝섬한강공원</p>
              <div
                id="map"
                className="map"
                style={{ width: "100%", height: "300px", margin: "20px 0" }}
              ></div>
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
        </div>
        <div className="related-events">
          <h3>'한강 주말 러닝 3km'와 유사한 소셜링</h3>
          <div className="related-cards">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="card">
                  <img
                    src="/path/to/your/card-image.jpg"
                    alt="소셜링 이미지"
                    className="card-image"
                  />
                  <div className="card-content">
                    <p className="card-title">중랑천 러닝 3km</p>
                    <p className="card-date">2024.07.21(일)</p>
                    <p className="card-location">장소: 중랑천</p>
                    <p className="card-cost">무료</p>
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
