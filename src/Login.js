import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h2>DoGether!</h2>
      <p>운동할 사람이 없을 땐, DoGether!</p>
      <form>
        <div className="login-input">
          <label htmlFor="id">ID</label>
          <input type="text" id="id" name="id" />
        </div>
        <div className="login-input">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit" className="login-btn">
          로그인
        </button>
        <button type="button" className="signup-btn">
          회원가입
        </button>
      </form>
      <p className="forgot-password">ID/Password를 잊으셨나요?</p>
    </div>
  );
};

export default Login;
