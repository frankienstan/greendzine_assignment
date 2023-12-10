import React from "react";
import ProgressBar from "./ProgressBar";
import Navigation from "./Navigation";
import moptro_logo from "./assets/moptro_logo.png";
import call from "./assets/call.png";

const Dashboard = () => {
  return (
    <div>
      <div className="call_container">
        <img src={call} className="call_button" />
      </div>
      <div className="moptro_container">
        <div className="moptro_number_container">
          <div className="moptro_number">4</div>
        </div>

        <img src={moptro_logo} className="moptro_logo" />
      </div>
      <div className="dashboard">
        <div className="dashboard_title">Employee Productivity Dashboard</div>
        <div className="progress_bars">
          <ProgressBar day="Productivity on Monday" percentage="05%" />
          <ProgressBar day="Productivity on Tuesday" percentage="92%" />
          <ProgressBar day="Productivity on Wednesday" percentage="122%" />
          <ProgressBar day="Productivity on Thursday" percentage="93%" />
          <ProgressBar day="Productivity on Friday" percentage="89%" />
          <ProgressBar day="Productivity on Saturday" percentage="98%" />
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Dashboard;
