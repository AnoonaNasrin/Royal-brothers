import React from "react";
import TopBar from "../../Components/TopBar/TopBar";
import DatePicker from "../../Components/DatePicker/DatePicker";
import Card from "../../Components/Card/Card"
import Image from "../../Components/Image/Image";
import ArrowIcon from "@mui/icons-material/ArrowForward";

import "./Home.css";

export default function Home() {
  return (
    <>
      <TopBar />
      <div className="space"></div>
      <section className="main-content">
        <div className="box">
          <h1>Search your next ride</h1>
          <div>
            <h5>Pickup</h5>
            <DatePicker />
          </div>
          <div>
            <h5>Dropoff</h5>
            <DatePicker />
          </div>
          <button className="royal-button">Search</button>
        </div>
      </section>
      <section className="main-content-two">
        <div className="tools">
          <div className="tools-one">
            <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_sanitized-a37325c03fb50fd9b2783d574ba67c40cb7b8a90d5951a85f72095904943e1d6.png" />
            <span>Sanitized Vehicles</span>
          </div>
          <div className="tools-one">
            <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_insurance-84ee18a118bee4cfc4f774e0dbdb5d24431af458eb583d5d1c5822801e388764.png" />
            <span>Vehicle Insurance</span>
          </div>
          <div className="tools-one">
            <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_assistance-ec66ebeeb0ebb01468fc1729165040e172820de83d5037cf47a73f4e19177d68.png" />
            <span>24/7 Roadside Assistance</span>
          </div>
          <div className="tools-one">
            <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_maintainence-4ac25e7eb9ad6f8b78ec52640a7310d8083a21823e1fb54ca9872076c2bc5f34.png" />
            <span>Bike Maintenance</span>
          </div>
        </div>
        <button className="royal-button one">
          Subscribe now <ArrowIcon />
        </button>
      </section>
      <section className="main-section">
        <h1 className="fleet">Our Fleet</h1>
        <div className="main-content-three">
          <Card
            name="Honda Activa 5G"
            image="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/233/medium/HONDA_ACTIVA_5G.png?1660731811"
            price="₹18/hour"
          />
          <Card
            name="Honda Activa 3G"
            image="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/233/medium/HONDA_ACTIVA_5G.png?1660731811"
            price=" ₹19/hour"
          />
          <Card
            name="Royal Enfield Classic 350"
            image="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/007/medium/ROYAL_ENFIELD_CLASSIC_350.png?1660720171"
            price="₹47/hour"
          />
        </div>
        <div>
          <p className="p-sentence">
            *All prices are exclusive of taxes and fuel. Images used for
            representation purposes only, actual color may vary.
          </p>
        </div>
      </section>
      <section className="main-content-four">
        <h1 className="quality">We believe in quality</h1>
        <Image/>
      </section>
      {/* <footer className="main-content-five" ></footer>  */}
    </>
  );
}
