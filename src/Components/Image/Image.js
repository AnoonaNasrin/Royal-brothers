import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Image.css";

const slideImages = [
  {
    url: "https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-one-8c7f76cbbc58a89e95e8fcc1ab03d3d4cf12ef680989755fcf01f3a725d5d775.jpg",
    heading: "We're socially celebrated",
    caption:
      "Our customer centic approach has got us amazing reviews. Be it any platform, you will see many users recommending our service.",
  },
  {
    url: "https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-two-2d63ed83b9f2b4003344ac868bb2a42d29efe841bb2c5894ac53bd6af85adb86.jpg",
    heading: "Hello",
    caption: "fasdfdasfasdfsdafsda fsda fsdaf dasfasdfsdafsdafdsa:",
  },
  {
    url: "https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-three-a8787ad27e9ea8ab39d164f233b0995c76d59c4a517c0313e11a4122d6309038.jpg",
    heading: "fasdf",
    caption:
      "fdaswfasd fsdafd safdsafdsafsdafdasfdasfsdafdasfdsf ds fsdaf dsa f",
  },
];
export default function Image() {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide custom-slide" key={index}>
            <div
              style={{
                backgroundImage: `url(${slideImage.url})`,
                objectFit: "cover",
                height: "100vh",
              }}
            ></div>
            <div className="image-content">
              <h2 className="image-heading">{slideImage.heading}</h2>
              <p className="image-caption">{slideImage.caption}</p>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
