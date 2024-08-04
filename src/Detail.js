// Detail.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const Detail = ({ token }) => {
  const [data, setData] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const socialringId = queryParams.get("socialringId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/socialring?socialringId=${socialringId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token, socialringId]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>{data.socialringName}</h2>
      <img
        src={data.socialringImg || "basic.jpg"}
        alt={data.socialringName}
        className="img-fluid"
      />
      <p>일자: {data.socialringDate}</p>
      <p>장소: {data.facilityName}</p>
      <p>가격: {data.socialringCost}원</p>
      <p>정원: {data.totalRecruits}</p>
      <h3>멤버 정보</h3>
      <div>
        {data.members.map((member, index) => (
          <img
            key={index}
            src={member.memberImg || "basic.jpg"}
            alt={`Member ${index}`}
            className="img-thumbnail"
          />
        ))}
      </div>
      <p>{data.comment}</p>
      <h3>유사한 소셜링</h3>
      <div className="row">
        {data.recommands.map((item, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div className="card">
              <img
                src={item.socialringImg || "basic.jpg"}
                className="card-img-top"
                alt={item.socialringName}
              />
              <div className="card-body">
                <h5 className="card-title">{item.socialringName}</h5>
                <p className="card-text">{item.commentSimple}</p>
                <p className="card-text">일정: {item.socialringDate}</p>
                <p className="card-text">참가비: {item.socialringCost}원</p>
                <p className="card-text">
                  모집 인원: {item.currentRecruits}/{item.totalRecruits}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
