import React from "react";
import "./featureInfo.css";

import { builder, enrollment, payment, report } from "../../images";
function FeatureInfo() {
  return (
    <>
      <div className="featues-main-container">
        <div className="video-box"></div>
        <div className="features-box">
          <h1>Which Features</h1>
          <h1>We Provide You</h1>
          <div className="features">
            <div className="features-card">
              <img src={builder} alt="" />
              <h3>Course Entrollment</h3>
            </div>
            <div className="features-card">
              <img src={enrollment} alt="" />
              <h3>Course Entrollment</h3>
            </div>
            <div className="features-card">
              <img src={payment} alt="" />
              <h3>Course Entrollment</h3>
            </div>
            <div className="features-card">
              <img src={report} alt="" />
              <h3>Course Entrollment</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureInfo;
