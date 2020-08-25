import React, {useState} from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./Loading.css";

const Loading = () => { 
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 20)

    if(counter === 100) {
      window.location = '/website'
    }
  };

  setInterval(increment, 1500);

  return (
    <>
      <h1 className="loadingText"> Loading... Please wait </h1>

      <ProgressBar className="progressBar" now={counter} animated min={0} max={100} label={`${counter}%`} />
    </>
  );
};

export default Loading;
