import React from "react";
import "./Card.css";

const Card = (props) => {
  const bgStyle = {
    backgroundColor: props.bgcolor,
  };
  return (
    <div className="Card">
      <div className="bgcolor" style={bgStyle}></div>
      <figure>
        <img className="user__img" src={props.profilePic} alt="userimg" />
      </figure>
      <div className="wrapper">
        <div className="name__and__id">
          <div className="username">{props.name}</div>
          <div className="userid">{props.san}</div>
        </div>
        <div className="about">about</div>
        <div className="user__info">{props.userInfo}</div>
        <div className="sites">
          <div>
            web: <a href={props.social}>{props.social}</a>
          </div>
          <div>
            twitter: <a href={props.social}>{props.social}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
