import React, { useState } from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  const [like, setLike] = useState(false);
  const favoriteHandlerAdd = (event) => {
    setLike((current) => !current);
  };
  return (
    <div className="container">
      <div className="card">
        <img src={props.item.img} alt="badachro"></img>
        <div className="card-info">
          <span className="bold">{props.item.location}</span>
          <span className="review">
            <FontAwesomeIcon icon={faStar} />
            {props.item.rating}
          </span>
        </div>
        <div className="more-info">
          <span className="gray">{props.item.distance} kilometeres away</span>
          <span className="gray">
            {props.item.month} {props.item.startDay} - {props.item.endDay}
          </span>
          <span>
            <b>lei {props.item.price}</b> night
          </span>
        </div>
        <FontAwesomeIcon
          icon={faHeart}
          className="heart-icon"
          id={like ? "red" : " "}
          size="xl"
          onClick={favoriteHandlerAdd}
        />
      </div>
    </div>
  );
}
