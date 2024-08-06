import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Link를 import
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const Main = ({ token }) => {
  const [data, setData] = useState({ deadline_imminent: [], hot_crew: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/main", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  const renderCards = (items, type) => {
    if (items.length === 0) {
      return (
        <div className="col-md-4 mb-3">
          <div className="card">
            <img
              src="basic.jpg"
              className="card-img-top"
              alt="No Data Available"
            />
            <div className="card-body">
              <h5 className="card-title">No Data Available</h5>
              <p className="card-text">데이터가 없습니다.</p>
            </div>
          </div>
        </div>
      );
    }

    return items.map((item, index) => (
      <div className="col-md-4 mb-3" key={index}>
        <div className="card">
          {/* Link로 Detail 페이지로 이동 */}
          <Link to={`/detail?socialringId=${item.socialring_id}`}>
            <img
              src={item[`${type}_img`] || "basic.jpg"}
              className="card-img-top"
              alt={item[`${type}_name`]}
            />
            <div className="card-body">
              <h5 className="card-title">{item[`${type}_name`]}</h5>
              <p className="card-text">{item.comment_simple}</p>
              {type === "socialring" && (
                <>
                  <p className="card-text">일정: {item.socialring_date}</p>
                  <p className="card-text">모집 인원: {item.total_recruits}</p>
                  <p className="card-text">참가비: {item.socialring_cost}원</p>
                </>
              )}
              {type === "crew" && (
                <>
                  <p className="card-text">모집 인원: {item.total_recruits}</p>
                  <p className="card-text">참가비: {item.crew_cost}원</p>
                </>
              )}
            </div>
          </Link>
          {/* Link로 Detail 페이지로 이동 */}
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      <h2>내 주변 맞춤 운동</h2>
      <div className="row">
        {renderCards(data.deadline_imminent, "socialring")}
      </div>
      <h2>마감 임박</h2>
      <div className="row">{renderCards(data.hot_crew, "crew")}</div>
    </div>
  );
};

export default Main;
