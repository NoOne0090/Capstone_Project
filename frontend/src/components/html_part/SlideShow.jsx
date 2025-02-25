import React from "react";
import '../css_part/slideshow.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlideShow({images}) {
  const settings = {
    dots: true,
    // infinite: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };

  // console.log("Images: ", images)
  const imageArray = Array.isArray(images) ? images: [images];
  // console.log("imageArray: ", imageArray)

  return (
    <div className="slider-container" >
      <Slider {...settings}>
        {imageArray.map((img, index) => (
            <div key={index} className="slider-image">
              <img src={img} alt="Error" />
            </div>
        ))}
      </Slider>
    </div>
  );
}
