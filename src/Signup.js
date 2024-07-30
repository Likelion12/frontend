import React from "react";
import "./Signup.css";

const Signup = () => {
  const handleKakaoSignup = () => {
    const clientId = "0220a84053d6e6f8d8e296711371b7ec"; // 발급받은 클라이언트 ID
    const redirectUri = "http://localhost:3000/"; // 설정한 리디렉션 URI
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;

    window.location.href = kakaoAuthUrl;
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
    </div>
  );
};

export default Signup;
