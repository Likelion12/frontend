import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <h2>DoGether!</h2>
      <p>운동할 사람이 없을 땐, DoGether!</p>
      <form>
        <div className="signup-input">
          <label htmlFor="id">ID</label>
          <input type="text" id="id" name="id" required />
        </div>
        <div className="signup-input">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="signup-input">
          <label htmlFor="confirm-password">Password 확인</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
          />
        </div>
        <div className="signup-input">
          <label>성별</label>
          <div className="gender-options">
            <label>
              <input type="radio" name="gender" value="남성" required /> 남성
            </label>
            <label>
              <input type="radio" name="gender" value="여성" required /> 여성
            </label>
          </div>
        </div>
        <div className="signup-input">
          <label>선호 종목</label>
          <div className="sport-options">
            <button type="button">축구</button>
            <button type="button">농구</button>
            <button type="button">러닝</button>
            <button type="button">풋살</button>
            <button type="button">야구</button>
            <button type="button">테니스</button>
            <button type="button">배구</button>
            <button type="button">배드민턴</button>
            <button type="button">골프</button>
            <button type="button">클라이밍</button>
          </div>
        </div>
        <button type="submit" className="signup-btn">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Signup;
