import React, { useState, useEffect } from "react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const [nickname, setNickname] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [exercise, setExercise] = useState(""); // 운동 종목을 하나의 문자열로 변경
  const [responseMessage, setResponseMessage] = useState("");

  const handleKakaoSignup = () => {
    const clientId = "220ac935aaf5aa43884ee21823d82237";
    const redirectUri = "	http://localhost:3000/"; // 설정한 리디렉션 URI
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;

    window.location.href = kakaoAuthUrl;
  };

  // 운동 종목 선택 함수
  const handleExerciseSelect = (sport) => {
    setExercise(sport); // 선택한 운동 종목을 하나의 문자열로 설정
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
      exercise, // 문자열로 전달
    };

    // Axios를 사용하여 POST 요청 보내기
    axios
      .post("/user/signup", requestData)
      .then((response) => {
        const data = response.data;
        console.log("Response data:", data);

        if (data.code === 1000) {
          setResponseMessage("회원가입이 성공적으로 완료되었습니다!");
          console.log("회원가입 성공:", data.result);
        } else {
          setResponseMessage("회원가입에 실패했습니다. 다시 시도해 주세요.");
          console.error("회원가입 실패:", data.message);
        }
      })
      .catch((error) => {
        setResponseMessage("회원가입에 실패했습니다. 다시 시도해 주세요.");
        console.error("Error during signup:", error);
      });
  };

  return (
    <div className="sign-container">
      <div className="sign-box">
        <h1 className="sign-title">DoGether!</h1>
        <p className="sign-subtitle">운동할 사람이 없을 땐, DoGether!</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>성별: </label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="F">여성</option>
              <option value="M">남성</option>
            </select>
          </div>
          <div className="input-group">
            <label>운동 종목: </label>
            <div className="sports-buttons">
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
                  onClick={() => handleExerciseSelect(sport)}
                  style={{
                    backgroundColor: exercise === sport ? "lightblue" : "white",
                  }}
                >
                  {sport}
                </button>
              ))}
            </div>
          </div>
          <button className="kakao-sign-btn" onClick={handleKakaoSignup}>
            카카오로 회원가입
          </button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </div>
  );
};

export default Signup;
