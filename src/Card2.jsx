import React from "react";
import profile2 from "./images/profile2.png";
import profile1 from "./images/profile1.png";
import profile3 from "./images/profile3.png";

// ✅ map image filenames to actual imported images
const imageMap = {
  "profile2.png": profile2,
  "profile1.png": profile1,
  "profile3.png": profile3,
};

function Card2(props) {
  return (
    <div className="card-container">
      <div className="cards-img">
        {/* ✅ Use mapped image */}
        <img className="rounded" src={imageMap[props.img]} alt={props.name} />
      </div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default Card2;
