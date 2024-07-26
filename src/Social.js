import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import "./Social.css";

const Social = () => {
  const [sportValue, setSportValue] = useState([]);
  const [levelValue, setLevelValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [capacity, setCapacity] = useState(0);

  const sports = [
    "축구",
    "농구",
    "런닝",
    "등산",
    "야구",
    "테니스",
    "배구",
    "배드민턴",
    "골프",
    "클라이밍",
  ];
  const levels = ["입문", "초급", "중급", "고급"];
  const genders = ["상관없음", "남성", "여성"];
  const prices = ["무료", "유료"];

  const handleToggle = (value, setValue, currentValues) => {
    if (currentValues.includes(value)) {
      setValue(currentValues.filter((v) => v !== value));
    } else {
      setValue([...currentValues, value]);
    }
  };

  return (
    <Container fluid className="main-container">
      <Row className="justify-content-center">
        <Col md={8} className="form-container">
          <h4 className="form-title">소셜링 등록</h4>
          <Form>
            <Form.Group controlId="formImage" className="text-center mb-3">
              <Form.Label className="d-block">사진 추가</Form.Label>
              <Button variant="light" className="upload-button">
                사진 추가
              </Button>
            </Form.Group>

            <Form.Group controlId="formTitle" className="mb-3">
              <Form.Label>소셜링 명</Form.Label>
              <Form.Control type="text" placeholder="소셜링 명" />
            </Form.Group>

            <Form.Group controlId="formLocation" className="mb-3">
              <Form.Label>장소</Form.Label>
              <Form.Control type="text" placeholder="장소" />
            </Form.Group>

            <Form.Group controlId="formDate" className="mb-3">
              <Form.Label>날짜</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group controlId="formSports" className="mb-3">
              <Form.Label>운동 종목</Form.Label>
              <ButtonGroup
                toggle
                className="d-flex flex-wrap justify-content-center"
              >
                {sports.map((sport, idx) => (
                  <ToggleButton
                    key={idx}
                    type="checkbox"
                    variant="outline-primary"
                    className={`sport-button ${
                      sportValue.includes(sport) ? "active" : ""
                    }`}
                    value={sport}
                    onClick={() =>
                      handleToggle(sport, setSportValue, sportValue)
                    }
                  >
                    {sport}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </Form.Group>

            <Form.Group controlId="formLevel" className="mb-3">
              <Form.Label>참가자 수준</Form.Label>
              <ButtonGroup toggle className="d-flex">
                {levels.map((level, idx) => (
                  <ToggleButton
                    key={idx}
                    type="radio"
                    variant="outline-primary"
                    className={`level-button ${
                      levelValue === level ? "active" : ""
                    }`}
                    name="level"
                    value={level}
                    onClick={() => setLevelValue(level)}
                  >
                    {level}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </Form.Group>

            <Form.Group controlId="formGender" className="mb-3">
              <Form.Label>성별</Form.Label>
              <ButtonGroup toggle className="d-flex">
                {genders.map((gender, idx) => (
                  <ToggleButton
                    key={idx}
                    type="radio"
                    variant="outline-primary"
                    className={`gender-button ${
                      genderValue === gender ? "active" : ""
                    }`}
                    name="gender"
                    value={gender}
                    onClick={() => setGenderValue(gender)}
                  >
                    {gender}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </Form.Group>

            <Form.Group controlId="formCapacity" className="mb-3">
              <Form.Label>정원</Form.Label>
              <Form.Control
                type="range"
                min="0"
                max="100"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                className="custom-range" // 커스텀 클래스 추가
              />
              <div className="text-center mt-2">{capacity}</div>{" "}
              {/* 정원 값 표시 */}
            </Form.Group>

            <Form.Group controlId="formPrice" className="mb-3">
              <Form.Label>가격</Form.Label>
              <ButtonGroup toggle className="d-flex">
                {prices.map((price, idx) => (
                  <ToggleButton
                    key={idx}
                    type="radio"
                    variant="outline-primary"
                    className={`price-button ${
                      priceValue === price ? "active" : ""
                    }`}
                    name="price"
                    value={price}
                    onClick={() => setPriceValue(price)}
                  >
                    {price}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </Form.Group>

            <Form.Group controlId="formDescription" className="mb-3">
              <Form.Label>소개글</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="소개글을 입력하세요"
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="warning" type="submit">
                등록하기
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Social;
