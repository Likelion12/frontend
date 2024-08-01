import React, { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const handleKakaoLogin = () => {
    const clientId = "0220a84053d6e6f8d8e296711371b7ec"; // 발급받은 클라이언트 ID
    const redirectUri = "http://localhost:3000/"; // 설정한 리디렉션 URI
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;

    window.location.href = kakaoAuthUrl;
  };

  return (
    <div className="login-container">
      <h2>로그인</h2>
      <p>운동할 사람이 없을 땐, DoGether!</p>
      <button className="kakao-login-btn" onClick={handleKakaoLogin}>
        카카오로 로그인
      </button>
      <Link to="/Signup" className="signup-btn">
        회원가입
      </Link>
    </div>
  );
};

export default Login;
