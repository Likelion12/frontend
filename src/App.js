import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import Detail from "./Detail.js";
import CrewDetail from "./CrewDetail.js";
import Crew from "./Crew.js";
import Login from "./Login.js";
import Social from "./Social.js";
import Header from "./components/Header.js";
import CrewRegistration from "./CrewRegistration.js";
import KakaoRedirect from "./kakaoredirection.js";
import Signup from "./Signup.js";
import MapPage from "./MapPage.js";
import Place from "./Place.js";
import Main from "./Main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => {
  const [token, setToken] = useState("");

  return (
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/auth/kakao/callback?code={}"
            element={<kakaoredirection />}
          />
          <Route path="/detail/:id" element={<Detail token={token} />} />
          <Route path="/Social" element={<Social />} />
          <Route path="/crew" element={<CrewDetail />} />
          <Route path="/crew/:id" element={<Crew />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/kakao-redirect" element={<KakaoRedirect />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/place" element={<Place />} />
          <Route path="/main" element={<Main token={token} />} />
          <Route path="/crew-registration" element={<CrewRegistration />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
