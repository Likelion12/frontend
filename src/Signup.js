import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryClick = (category) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((item) => item !== category)
        : [...prevSelectedCategories, category]
    );
  };

  const categories = [
    "축구",
    "농구",
    "러닝",
    "풋살",
    "야구",
    "테니스",
    "배구",
    "배드민턴",
    "골프",
    "클라이밍",
  ];

  return (
    <div className="signup-container">
      <h2>DoGether!</h2>
      <p>운동할 사람이 없을 땐, DoGether!</p>
      <form action="/signup" method="POST">
        <div className="signup-input">
          <label htmlFor="signup-id">ID</label>
          <input type="text" id="signup-id" name="id" required />
        </div>
        <div className="signup-input">
          <label htmlFor="signup-password">Password</label>
          <input
            type="password"
            id="signup-password"
            name="password"
            required
          />
        </div>
        <div className="signup-input">
          <label htmlFor="signup-confirm-password">Password 확인</label>
          <input
            type="password"
            id="signup-confirm-password"
            name="confirm-password"
            required
          />
        </div>
        <div className="signup-input">
          <label>성별</label>
          <div className="gender-selection">
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
          <div className="categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`category-button ${
                  selectedCategories.includes(category) ? "selected" : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <button type="submit" className="signup-btn">
          회원가입
        </button>
      </form>
      <p className="forgot-password">
        <a href="#">ID/Password를 잊으셨나요?</a>
      </p>
    </div>
  );
};

export default Signup;
