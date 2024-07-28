import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  //변수 설정
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //handleLogin 비동기 함수 정의
  const handleLogin = async (event) => {
    event.preventDefault();

    const loginData = {
      id,
      password,
    };

    //api 시작
    try {
      // POST 요청으로 변경
      const response = await axios.post("/user/signup", loginData);
      const { code, message, result } = response.data;

      if (code === 1000) {
        console.log("API 연결 성공");
        console.log("회원 ID:", result.memberId);
        console.log("Access Token:", result.accessToken);
        console.log("Refresh Token:", result.refreshToken);
        // 로그인 성공 후 리다이렉트 등 추가 동작
        navigate("/home"); // 예를 들어 홈 페이지로 리다이렉트
      } else {
        alert(message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="login-container">
      <h2>DoGether!</h2>
      <p>운동할 사람이 없을 땐, DoGether!</p>
      <form onSubmit={handleLogin}>
        <div className="login-input">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            id="id"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="login-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-btn">
          로그인
        </button>
        <Link to="/signup" className="signup-link">
          <button type="button" className="signup-btn">
            회원가입
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
