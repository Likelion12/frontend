import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">DoGether!</div>
      <nav>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#!">
              소셜링
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">
              크루
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">
              플레이스
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">
              마이페이지
            </a>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/login">
              로그인
            </Link>
          </li>
        </ul>
      </nav>
      <div className="search-icon">🔍</div>
    </header>
  );
};

export default Header;
