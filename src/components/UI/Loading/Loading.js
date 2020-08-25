import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./Loading.css";

const Loading = () => {
  let starting = 0;

  const increment = () => {
    if (starting > 100) {
      starting++;
    }
  };

  setInterval(increment, 1000);

  return (
    <>
      <h1 className="loadingText"> Loading... Please wait </h1>

      <ProgressBar className="progressBar" now={starting} label="60%" />
    </>
  );
};

export default Loading;
