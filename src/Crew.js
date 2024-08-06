import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Crew.css";

const Crew = ({ token }) => {
  const { id } = useParams();
  const [crewData, setCrewData] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/crew/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCrewData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, token]);

  const handleRegisterClick = async () => {
    try {
      const response = await axios.post(`/crew/join`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          socialringName: crewData.name,
        },
      });
      if (response.data.code === 1000) {
        setMessage("요청에 성공하였습니다.");
      } else {
        setMessage("요청에 실패하였습니다.");
      }
    } catch (error) {
      setMessage("요청에 실패하였습니다.");
    }
  };

  if (!crewData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="crew-page">
      <div className="crew-page-header">
        <h1>{crewData.name}</h1>
        <div className="tags">
          <span className="tag">{crewData.category}</span>
          <span className="tag">{crewData.level}</span>
          <span className="tag">무료</span>
        </div>
      </div>
      <div className="event-details">
        <img src={crewData.image || "placeholder.jpg"} alt={crewData.name} />
        <p>일자: {crewData.date}</p>
        <p>장소: {crewData.location}</p>
        <p>가격: 무료</p>
        <p>정원: {crewData.totalRecruits}</p>
      </div>
      <div className="member-info">
        <h3 className="member-header">멤버 정보</h3>
        <div className="members">
          {crewData.members.map((member, index) => (
            <div className="member" key={index}>
              <img
                src={member.memberImg || "placeholder.jpg"}
                alt={`Member ${index}`}
              />
            </div>
          ))}
        </div>
        <p className="member-count">{`${crewData.members.length}/${crewData.totalRecruits}`}</p>
      </div>
      <p className="event-description">{crewData.description}</p>
      <button className="register-button" onClick={handleRegisterClick}>
        등록하기
      </button>
      {message && <p>{message}</p>}
      <div className="related-events">
        <h3>관련 소셜링</h3>
        <div className="related-cards">
          {crewData.recommends.map((recommend, index) => (
            <div className="card" key={index}>
              <img
                className="card-image"
                src={recommend.crewImg || "placeholder.jpg"}
                alt={recommend.crewName}
              />
              <div className="card-content">
                <h4 className="card-title">{recommend.crewName}</h4>
                <p className="card-date">일자: {recommend.crewDate}</p>
                <p className="card-location">장소: {recommend.facilityName}</p>
                <p className="card-cost">가격: {recommend.crewCost}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crew;
