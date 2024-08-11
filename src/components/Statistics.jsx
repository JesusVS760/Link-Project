import React from "react";
import "./Statistics.css";
import graph from "../assets/images/icon-brand-recognition.svg";
import record from "../assets/images/icon-detailed-records.svg";
import brushes from "../assets/images/icon-fully-customizable.svg";

const Statistics = () => {
  return (
    <div className="statistics-container">
      <div className="stats-header">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="stats-cards">
        <div className="stat-card card-1">
          <img src={graph} alt="brand rec image" />
          <h4>Brand Recognition</h4>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="stat-card card-2">
          <img src={record} alt="record image" />
          <h4>Detailed Records</h4>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="stat-card card-3">
          <img src={brushes} alt="brushes image" />
          <h4>Fully Customizable</h4>
          <p>
            mprove brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
