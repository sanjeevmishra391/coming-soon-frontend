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
        <span>{props.name}</span>
      </div>
    </div>
  );
};

export default Card;
