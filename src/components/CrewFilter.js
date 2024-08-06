import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "./CrewFilter.css";

const CrewFilter = () => {
  const [gender, setGender] = useState(null);
  const [level, setLevel] = useState(null);
  const [crewCostMax, setCrewCostMax] = useState(null);
  const [totalRecruitsMax, setTotalRecruitsMax] = useState(null);
  const [results, setResults] = useState([]);

  const handleGenderChange = (event) => setGender(event.target.value);
  const handleLevelChange = (event) => setLevel(event.target.value);
  const handleCostChange = (event) => setCrewCostMax(event.target.value);
  const handleRecruitsChange = (event) =>
    setTotalRecruitsMax(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestParams = {
      gender,
      level,
      crewCostMin: null,
      crewCostMax: crewCostMax ? parseInt(crewCostMax) : null,
      totalRecruitsMin: 0,
      totalRecruitsMax: totalRecruitsMax ? parseInt(totalRecruitsMax) : null,
    };

    try {
      const response = await axios.get("/crew/search/filter", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        params: requestParams,
      });

      if (response.data.code === 1000) {
        setResults(response.data.result);
        alert("요청에 성공하였습니다.");
      }
    } catch (error) {
      console.error("요청 실패:", error);
      alert("요청 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="crew-filter">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formLevel">
          <Form.Label>참가자 수준</Form.Label>
          <div>
            <Form.Check
              type="checkbox"
              label="C"
              value="C"
              onChange={handleLevelChange}
            />
            <Form.Check
              type="checkbox"
              label="B"
              value="B"
              onChange={handleLevelChange}
            />
            <Form.Check
              type="checkbox"
              label="A"
              value="A"
              onChange={handleLevelChange}
            />
            <Form.Check
              type="checkbox"
              label="S"
              value="S"
              onChange={handleLevelChange}
            />
          </div>
        </Form.Group>
        <hr />
        <Form.Group className="mb-3" controlId="formGender">
          <Form.Label>성별</Form.Label>
          <div>
            <Form.Check
              type="checkbox"
              label="U"
              value="U"
              onChange={handleGenderChange}
            />
            <Form.Check
              type="checkbox"
              label="M"
              value="M"
              onChange={handleGenderChange}
            />
            <Form.Check
              type="checkbox"
              label="F"
              value="F"
              onChange={handleGenderChange}
            />
          </div>
        </Form.Group>
        <hr />
        <Form.Group className="mb-3" controlId="formCost">
          <Form.Label>비용</Form.Label>
          <Form.Control
            type="text"
            placeholder="참가비용최대값"
            onChange={handleCostChange}
          />
        </Form.Group>
        <hr />
        <Form.Group className="mb-3" controlId="formCapacity">
          <Form.Label>정원</Form.Label>
          <Form.Control
            type="text"
            placeholder="참가정원최대값"
            onChange={handleRecruitsChange}
          />
        </Form.Group>
        <Button className="filter-button" variant="primary" type="submit">
          필터 적용
        </Button>
      </Form>
      {results.length > 0 && (
        <div className="results">
          {results.map((crew) => (
            <div key={crew.crewId} className="crew-card">
              <img src={crew.crewImg} alt={crew.crewName} />
              <h5>{crew.crewName}</h5>
              <p>{crew.commentSimple}</p>
              <p>비용: {crew.crewCost}</p>
              <p>지역: {crew.activityRegionName}</p>
              <p>운동: {crew.exerciseName}</p>
              <p>
                모집 인원: {crew.currentRecruits}/{crew.totalRecruits}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CrewFilter;
