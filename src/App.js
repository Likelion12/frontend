import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import Detail from "./Detail.js";
import Login from "./Login.js";
import Social from "./Social.js";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/Social" element={<Social />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
