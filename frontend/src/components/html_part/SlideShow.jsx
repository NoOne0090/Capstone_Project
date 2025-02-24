import React from "react";
import '../css_part/slideshow.css'
// import slideimg1 from '../img_part/nature1.jpg';
// import slideimg2 from '../img_part/mountains.jpg';
// import slideimg3 from '../img_part/snow.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlideShow({images}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };

  console.log(images)

  return (
    <div className="slider-container" >
      <Slider {...settings}>
        {/* <div style={{width: '100%', height: '100%'}}>
          <img src={slideimg1} alt="Slide 1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div>
          <img src={slideimg3} alt="Slide 3" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div> */}
        {images.map((img, index) => (
          <>
            <div key={index} className="slider-image">
              <img src={img} alt="Error" />
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
}
