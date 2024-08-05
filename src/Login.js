import React, { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code");
    console.log("code: ", code);
    if (code) {
      // 카카오 인가 코드가 존재하는 경우 API 요청 보내기
      axios
        .get(`http://43.202.94.241:8080/auth/kakao/callback`, {
          params: { code }, // `params` 객체로 코드 전송
        })
        .then((response) => {
          const data = response.data;
          if (data) {
            if (data.result.memberStatus === true && data.status === 200) {
              // 서비스 회원인 경우
              console.log("로그인 성공:", data.result);
              // 사용자 정보를 상태에 저장하거나 원하는 처리를 수행합니다.
              // 예를 들어, 사용자 정보를 전역 상태에 저장하거나, 로컬 스토리지에 저장할 수 있습니다.
              // 로그인 성공 시 홈 페이지로 이동
              navigate("/home");
            } else {
              // 서비스 회원이 아닌 경우
              console.log(
                "카카오 회원이지만 서비스 회원이 아닙니다.",
                data.result
              );
              // 회원가입 페이지로 이동
              navigate("/signup");
            }
          } else {
            console.error("응답 오류:", data.message);
          }
        })
        .catch((error) => {
          console.error("API 요청 오류:", error);
        });
    }
  }, [location.search, navigate]);

  const handleKakaoLogin = () => {
    const clientId = "220ac935aaf5aa43884ee21823d82237"; // 발급받은 클라이언트 ID
    const redirectUri = "http://localhost:3000"; // 설정한 리디렉션 URI
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  return (
    <div className="login-container">
      <h2>로그인</h2>
      <p>운동할 사람이 없을 땐, DoGether!</p>
      <button className="kakao-login-btn" onClick={handleKakaoLogin}>
        <img
          src={`${process.env.PUBLIC_URL}/kakao_login.png`}
          alt="카카오 로그인"
        />
      </button>
      <Link to="/Signup" className="signup-btn">
        회원가입
      </Link>
    </div>
  );
};

export default Login;
