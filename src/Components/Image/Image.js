import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const slideImages = [
  {
    url: "https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-one-8c7f76cbbc58a89e95e8fcc1ab03d3d4cf12ef680989755fcf01f3a725d5d775.jpg",
  },
  {
    url: "https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-two-2d63ed83b9f2b4003344ac868bb2a42d29efe841bb2c5894ac53bd6af85adb86.jpg",
  },
  {
    url: "https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-three-a8787ad27e9ea8ab39d164f233b0995c76d59c4a517c0313e11a4122d6309038.jpg",
  },
];
export default function Image() {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="slide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}></div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
