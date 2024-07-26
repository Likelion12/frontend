import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import Detail from "./Detail.js";
import Login from "./Login.js";
import Social from "./Social.js";
import Header from "./components/Header.js";
import Signup from "./Signup.js";
import MapPage from "./MapPage.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/Social" element={<Social />} />
          <Route path="/login" element={<Login />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
