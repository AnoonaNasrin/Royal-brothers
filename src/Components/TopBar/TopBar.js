import React from "react";
import logo from "../../assets/royalLogo.png"
import IconArrowDown from "@mui/icons-material/KeyboardArrowDown";
import "./TopBar.css";

export default function TopBar() {
  return (
    <header>
      <nav>
        <div className="content-one">
          <div className="menu-bar">
            <img
              className="side-menu"
              src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/sidenav-c7ead1a665e60b9d9c16560111f4e4a2561c85b41fb42b83aa879b11056eec14.png"
            />
            <img className="logo" src={logo} />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <img 
                className="nav-img"
                src="https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/RBX_logo-7618eb109a17dcfa44e88596c831606746fc124a000553458d6b7fc1bf9a6345.png"
              />
            </div>
            <div className="nav-item">Tarif</div>
            <div className="nav-item">What's new? <IconArrowDown/></div>
            <div className="nav-item">Offers</div>
            <div className="nav-item">Partner with us <IconArrowDown/></div>
          </div>
        </div>
        <div className="content-two">
          <div className="location">
            <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/location-71f31ec08c06cf6736a1d12d6381dfc5786c237acdb690006334bd670e011904.png" />
            <span>Bangulore</span>
          </div>
          <div className="authentication">
            <button className="royal-button login-btn">Login</button>
            <button className="royal-button">Sign up</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
