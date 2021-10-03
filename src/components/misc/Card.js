import React from "react";
import FadeIn from "react-lazyload-fadein";

import sample from "./svgs/sample_pic.jpg";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-cont">
      <div className="card-img-cont">
        <FadeIn width="100%">
          {(onload) =>
            props.image !== "" ? (
              <img src={props.image} onLoad={onload} className="card-img" />
            ) : (
              <img src={sample} onLoad={onload} className="card-img" />
            )
          }
        </FadeIn>{" "}
      </div>
      <div className="card-person-name">
        <p>{props.name}</p>
      </div>
      <div className="card-person-job">
        <p>{props.job}</p>
      </div>
    </div>
  );
};

export default Card;
