import React, { useState } from "react";
import "./MapPage.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const cardsData = {
    upcoming: [
      {
        id: 1,
        title: "중랑천 런닝 3km",
        date: "2024.02.01 (목)",
        people: "인원 5/10",
      },
      {
        id: 2,
        title: "중랑천 런닝 3km",
        date: "2024.02.01 (목)",
        people: "인원 5/10",
      },
      {
        id: 3,
        title: "중랑천 런닝 3km",
        date: "2024.02.01 (목)",
        people: "인원 5/10",
      },
    ],
    ongoing: [
      // Add ongoing event data here
    ],
    completed: [
      // Add completed event data here
    ],
  };

  const renderCards = (cards) => {
    return cards.map((card) => (
      <div key={card.id} className="card">
        <img src="event_image.jpg" alt="Event" />
        <div className="card-content">
          <h3>{card.title}</h3>
          <p>{card.date}</p>
          <p>{card.people}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="App">
      <div className="profile">
        <img src="profile_image.jpg" alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h2>계정정보</h2>
        </div>
      </div>
      <div className="tabs">
        <button onClick={() => setActiveTab("upcoming")}>참가 예정</button>
        <button onClick={() => setActiveTab("ongoing")}>참여 중</button>
        <button onClick={() => setActiveTab("completed")}>참가 완료</button>
      </div>
      <div className="cards">{renderCards(cardsData[activeTab])}</div>
    </div>
  );
};

export default App;
