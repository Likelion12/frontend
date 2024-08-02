import React from "react";
import { Link } from "react-router-dom"; // Link 임포트
import "./Crew.css";

const Crew = () => {
  const crewList = [
    {
      id: 1,
      name: "서울숲 담비 클라이밍",
      description: "매주 수요일 활동하는 2년차 클린이 모임",
      location: "광진구",
      level: "초급",
      category: "런닝",
    },
    {
      id: 2,
      name: "한강 주말 러닝",
      description: "매주 주말 활동하는 러닝 모임",
      location: "강남구",
      level: "중급",
      category: "러닝",
    },
    // 더 많은 크루 데이터를 추가할 수 있습니다.
  ];

  return (
    <div className="crew-page">
      <div className="crew-page-header">
        <h1>크루 페이지</h1>
        <p>20개의 크루가 검색되었습니다.</p>
      </div>
      <div className="crew-page-content">
        {crewList.map((crew) => (
          <div key={crew.id} className="crew-card">
            <h2>{crew.name}</h2>
            <p>{crew.description}</p>
            <p>지역: {crew.location}</p>
            <p>수준: {crew.level}</p>
            <p>카테고리: {crew.category}</p>
            <Link to={`/crew/${crew.id}`}>자세히 보기</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crew;
