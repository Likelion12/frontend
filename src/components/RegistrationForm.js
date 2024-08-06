import React, { useState } from "react";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import "./CrewFilter.css";

const RegistrationForm = () => {
  const [exerciseName, setExerciseName] = useState("");
  const [gender, setGender] = useState("");
  const [level, setLevel] = useState("");
  const [socialringCostMax, setSocialringCostMax] = useState("");
  const [totalRecruitsMax, setTotalRecruitsMax] = useState("");
  const [results, setResults] = useState([]);

  const handleExerciseChange = (event) => setExerciseName(event.target.value);
  const handleGenderChange = (event) => setGender(event.target.value);
  const handleLevelChange = (event) => setLevel(event.target.value);
  const handleCostChange = (event) => setSocialringCostMax(event.target.value);
  const handleRecruitsChange = (event) =>
    setTotalRecruitsMax(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestParams = {
      exerciseName,
      gender,
      level: level ? level : null,
      socialringCostMin: 0,
      socialringCostMax: socialringCostMax ? parseInt(socialringCostMax) : null,
      totalRecruitsMin: null,
      totalRecruitsMax: totalRecruitsMax ? parseInt(totalRecruitsMax) : null,
    };

    try {
      const response = await axios.get("/socialring/search/filter", {
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
    <div className="registration-form">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formSports">
          <Form.Label>운동 종목</Form.Label>
          <div>
            <Form.Check
              type="checkbox"
              label="축구"
              onChange={handleExerciseChange}
            />
            <Form.Check
              type="checkbox"
              label="농구"
              onChange={handleExerciseChange}
            />
            <Form.Check
              type="checkbox"
              label="런닝"
              onChange={handleExerciseChange}
            />
            <Form.Check
              type="checkbox"
              label="풋살"
              onChange={handleExerciseChange}
            />
            <Form.Check
              type="checkbox"
              label="야구"
              onChange={handleExerciseChange}
            />
            <Form.Check
              type="checkbox"
              label="테니스"
              onChange={handleExerciseChange}
            />
            <Form.Check
              type="checkbox"
              label="배구"
              onChange={handleExerciseChange}
            />
            <Form.Check
              type="checkbox"
              label="배드민턴"
              onChange={handleExerciseChange}
            />
            <Form.Check
              type="checkbox"
              label="골프"
              onChange={handleExerciseChange}
            />
            <Form.Check
              type="checkbox"
              label="클라이밍"
              onChange={handleExerciseChange}
            />
          </div>
        </Form.Group>
        <hr />
        <Form.Group className="mb-3" controlId="formLevel">
          <Form.Label>참가자 수준</Form.Label>
          <div>
            <Form.Check
              type="checkbox"
              label="입문"
              onChange={handleLevelChange}
            />
            <Form.Check
              type="checkbox"
              label="초급"
              onChange={handleLevelChange}
            />
            <Form.Check
              type="checkbox"
              label="중급"
              onChange={handleLevelChange}
            />
            <Form.Check
              type="checkbox"
              label="고급"
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
              label="상관없음"
              onChange={handleGenderChange}
            />
            <Form.Check
              type="checkbox"
              label="남성"
              onChange={handleGenderChange}
            />
            <Form.Check
              type="checkbox"
              label="여성"
              onChange={handleGenderChange}
            />
          </div>
        </Form.Group>
        <hr />
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>가격</Form.Label>
          <div className="d-flex align-items-center">
            <Form.Control
              type="text"
              placeholder="최소 가격"
              readOnly
              value="0"
            />
            <span className="mx-2">~</span>
            <Form.Control
              type="text"
              placeholder="최대 가격"
              onChange={handleCostChange}
            />
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
      {results.length > 0 && (
        <Container>
          <Row>
            {results.map((socialring) => (
              <Col key={socialring.socialringId} md={4}>
                <Card className="mb-4">
                  <Card.Img variant="top" src={socialring.socialringImg} />
                  <Card.Body>
                    <Card.Title>{socialring.socialringName}</Card.Title>
                    <Card.Text>{socialring.commentSimple}</Card.Text>
                    <Card.Text>비용: {socialring.socialringCost}</Card.Text>
                    <Card.Text>지역: {socialring.activityRegionName}</Card.Text>
                    <Card.Text>
                      운동 날짜: {socialring.socialringDate}
                    </Card.Text>
                    <Card.Text>
                      모집 인원: {socialring.currentRecruits}/
                      {socialring.totalRecruits}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default RegistrationForm;
