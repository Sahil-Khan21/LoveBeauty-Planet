import React, { useEffect, useState } from "react";
import styles from "./Values.module.css";
import './Values.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Data from "./Data";

const Values = () => {

  const settings = {
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    arrows: false,
    // prevArrow: <IoIosArrowBack />,
    // nextArrow: <IoIosArrowForward />,
  };
  return (
    <div className={styles.valueContainer}>
      <div className={styles.textContainer}>
        <div className={styles.value_title_container}>
          <div className={styles.valueContainerTitle}>
            Love Beauty And Planet Values
          </div>
          <div className={styles.valueContainerText}>
            Get To Know Us & Our Formulas Better
          </div>
        </div>
      </div>
      <div className={styles.page}>
        <Slider {...settings} className={`${styles.slick_cstm} custom-slick`}>
          {Data.map((item)=>{
            
              let backgroundColor;
      
              // Set specific background colors for the first three slides
              if (item.id === 1) {
                backgroundColor = "#7EA8BC";
              } else if (item.id === 2) {
                backgroundColor = "#EF9A9A";
              } else if (item.id === 3) {
                backgroundColor = "#EAB344";
              } else {
                // Repeat the pattern for the fourth and fifth slides
                const patternIndex = (item.id - 1) % 3;
                backgroundColor = ['#7EA8BC', '#EF9A9A', '#EAB344'][patternIndex];
              }
            return(
              <div className={styles.page_container}>
                <div id={item.id} className={styles.page_img}>
                  <img src={item.img} alt={item.heading} />
                </div>
                <div className={styles.page_text} style={{backgroundColor}}>
                  <h4 className={styles.page_title}>{item.heading}</h4>
                  <div className={styles.description}>{item.description}</div>
                  <div className={styles.discover}>Discover</div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Values;
