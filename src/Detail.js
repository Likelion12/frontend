import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const Detail = ({ token }) => {
  const [data, setData] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get("page");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/socialring/inquiry?page=${page}`,
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
  }, [token, page]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>소셜링 조회</h2>
      <div className="row">
        {data.map((item, index) => (
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
                <p className="card-text">지역: {item.activityRegionName}</p>
                <p className="card-text">운동 종류: {item.exerciseName}</p>
                <p className="card-text">레벨: {item.level}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
