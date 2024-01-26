import React from "react";
import "./jobCard.css";
import { pro5, pro6, pro7, pro8 } from "../../images";
import { CalendarMonthRoundedIcon } from "../../../icons";
import { Link } from "react-router-dom";
function JobCard() {
  return (
    <section className="card-container">
      <article>
        <div className="card-image-container">
          <img src={pro5} alt="" />
          <button className="card-explore-btn">Explore</button>
        </div>
        <p className="card-job-type">Governtment</p>
        <h4>Add Heading for the job description that will go here</h4>
        <p className="job-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          itaque nihil iste nesciunt, deserunt atque dolorem adipisci.
        </p>
        <div className="card-footer">
          <div>
            <span>
              <p>Form Date</p>
              <CalendarMonthRoundedIcon />
            </span>
            12/34/6
          </div>
          <div>
            <span>
              <p>Exam Date</p>
              <CalendarMonthRoundedIcon />
            </span>
            21/2/2024
          </div>
        </div>
      </article>
    </section>
  );
}

export default JobCard;
