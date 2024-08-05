import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./CrewRegistration.css";
import axios from "axios";

const CrewRegistration = () => {
  const [crewName, setCrewName] = useState("");
  const [activityRegionId, setActivityRegionId] = useState("");
  const [facilityId, setFacilityId] = useState("");
  const [exerciseId, setExerciseId] = useState("");
  const [totalRecruits, setTotalRecruits] = useState("");
  const [crewCost, setCrewCost] = useState("");
  const [comment, setComment] = useState("");
  const [simpleComment, setSimpleComment] = useState("");
  const [gender, setGender] = useState("");
  const [level, setLevel] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const sports = [
    "축구",
    "농구",
    "런닝",
    "풋살",
    "야구",
    "테니스",
    "배구",
    "배드민턴",
    "골프",
    "클라이밍",
  ];
  const levels = ["입문", "초급", "중급", "고급"];
  const genders = ["상관없음", "남성", "여성"];

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const jsonData = {
      crewName,
      activityRegionId: parseInt(activityRegionId),
      facilityId: parseInt(facilityId),
      exerciseId: parseInt(exerciseId),
      totalRecruits: parseInt(totalRecruits),
      crewCost: parseInt(crewCost),
      comment,
      simpleComment,
      gender,
      level,
      // 이미지 미리보기 URL을 사용 (이미지를 직접 전송할 수 없는 경우)
      image: imagePreview,
    };

    try {
      const response = await axios.post(
        "http://example.com/crew-registration",
        jsonData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // 로컬 스토리지에서 토큰 가져오기
          },
        }
      );

      if (response.data.code === 1000) {
        alert("크루 등록에 성공하였습니다.");
      }
    } catch (error) {
      console.error("크루 등록 실패:", error);
      alert("크루 등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <Container fluid className="main-container">
      <Row className="justify-content-center">
        <Col md={8} className="form-container">
          <h4 className="form-title">크루 등록</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formImage" className="text-center mb-3">
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
                    onClick={() => {
                      setImage(null);
                      setImagePreview(null);
                    }}
                  >
                    &times;
                  </button>
                </div>
              )}
            </Form.Group>

            <Form.Group controlId="formTitle" className="mb-3">
              <Form.Label>크루 명</Form.Label>
              <Form.Control
                type="text"
                placeholder="크루 명"
                className="custom-input"
                value={crewName}
                onChange={(e) => setCrewName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formLocation" className="mb-3">
              <Form.Label>활동 지역 ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="활동 지역 ID"
                className="custom-input"
                value={activityRegionId}
                onChange={(e) => setActivityRegionId(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formFacility" className="mb-3">
              <Form.Label>체육 시설 ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="체육 시설 ID"
                className="custom-input"
                value={facilityId}
                onChange={(e) => setFacilityId(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formExercise" className="mb-3">
              <Form.Label>운동 종목</Form.Label>
              <div className="d-flex flex-wrap">
                {sports.map((sport) => (
                  <Button
                    key={sport}
                    variant={
                      exerciseId === sport ? "primary" : "outline-primary"
                    }
                    className="m-1 sport-button"
                    onClick={() => setExerciseId(sport)}
                  >
                    {sport}
                  </Button>
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="formRecruits" className="mb-3">
              <Form.Label>모집 인원</Form.Label>
              <Form.Control
                type="number"
                placeholder="모집 인원"
                className="custom-input"
                value={totalRecruits}
                onChange={(e) => setTotalRecruits(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formCost" className="mb-3">
              <Form.Label>참가 비용</Form.Label>
              <Form.Control
                type="number"
                placeholder="참가 비용"
                className="custom-input"
                value={crewCost}
                onChange={(e) => setCrewCost(e.target.value)}
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
                value={simpleComment}
                onChange={(e) => setSimpleComment(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formGender" className="mb-3">
              <Form.Label>성별</Form.Label>
              <div className="d-flex flex-wrap">
                {genders.map((gen) => (
                  <Button
                    key={gen}
                    variant={gender === gen ? "primary" : "outline-primary"}
                    className="m-1 gender-button"
                    onClick={() => setGender(gen)}
                  >
                    {gen}
                  </Button>
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="formLevel" className="mb-3">
              <Form.Label>참가자 수준</Form.Label>
              <div className="d-flex flex-wrap">
                {levels.map((lvl) => (
                  <Button
                    key={lvl}
                    variant={level === lvl ? "primary" : "outline-primary"}
                    className="m-1 level-button"
                    onClick={() => setLevel(lvl)}
                  >
                    {lvl}
                  </Button>
                ))}
              </div>
            </Form.Group>

            <div className="text-center">
              <Button variant="warning" type="submit">
                등록하기
              </Button>
    <Container fluid className="main-container">
      <Row className="justify-content-center">
        <Col md={8} className="form-container">
          <h4 className="form-title">크루 등록</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formImage" className="text-center mb-3">
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
                    onClick={() => {
                      setImage(null);
                      setImagePreview(null);
                    }}
                  >
                    &times;
                  </button>
                </div>
              )}
            </Form.Group>

            <Form.Group controlId="formTitle" className="mb-3">
              <Form.Label>크루 명</Form.Label>
              <Form.Control
                type="text"
                placeholder="크루 명"
                className="custom-input"
                value={crewName}
                onChange={(e) => setCrewName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formLocation" className="mb-3">
              <Form.Label>활동 지역 ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="활동 지역 ID"
                className="custom-input"
                value={activityRegionId}
                onChange={(e) => setActivityRegionId(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formFacility" className="mb-3">
              <Form.Label>체육 시설 ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="체육 시설 ID"
                className="custom-input"
                value={facilityId}
                onChange={(e) => setFacilityId(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formExercise" className="mb-3">
              <Form.Label>운동 종목</Form.Label>
              <div className="d-flex flex-wrap">
                {sports.map((sport) => (
                  <Button
                    key={sport}
                    variant={
                      exerciseId === sport ? "primary" : "outline-primary"
                    }
                    className="m-1 sport-button"
                    onClick={() => setExerciseId(sport)}
                  >
                    {sport}
                  </Button>
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="formRecruits" className="mb-3">
              <Form.Label>모집 인원</Form.Label>
              <Form.Control
                type="number"
                placeholder="모집 인원"
                className="custom-input"
                value={totalRecruits}
                onChange={(e) => setTotalRecruits(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formCost" className="mb-3">
              <Form.Label>참가 비용</Form.Label>
              <Form.Control
                type="number"
                placeholder="참가 비용"
                className="custom-input"
                value={crewCost}
                onChange={(e) => setCrewCost(e.target.value)}
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
                value={simpleComment}
                onChange={(e) => setSimpleComment(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formGender" className="mb-3">
              <Form.Label>성별</Form.Label>
              <div className="d-flex flex-wrap">
                {genders.map((gen) => (
                  <Button
                    key={gen}
                    variant={gender === gen ? "primary" : "outline-primary"}
                    className="m-1 gender-button"
                    onClick={() => setGender(gen)}
                  >
                    {gen}
                  </Button>
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="formLevel" className="mb-3">
              <Form.Label>참가자 수준</Form.Label>
              <div className="d-flex flex-wrap">
                {levels.map((lvl) => (
                  <Button
                    key={lvl}
                    variant={level === lvl ? "primary" : "outline-primary"}
                    className="m-1 level-button"
                    onClick={() => setLevel(lvl)}
                  >
                    {lvl}
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
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CrewRegistration;
