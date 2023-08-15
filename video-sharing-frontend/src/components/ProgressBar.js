import React from "react";

const ProgressBar = ({ progress = 50 }) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-around", width: "90%" }}
    >
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ transform: `translate(${progress - 100}%)` }}
        ></div>
      </div>
      <div style={{ width: "20%", color: "white" }}>
        {progress !== 100 ? parseInt(progress) + "%" : "Completed"}
      </div>
    </div>
  );
};

export default ProgressBar;
