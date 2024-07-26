import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import Detail from "./Detail.js";
import Login from "./Login.js";
import Social from "./Social.js";
<<<<<<< HEAD
import Header from "./components/Header.js";
=======
import Signup from "./Signup.js";
import MapPage from "./MapPage.js";
import Header from "./components/Header.js";
import "bootstrap/dist/css/bootstrap.min.css";

>>>>>>> 8528d7807c22970e493ae752dec8789ddc56da91
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Header />
<<<<<<< HEAD
      <div className="app-content">
=======
      <div className="app">
>>>>>>> 8528d7807c22970e493ae752dec8789ddc56da91
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
