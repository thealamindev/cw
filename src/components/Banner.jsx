import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";


const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow/>,
    
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <div className="bg-[url(/bannerbg.jpg)] bg-no-repeat bg-center bg-cover">
            <div className="bg-black opacity-70 py-[250px]"></div>
          </div>
        </div>
        <div>
          <div className="bg-[url(/bannerbg.jpg)] bg-no-repeat bg-center bg-cover">
            <div className="bg-black opacity-70 py-[250px]"></div>
          </div>
        </div>
        <div>
          <div className="bg-[url(/bannerbg.jpg)] bg-no-repeat bg-center bg-cover">
            <div className="bg-black opacity-70 py-[250px]"></div>
          </div>
        </div>
        <div>
          <div className="bg-[url(/bannerbg.jpg)] bg-no-repeat bg-center bg-cover">
            <div className="bg-black opacity-70 py-[250px]"></div>
          </div>
        </div>

      </Slider>
    </>
  );
};

export default Banner;
