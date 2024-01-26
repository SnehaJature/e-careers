import React from "react";
import "./achiment-counter.css";
import {
  counterIcon1,
  counterIcon2,
  counterIcon3,
  counterIcon4,
  lineArrow,
} from "../../images";

const counterCardData = [
  {
    icon: counterIcon1,
    count: 500,
    text: "Satsified Coustomers",
  },
  {
    icon: counterIcon2,
    count: 300,
    text: "Online Services",
  },
  {
    icon: counterIcon3,
    count: 240,
    text: "Support Staff",
  },
  {
    icon: counterIcon4,
    count: 100,
    text: "Secure & Trusted Place",
  },
];

function AchimentCounter() {
  return (
    <div className="counter-bg">
      <div className="counter-container">
        {counterCardData.map((val, ind) => (
          <>
            <div className="counter-card">
              <div className="icon-img-wrapper">
                <img src={val.icon} alt="" />
              </div>
              <h1>{val.count}</h1>
              <h4>{val.text}</h4>
            </div>

            {ind !== counterCardData.length - 1 && (
              <img className="arrow-img" src={lineArrow} alt="" srcset="" />
            )}
          </>
        ))}
      </div>
      {/* <div className="arrows-container">
        <img src={lineArrow} alt="" srcset="" />
        <img src={lineArrow} alt="" srcset="" />
      </div> */}
    </div>
  );
}

export default AchimentCounter;
