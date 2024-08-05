// Crew.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Crew.css";

const Crew = ({ token }) => {
  const [data, setData] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const crewId = queryParams.get("crewId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/crew?crewId=${crewId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token, crewId]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>{data.crewName}</h2>
      <img
        src={data.crewImg || "basic.jpg"}
        alt={data.crewName}
        className="img-fluid main-image"
      />
      <div className="event-details">
        <div className="tags">
          <span className="tag">{data.exerciseName}</span>
          <span className="tag">{data.level}</span>
          <span className="tag">{data.gender}</span>
        </div>
        <p>활동 지역: {data.activityRegionName}</p>
        <p>모집 인원: {data.totalRecruits}</p>
        <p>참가비: {data.crewCost}원</p>
      </div>
      <div className="member-info">
        <div className="member-header">멤버 정보</div>
        <div className="members">
          {data.members.map((member, index) => (
            <div className="member" key={index}>
              <img
                src={member.memberImg || "basic.jpg"}
                alt={`Member ${index}`}
                className="img-thumbnail"
              />
            </div>
          ))}
        </div>
        <div className="member-count">
          {data.members.length}/{data.totalRecruits}
        </div>
      </div>
      <p className="event-description">{data.comment}</p>
      <div className="related-events">
        <h3>유사한 크루</h3>
        <div className="related-cards">
          {data.recommends.map((item, index) => (
            <div className="card" key={index}>
              <img
                src={item.crewImg || "basic.jpg"}
                className="card-image"
                alt={item.crewName}
              />
              <div className="card-content">
                <h5 className="card-title">{item.crewName}</h5>
                <p className="card-date">운동 종목: {item.exerciseName}</p>
                <p className="card-cost">참가비: {item.crewCost}원</p>
                <p className="card-participants">
                  모집 인원: {item.currentRecruits}/{item.totalRecruits}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crew;
