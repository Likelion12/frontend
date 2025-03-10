import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Social.css";
import axios from "axios";

const Social = () => {
  const [sportValue, setSportValue] = useState([]);
  const [levelValue, setLevelValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [socialringName, setSocialringName] = useState("");
  const [activityRegionId, setActivityRegionId] = useState("");
  const [facilityId, setFacilityId] = useState("");
  const [exerciseId, setExerciseId] = useState("");
  const [socialringDate, setSocialringDate] = useState("");
  const [socialringCost, setSocialringCost] = useState(0);
  const [comment, setComment] = useState("");
  const [commentSimple, setCommentSimple] = useState("");

  // Define the sports array
  const sports = [
    { id: 1, name: "축구" },
    { id: 2, name: "농구" },
    { id: 3, name: "러닝" },
    { id: 4, name: "등산" },
    { id: 5, name: "야구" },
    { id: 6, name: "테니스" },
    { id: 7, name: "배구" },
    { id: 8, name: "배드민턴" },
    { id: 9, name: "골프" },
    { id: 10, name: "클라이밍" },
  ];

  // Define levels and genders arrays
  const levels = ["C", "B", "A", "S"];
  const genders = ["U", "M", "F"];

  // 서울의 각 구 정의
  const seoulDistricts = [
    { id: 1, name: "강남구" },
    { id: 2, name: "강동구" },
    { id: 3, name: "강북구" },
    { id: 4, name: "강서구" },
    { id: 5, name: "관악구" },
    { id: 6, name: "광진구" },
    { id: 7, name: "구로구" },
    { id: 8, name: "금천구" },
    { id: 9, name: "노원구" },
    { id: 10, name: "도봉구" },
    { id: 11, name: "동대문구" },
    { id: 12, name: "동작구" },
    { id: 13, name: "마포구" },
    { id: 14, name: "서대문구" },
    { id: 15, name: "서초구" },
    { id: 16, name: "성동구" },
    { id: 17, name: "성북구" },
    { id: 18, name: "송파구" },
    { id: 19, name: "양천구" },
    { id: 20, name: "영등포구" },
    { id: 21, name: "용산구" },
    { id: 22, name: "은평구" },
    { id: 23, name: "종로구" },
    { id: 24, name: "중구" },
    { id: 25, name: "중랑구" },
  ];

  const handleToggle = (value, setValue, currentValues) => {
    if (currentValues.includes(value)) {
      setValue(currentValues.filter((v) => v !== value));
    } else {
      setValue([...currentValues, value]);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleImageRemove = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const jsonData = {
      socialringName: socialringName,
      activityRegionId: parseInt(activityRegionId),
      facilityId: parseInt(facilityId),
      exerciseId: parseInt(exerciseId),
      totalRecruits: parseInt(capacity),
      socialringDate: socialringDate,
      socialringCost: parseInt(socialringCost),
      comment: comment,
      commentSimple: commentSimple,
      gender: genderValue,
      level: levelValue,
    };

    try {
      const response = await axios.post(
        "http://43.202.94.241:8080/socialring",
        jsonData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // 로컬 스토리지에서 토큰 가져오기
          },
        }
      );

      if (response.data.code === 1000) {
        alert("소셜링 등록에 성공하였습니다.");
        // 성공 시 필요한 추가 작업 (예: 페이지 이동)
      }
    } catch (error) {
      console.error("소셜링 등록 실패:", error);
      if (error.response) {
        alert(`소셜링 등록 실패: ${error.response.data.message}`);
      } else {
        alert("소셜링 등록 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <Container fluid className="main-container">
      <Row className="justify-content-center">
        <Col md={8} className="form-container">
          <h4 className="form-title">소셜링 등록</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formImage" className="text-center mb-3">
              <Form.Label className="d-block">사진 추가</Form.Label>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="fileInput"
                onChange={handleImageChange}
              />
              <Button
                variant="light"
                className="upload-button"
                onClick={() => document.getElementById("fileInput").click()}
              >
                사진 추가
              </Button>
              {imagePreview && (
                <div className="mt-3 position-relative img-preview-container">
                  <img
                    src={imagePreview}
                    alt="미리보기"
                    className="img-preview"
                  />
                  <button
                    type="button"
                    className="img-remove-button"
                    onClick={handleImageRemove}
                  >
                    &times;
                  </button>
                </div>
              )}
            </Form.Group>

            <Form.Group controlId="formTitle" className="mb-3">
              <Form.Label>소셜링 명</Form.Label>
              <Form.Control
                type="text"
                placeholder="소셜링 명"
                className="custom-input"
                value={socialringName}
                onChange={(e) => setSocialringName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formLocation" className="mb-3">
              <Form.Label>활동지역</Form.Label>
              <Form.Control
                as="select"
                className="custom-input"
                value={activityRegionId}
                onChange={(e) => setActivityRegionId(e.target.value)}
                required
              >
                <option value="">활동지역 선택</option>
                {seoulDistricts.map((district) => (
                  <option key={district.id} value={district.id}>
                    {district.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formFacility" className="mb-3">
              <Form.Label>체육시설</Form.Label>
              <Form.Control
                type="text"
                placeholder="체육시설"
                className="custom-input"
                value={facilityId}
                onChange={(e) => setFacilityId(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formExercise" className="mb-3">
              <Form.Label>운동종목</Form.Label>
              <div className="d-flex flex-wrap">
                {sports.map((sport) => (
                  <Button
                    key={sport.id}
                    variant={
                      sportValue.includes(sport.id)
                        ? "primary"
                        : "outline-primary"
                    }
                    className="m-1 sport-button"
                    onClick={() =>
                      handleToggle(sport.id, setSportValue, sportValue)
                    }
                  >
                    {sport.name}
                  </Button>
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="formDate" className="mb-3">
              <Form.Label>날짜</Form.Label>
              <Form.Control
                type="date"
                className="custom-input"
                value={socialringDate}
                onChange={(e) => setSocialringDate(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formRecruits" className="mb-3">
              <Form.Label>모집인원</Form.Label>
              <Form.Control
                type="number"
                placeholder="모집인원"
                className="custom-input"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formCost" className="mb-3">
              <Form.Label>참가비용</Form.Label>
              <Form.Control
                type="number"
                placeholder="참가비용"
                className="custom-input"
                value={socialringCost}
                onChange={(e) => setSocialringCost(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDescription" className="mb-3">
              <Form.Label>소개글</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="소개글을 입력하세요"
                className="custom-input"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formCommentSimple" className="mb-3">
              <Form.Label>한줄 설명</Form.Label>
              <Form.Control
                type="text"
                placeholder="한줄 설명"
                className="custom-input"
                value={commentSimple}
                onChange={(e) => setCommentSimple(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formGender" className="mb-3">
              <Form.Label>성별</Form.Label>
              <div className="d-flex flex-wrap">
                {genders.map((gender) => (
                  <Button
                    key={gender}
                    variant={
                      genderValue === gender ? "primary" : "outline-primary"
                    }
                    className="m-1 gender-button"
                    onClick={() => setGenderValue(gender)}
                  >
                    {gender}
                  </Button>
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="formLevel" className="mb-3">
              <Form.Label>참가자 수준</Form.Label>
              <div className="d-flex flex-wrap">
                {levels.map((level) => (
                  <Button
                    key={level}
                    variant={
                      levelValue === level ? "primary" : "outline-primary"
                    }
                    className="m-1 level-button"
                    onClick={() => setLevelValue(level)}
                  >
                    {level}
                  </Button>
                ))}
              </div>
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
