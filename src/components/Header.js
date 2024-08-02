import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">DoGether!</div>
      <nav>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              소셜링
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/crew">
              크루
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/place">
              플레이스
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/map">
              지도
            </Link>
          </li>
        </ul>
      </nav>
      <div className="login-icon">
        <Link
          className="nav-link"
          to="/login"
          style={{ textDecoration: "none" }}
        >
          <img src="./login_icon.png" alt="Login Icon"></img>
        </Link>
      </div>
    </header>
  );
};

export default Header;
