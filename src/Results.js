import React from "react";
import "./Results.css"

function Results({
  resultsPostLink1,
  resultsPostLink2,
  resultsPostLink3,
  resultsPostTitle1,
  resultsPostTitle2,
  resultsPostTitle3,
}) {
  return (
    <div className="results_Box">
      <h2 className="results_Title">결과</h2>
      <ul>
        <li>
          <a href={resultsPostLink1} target="_blank" rel="noopener noreferrer">
            {resultsPostTitle1}
          </a>
        </li>
        <li>
          <a href={resultsPostLink2} target="_blank" rel="noopener noreferrer">
            {resultsPostTitle2}
          </a>
        </li>
        <li>
          <a href={resultsPostLink3} target="_blank" rel="noopener noreferrer">
            {resultsPostTitle3}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Results;
