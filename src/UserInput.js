import React from "react";
import "./UserInput.css";

function UserInput({
  name,
  num,
  academic,
  keyword1,
  keyword2,
  keyword3,
  keyword4,
  keyword5,
  handleNameChange,
  handleNumChange,
  handleAcademic,
  handleKeywordChange1,
  handleKeywordChange2,
  handleKeywordChange3,
  handleKeywordChange4,
  handleKeywordChange5,
  handleSearch,
}) {
  return (
    <div className="user_Input_Box">
      <h1 className="title">사용자 프로필 입력</h1>
      <div>
        <label className="name">이름:</label>
        <input
          className="input_name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label className="num">학번:</label>
        <input
          className="input_num"
          type="text"
          value={num}
          onChange={handleNumChange}
        />
      </div>
      <div>
        <label className="academic">전공:</label>
        <input className="input_academic" value={academic} onChange={handleAcademic}/>
      </div>
      <div>
        <label className="keyword1">관심 키워드1:</label>
        <input className="input_keyword1" type="text" value={keyword1} onChange={handleKeywordChange1} />
      </div>
      <div>
        <label className="keyword2">관심 키워드2:</label>
        <input className="input_keyword2" type="text" value={keyword2} onChange={handleKeywordChange2} />
      </div>
      <div>
        <label className="keyword3">관심 키워드3:</label>
        <input className="input_keyword3" type="text" value={keyword3} onChange={handleKeywordChange3} />
      </div>
      <div>
        <label className="keyword4">관심 키워드4:</label>
        <input className="input_keyword4" type="text" value={keyword4} onChange={handleKeywordChange4} />
      </div>
      <div>
        <label className="keyword5">관심 키워드5:</label>
        <input className="input_keyword5" type="text" value={keyword5} onChange={handleKeywordChange5} />
      </div>
      <button className="search_Btn" onClick={handleSearch}>
        검색
      </button>
    </div>
  );
}

export default UserInput;
