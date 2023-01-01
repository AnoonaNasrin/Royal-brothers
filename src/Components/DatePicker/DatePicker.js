import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./DatePicker.css";

export default function DatePicker() {
  return (
    <div className="datestime">
      <div className="date">
        <img
          src="https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/date-609be488aaef36d8f84a823b97517d5551821ab02804e2f745b5c80550dbc46e.png"
          aria-hidden="true"
          className="calender"
        />
        <input className="dateInput" value="Date" type="text" />
      </div>
      <div className="date">
        <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/time-b6ac387420760c4f2c4ea8bf0b7dc644a7d2d3b1f77ba6987b095c6980f25ce0.png" className="calender"/>
        <input className="dateIn" value="Time" type="text" />
      </div>
      
    </div>
  );
}
