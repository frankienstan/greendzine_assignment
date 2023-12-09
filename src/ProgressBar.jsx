import React from 'react';

const ProgressBar = ({ day, percentage }) => {
  const progressBarStyle = {
    width: percentage, // Set the width based on the given percentage
  };

  return (
    <div className="progress-bar">
      <div className="progress" style={progressBarStyle}></div>
      <div className="day">{day}</div>
      <div className="progress_percentage">{percentage}</div>
    </div>
  );
};

export default ProgressBar;
