import React, { useState } from "react";
import {
  ArrowBackIosNewOutlinedIcon,
  ArrowForwardIosOutlinedIcon,
  RadioButtonCheckedOutlinedIcon,
} from "../../../icons";

import { carouselImgs } from "../../images";
import "./carousel.css";

function Carousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  function togglePrev() {
    setCarouselIndex((index) => {
      if (index === 0) return carouselImgs.length - 1;
      return index - 1;
    });
  }

  function toggleNext() {
    setCarouselIndex((index) => {
      if (index === carouselImgs.length - 1) return 0;
      return index + 1;
    });
  }

  return (
    <>
      <div className="carousel-slider" style={{ position: "relative" }}>
        <div className="carousel-item-contanier">
          {carouselImgs.map((val, ind) => (
            <img
              key={ind}
              src={val}
              className="carousel-img"
              style={{ translate: `${-100 * carouselIndex}%` }}
            />
          ))}
        </div>

        <button onClick={togglePrev} id="carousal-nav-btns" style={{ left: 0 }}>
          <ArrowBackIosNewOutlinedIcon />
        </button>

        <button onClick={toggleNext} id="carousal-nav-btns" style={{ right: 0 }}>
          <ArrowForwardIosOutlinedIcon />
        </button>

        <div className="indicator-btn-container">
          {carouselImgs.map((_, ind) => (
            <button key={ind} className="indicator-btn">
              <RadioButtonCheckedOutlinedIcon />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Carousel;
