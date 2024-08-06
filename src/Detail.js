import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./Detail.css"; // 필요한 CSS 파일

const Detail = ({ token }) => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/crew?crewId=${id}`, {
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
  }, [token, id]);

  const handleRegisterClick = async () => {
    try {
      const response = await axios.post(`/socialring/join`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          socialringName: data.crewName,
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

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="detail">
        <h1>{data.crewName}</h1>
        <div className="tags">
          <span className="tag">런닝</span>
          <span className="tag">초급</span>
          <span className="tag">무료</span>
        </div>
        <img src={data.crewImg || "placeholder.jpg"} alt={data.crewName} />
        <p>일자: {data.crewDate}</p>
        <p>장소: {data.facilityName}</p>
        <p>가격: {data.crewCost}</p>
        <p>정원: {data.totalRecruits}</p>
        <div className="member-info">
          <h3>멤버 정보</h3>
          <div className="members">
            {data.members.map((member, index) => (
              <img
                key={index}
                src={member.memberImg || "placeholder.jpg"}
                alt={`Member ${index}`}
              />
            ))}
          </div>
          <p>{`${data.members.length}/${data.totalRecruits}`}</p>
        </div>
        <p>{data.comment}</p>
        <button className="register-button" onClick={handleRegisterClick}>
          등록하기
        </button>
        {message && <p>{message}</p>}
        <div className="related-events">
          <h3>관련 소셜링</h3>
          <div className="card-list-container">
            <div className="card-list">
              {data.recommends.map((recommend, index) => (
                <div className="card" key={index}>
                  <img
                    src={recommend.crewImg || "placeholder.jpg"}
                    alt={recommend.crewName}
                  />
                  <h4>{recommend.crewName}</h4>
                  <p>일자: {recommend.crewDate}</p>
                  <p>장소: {recommend.facilityName}</p>
                  <p>가격: {recommend.crewCost}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
