import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "./MapPage.css";

const MapPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [deadlineImminent, setDeadlineImminent] = useState([]);
  const [hotCrew, setHotCrew] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/main", {
          headers: {
            Authorization: `Bearer YOUR_AUTHORIZATION_TOKEN`, // Replace with your token
          },
        });
        setDeadlineImminent(response.data.deadline_imminent);
        setHotCrew(response.data.hot_crew);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
            {deadlineImminent.map((event, index) => (
              <div key={index} className="card">
                <img
                  src={
                    event.socialring_img ||
                    "https://via.placeholder.com/261x261"
                  }
                  alt={event.socialring_name}
                />
                <div className="card-content">
                  <span>{event.socialring_name}</span>
                  <span>
                    {new Date(event.socialring_date).toLocaleDateString()}
                  </span>
                  <p>{event.comment_simple}</p>
                </div>
              </div>
            ))}
          </div>
          <h2>인기 크루</h2>
          <div className="cards">
            {hotCrew.map((crew, index) => (
              <div key={index} className="card">
                <img
                  src={crew.crew_img || "https://via.placeholder.com/261x261"}
                  alt={crew.crew_name}
                />
                <div className="card-content">
                  <span>{crew.crew_name}</span>
                  <p>{crew.comment_simple}</p>
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
