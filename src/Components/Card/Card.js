import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card-main">
      <div className="card-two">
        <h4>{props.name}</h4>
        <img src={props.image}></img>
        <div style={{width:"100%",height:"0.7px",backgroundColor:"black",opacity:"0.2"}}></div>
        <h5>{props.price}</h5>
        <button className="royal-button button-card">Book Now</button>
      </div>
    </div>
  );
}
