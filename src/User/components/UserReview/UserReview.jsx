import React, { useState } from "react";
import "./user-review.css";
import {
  avatar1,
  avatar2,
  avatar3,
  testimonial1,
  testimonial2,
} from "../../images";

function UserReview() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const dummyObject = [
    {
      comment: `Loremsssssss`,
      profilePic: avatar1,
      name: "Amaar",
      userName: "aamudi",
      zIndex: 2,
    },
    {
      comment: `I was looking to develop my professional skills, but didn't have the time or resources to attend in-person classes. That's when I discovered Oppida. The platform offered a wide range of courses that fit my needs, and I was able to complete them on.
      `,
      profilePic: avatar2,
      name: "Pratik",
      userName: "Agent-P",
      zIndex: 3,
    },
    {
      comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem a veniam nisi explicabo dignissimos provident beatae
            soluta? Nesciunt neque cum fuga! Voluptate possimus minus ratione
            eligendi quia aliquid eius repellendus? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Illo tempore dolorem ut unde velit
            fugiat officia adipisci laboriosam nisi quae. Odit dicta sint
            consequatur officia quasi, et sit assumenda adipisci.`,
      profilePic: avatar3,
      name: "Pooja",
      userName: "poopoodi",
      zIndex: 0,
    },
  ];

  return (
    <div className="user-review-container">
      <div className="review-container">
        <h1>What Customers Say</h1>
        <h1>About Our Service</h1>
        <div className="review-carousel">
          {dummyObject.map((val, index) => (
            <div
              className="review-box"
              style={{ transform: `translateX(${carouselIndex * -100}%)` }}
            >
              <p>{val.comment}</p>
              <section className="review-user-profile">
                <img src={val.profilePic} />
                <div>
                  <h3>{val.name}</h3>
                  <p>{val.userName}</p>
                </div>
              </section>
            </div>
          ))}
        </div>
        <div className="review-carousel-indicator-btns">
          {dummyObject.map((val, index) =>
            index === carouselIndex ? (
              <button
                className="active-review-indicator-btn"
                value={index}
                key={index}
                onClick={(e) => setCarouselIndex(Number(e.target.value))}
              ></button>
            ) : (
              <button
                className="inactive-review-indicator-btn"
                value={index}
                key={index}
                onClick={(e) => setCarouselIndex(Number(e.target.value))}
              ></button>
            
            )
            
          )}
          <h5>0{carouselIndex + 1 }/0{dummyObject.length}</h5>
        </div>
      </div>
      <div className="review-img">
        <img src={testimonial1} alt="" />
        <img src={testimonial2} alt="" />
      </div>
    </div>
  );
}

export default UserReview;
