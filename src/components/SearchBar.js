import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="키워드를 검색해주세요" />
      <input type="text" placeholder="지역 입력" />
      <input type="date" />
      <button>검색</button>
    </div>
  );
};

export default SearchBar;
