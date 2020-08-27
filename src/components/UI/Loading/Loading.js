import React, { useState, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import axios from "axios";
import "./Loading.css";

const Loading = () => {
  const [counter, setCounter] = useState(0);
  const [websiteID, setWebsiteID] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/getAll").then((res) => {
      setWebsiteID(res.data[res.data.length - 1]._id);
    });
  }, []);

  const increment = () => {
    setCounter(counter + 20);

    if (counter === 100) {
      window.location = `/website/${websiteID}`;
    }
  };

  setInterval(increment, 1500);

  return (
    <>
      <h1 className="loadingText"> Loading... Please wait </h1>

      <ProgressBar
        className="progressBar"
        now={counter}
        animated
        min={0}
        max={100}
        label={`${counter}%`}
      />
    </>
  );
};

export default Loading;
