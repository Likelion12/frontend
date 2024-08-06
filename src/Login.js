import React from "react";

const Login = () => {
  const kakaoClientId = process.env.REACT_APP_KAKAO_CLIENT_ID;
  const redirectUri = `${window.location.origin}/auth/kakao/callback`;

  const handleKakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientId}&redirect_uri=${redirectUri}&response_type=code`;
  };

  return (
    <div>
      <h1 className="sign-title">DoGether!</h1>
      <p className="sign-subtitle">운동할 사람이 없을 땐, DoGether!</p>
      <button onClick={handleKakaoLogin} className="kakao-login-button">
        <img
          src={`${process.env.PUBLIC_URL}/kakao_login.png`}
          alt="Login with Kakao"
        />
      </button>
    </div>
  );
};

export default Login;
