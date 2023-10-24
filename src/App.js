import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import UserInput from "./UserInput";
import Results from "./Results";
import dsu from "./img/dsu.png";

function App() {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [date, setDate] = useState(
    new Date().toISOString().slice(0, 10).replace(/-/g, "")
  );
  const [academic, setAcademic] = useState("");
  const [keyword1, setKeyword1] = useState("");
  const [keyword2, setKeyword2] = useState("");
  const [keyword3, setKeyword3] = useState("");
  const [keyword4, setKeyword4] = useState("");
  const [keyword5, setKeyword5] = useState("");

  const [, setUserName] = useState("");
  const [, setUserNum] = useState("");
  const [, setUserDate] = useState("");
  const [, setUserAcademic] = useState("");
  const [, setUserKeyword1] = useState("");
  const [, setUserKeyword2] = useState("");
  const [, setUserKeyword3] = useState("");
  const [, setUserKeyword4] = useState("");
  const [, setUserKeyword5] = useState("");
  const [, setFilterResults] = useState([]);

  const [resultsPostTitle1, setResultsPostTitle1] = useState("");
  const [resultsPostTitle2, setResultsPostTitle2] = useState("");
  const [resultsPostTitle3, setResultsPostTitle3] = useState("");
  const [resultsPostLink1, setResultsPostLink1] = useState("");
  const [resultsPostLink2, setResultsPostLink2] = useState("");
  const [resultsPostLink3, setResultsPostLink3] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumChange = (e) => {
    // 학번 입력값이 숫자로만 이루어져 있으며 8자리 이상 입력되지 않도록 검사
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 8) {
      value = value.slice(0, 8);
    }
    setNum(value);
  };

  const handleKeywordChange1 = (e) => {
    setKeyword1(e.target.value);
  };

  const handleKeywordChange2 = (e) => {
    setKeyword2(e.target.value);
  };

  const handleKeywordChange3 = (e) => {
    setKeyword3(e.target.value);
  };

  const handleKeywordChange4 = (e) => {
    setKeyword4(e.target.value);
  };

  const handleKeywordChange5 = (e) => {
    setKeyword5(e.target.value);
  };

  const handleAcademic = (e) => {
    setAcademic(e.target.value);
  };

  const handleReset = () => {
    setShowResults(false);
    setName("");
    setNum("");
    setDate("");
    setAcademic("");
    setKeyword1("");
    setKeyword2("");
    setKeyword3("");
    setKeyword4("");
    setKeyword5("");
    setUserName("");
    setUserNum("");
    setUserDate("");
    setUserAcademic("");
    setUserKeyword1("");
    setUserKeyword2("");
    setUserKeyword3("");
    setUserKeyword4("");
    setUserKeyword5("");
    setFilterResults([]);
  };

  const handleSearch = () => {
    // 검색 버튼을 클릭했을 때 사용자의 검색어를 설정하고 서버에 전송
    const newUserName = name;
    const newUserNum = num;
    const newUserDate = date;
    const newUserAcademic = academic;
    const searchKeyword1 = keyword1;
    const searchKeyword2 = keyword2;
    const searchKeyword3 = keyword3;
    const searchKeyword4 = keyword4;
    const searchKeyword5 = keyword5;
    setUserName(newUserName);
    setUserNum(newUserNum);
    setUserDate(newUserDate);
    setUserAcademic(newUserAcademic);
    setUserKeyword1(searchKeyword1);
    setUserKeyword2(searchKeyword2);
    setUserKeyword3(searchKeyword3);
    setUserKeyword4(searchKeyword4);
    setUserKeyword5(searchKeyword5);
    setDate(new Date().toISOString().slice(0, 10).replace(/-/g, ""));
    setShowResults(true);

    console.log(
      `이름: ${name}, 학번: ${num}, 날짜: ${date}, 전공: ${academic}, 키워드1: ${keyword1}, 키워드2: ${keyword2}, 키워드3: ${keyword3}, 키워드4: ${keyword4}, 키워드5: ${keyword5}`
    );

    const axiosInstance = axios.create({
      baseURL: "http://13.125.210.121",
    });

    axiosInstance
      .post("/recommend", {
        name: newUserName,
        num: newUserNum,
        date: newUserDate,
        academic: newUserAcademic,
        keyword1: searchKeyword1,
        keyword2: searchKeyword2,
        keyword3: searchKeyword3,
        keyword4: searchKeyword4,
        keyword5: searchKeyword5,
      })
      .then((response) => {
        // 필터링 결과를 처리하는 코드
        // console.log(response.data[0].recom_link);
        setResultsPostTitle1(response.data[0].recom_title);
        setResultsPostTitle2(response.data[1].recom_title);
        setResultsPostTitle3(response.data[2].recom_title);
        setResultsPostLink1(response.data[0].recom_link);
        setResultsPostLink2(response.data[1].recom_link);
        setResultsPostLink3(response.data[2].recom_link);
        setFilterResults(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <div className="title_box">
        <span className="head_title">DSU Notice Recommend System</span>
      </div>
      <div className="body_box">
        {showResults ? (
          <Results
            resultsPostLink1={resultsPostLink1}
            resultsPostLink2={resultsPostLink2}
            resultsPostLink3={resultsPostLink3}
            resultsPostTitle1={resultsPostTitle1}
            resultsPostTitle2={resultsPostTitle2}
            resultsPostTitle3={resultsPostTitle3}
          />
        ) : (
          <UserInput
            name={name}
            num={num}
            academic={academic}
            keyword1={keyword1}
            keyword2={keyword2}
            keyword3={keyword3}
            keyword4={keyword4}
            keyword5={keyword5}
            handleNameChange={handleNameChange}
            handleNumChange={handleNumChange}
            handleAcademic={handleAcademic}
            handleKeywordChange1={handleKeywordChange1}
            handleKeywordChange2={handleKeywordChange2}
            handleKeywordChange3={handleKeywordChange3}
            handleKeywordChange4={handleKeywordChange4}
            handleKeywordChange5={handleKeywordChange5}
            handleSearch={handleSearch}
          />
        )}
      </div>
      <button className="reset_btn" onClick={handleReset}>
        초기화
      </button>
      <div>
        <img className="img" src={dsu} alt="dsu.img"></img>
      </div>
    </div>
  );
}

export default App;
