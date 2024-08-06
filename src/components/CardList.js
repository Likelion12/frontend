import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Card = ({ socialring }) => {
  return (
    <div className="card">
      <img src={socialring?.socialringImg || 'placeholder.jpg'} alt={socialring?.socialringName || 'Placeholder'} />
      <div className="card-content">
        <div className="tag">{socialring?.exerciseName || '준비중입니다'}</div>
        <div className="date">{socialring?.level || ''}</div>
        <h3>{socialring?.socialringName || 'Title'}</h3>
        <p>{socialring?.commentSimple || 'Description'}</p>
      </div>
    </div>
  );
};

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1); // 페이지 상태 관리

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://43.202.94.241:8080/socialring/inquiry', {
          params: {
            page: page
          }
        });

        console.log('요청 URL:', response.config.url);
        console.log('응답 데이터:', response.data);

        if (response.status === 200 && response.data.code === 1000) {
          setCards(response.data.result);
        } else {
          console.error("API 요청 실패:", response.data.message);
        }
      } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page]); // 페이지 번호가 변경될 때마다 데이터를 가져옵니다.

  const placeholders = Array.from({ length: 9 - cards.length }).map((_, index) => (
    <Card key={`placeholder-${index}`} isLoading={true} />
  ));

  return (
    <div className="card-list">
      {cards.map((socialring, index) => (
        <Link to={`/detail/${index}`} key={index}>
          <Card socialring={socialring} />
        </Link>
      ))}
      {placeholders}
      <button onClick={() => setPage(prev => prev + 1)}>다음 페이지</button>
    </div>
  );
};

export default CardList;
