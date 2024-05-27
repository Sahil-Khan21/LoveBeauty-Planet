import React from "react";
import styles from "./HomeSlider.module.css";
import "./HomeSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImages from "./SliderImage";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: false,
  prevArrow: <IoIosArrowBack />,
  nextArrow: <IoIosArrowForward />,
};
const HomeSlider = () => {
  return (
    <div className={styles.slider_container}>
      <Slider {...settings}>
        {SliderImages.map((image) => {
          return (
            <div key={image.id} className={styles.image_container}>
              <img src={image.img} alt={image.title} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HomeSlider;
