import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const [nickname, setNickname] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [exercises, setExercises] = useState([]); // 상태 변수 설정
  const [responseMessage, setResponseMessage] = useState("");

  const handleKakaoSignup = () => {
    const clientId = "0220a84053d6e6f8d8e296711371b7ec";
    const redirectUri = "http://localhost:3000/"; // 설정한 리디렉션 URI
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;

    window.location.href = kakaoAuthUrl;

    // 운동 종목 선택/해제 함수
    const handleExerciseToggle = (sport) => {
      setExercises((prevExercises) => {
        if (prevExercises.includes(sport)) {
          return prevExercises.filter((exercise) => exercise !== sport);
        } else {
          return [...prevExercises, sport];
        }
      });
    };

    // 폼 제출 핸들러
    const handleSubmit = (e) => {
      e.preventDefault();

      // 요청 데이터 준비
      const requestData = {
        nickname,
        profileImage,
        email,
        gender,
        exercises, // 배열로 전달
      };

      // Axios를 사용하여 POST 요청 보내기
      axios
        .post("http://localhost:3000/user/signup", requestData)
        .then((response) => {
          // 응답 처리
          setResponseMessage("회원가입이 성공적으로 완료되었습니다!");
        })
        .catch((error) => {
          // 에러 처리
          setResponseMessage("회원가입에 실패했습니다. 다시 시도해 주세요.");
          console.error("Error during signup:", error);
        });
    };

    return (
      <div className="sign-container">
        <div className="sign-box">
          <h1 className="sign-title">DoGether!</h1>
          <p className="sign-subtitle">운동할 사람이 없을 땐, DoGether!</p>
          <button className="kakao-sign-btn" onClick={handleKakaoSignup}>
            카카오로 가입하기
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>닉네임: </label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>
          <div>
            <label>성별: </label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="F">여성</option>
              <option value="M">남성</option>
            </select>
          </div>
          <div>
            <label>운동 종목: </label>
            <div>
              {[
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
              ].map((sport) => (
                <button
                  key={sport}
                  type="button"
                  onClick={() => handleExerciseToggle(sport)}
                  style={{
                    backgroundColor: exercises.includes(sport)
                      ? "lightblue"
                      : "white",
                  }}
                >
                  {sport}
                </button>
              ))}
            </div>
          </div>
          <button type="submit">회원가입</button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    );
  };
};

export default Signup;
