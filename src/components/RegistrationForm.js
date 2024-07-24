import React from "react";
import Social from "../Social";
import "./RegistrationForm.css";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  return (
    <div className="registration-form">
      <Link to="/Social">
        <button className="Social-button">소셜링 등록</button>
      </Link>
      <form>
        <div>
          <label>Title</label>
          <input type="text" />
        </div>
        <div>
          <label>Title</label>
          <input type="text" />
        </div>
        <div>
          <label>Title</label>
          <input type="text" />
        </div>
        <div>
          <label>Title</label>
          <input type="text" />
        </div>
        <button>필터 적용</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
