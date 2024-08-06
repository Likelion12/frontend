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
      <Form>
        <Form.Group className="mb-3" controlId="formLevel">
          <Form.Label>참가자 수준</Form.Label>
          <div>
            <Form.Check type="checkbox" label="입문" />
            <Form.Check type="checkbox" label="초급" />
            <Form.Check type="checkbox" label="중급" />
            <Form.Check type="checkbox" label="고급" />
          </div>
        </Form.Group>
        <hr />
        <Form.Group className="mb-3" controlId="formGender">
          <Form.Label>성별</Form.Label>
          <div>
            <Form.Check type="checkbox" label="상관없음" />
            <Form.Check type="checkbox" label="남성" />
            <Form.Check type="checkbox" label="여성" />
          </div>
        </Form.Group>
        <hr />
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>가격</Form.Label>
          <div className="d-flex align-items-center">
            <Form.Control type="text" placeholder="최소 가격" />
            <span className="mx-2">~</span>
            <Form.Control type="text" placeholder="최대 가격" />
          </div>
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
        <Button variant="primary" type="submit">
          필터 적용
        </Button>
      </Form>
    </div>
  );
};

export default CrewFilter;
