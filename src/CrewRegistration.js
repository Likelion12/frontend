import React from "react";
import "./CrewRegistration.css";

const CrewRegistration = () => {
  return (
    <div className="crew-registration">
      <div className="content">
        <h2>크루 등록</h2>
        <div className="form-section">
          <div className="form-left">
            <div className="image-upload">
              <div className="image-placeholder">사진 추가</div>
            </div>
            <input type="text" placeholder="크루 명" className="input-field" />
            <input
              type="text"
              placeholder="활동 지역"
              className="input-field"
            />
          </div>
          <div className="form-right">
            <div className="tags">
              <div className="tag">축구</div>
              <div className="tag">농구</div>
              <div className="tag selected">런닝</div>
              <div className="tag">풋살</div>
              <div className="tag">야구</div>
              <div className="tag">테니스</div>
              <div className="tag">배구</div>
              <div className="tag">배드민턴</div>
              <div className="tag">골프</div>
              <div className="tag">클라이밍</div>
            </div>
            <div className="levels">
              <div className="level">입문</div>
              <div className="level selected">초급</div>
              <div className="level">중급</div>
              <div className="level">고급</div>
            </div>
            <div className="genders">
              <div className="gender">상관없음</div>
              <div className="gender">남성</div>
              <div className="gender selected">여성</div>
            </div>
            <div className="capacity">
              <label>정원</label>
              <input type="range" min="0" max="100" className="slider" />
            </div>
            <textarea
              placeholder="소개글을 입력하세요"
              className="textarea"
            ></textarea>
            <button className="submit-button">등록하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewRegistration;
