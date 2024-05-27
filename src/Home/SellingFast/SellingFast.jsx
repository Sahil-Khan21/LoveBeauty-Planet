import React, { useState } from "react";
import styles from "./SellingFast.module.css";
import './SellingFast.css'
import { Link } from "react-router-dom";
import SellingFastData from "./SellingFastData";
import Slider from "react-slick";
import {AiFillStar} from 'react-icons/ai'

const settings = {
    dots: false,
    infinite: false,
    initialSlide: 0,
    speed: 500,
    slidesToShow: 4.2,
    slidesToScroll: 1
  };

const SellingFast = () => {

  const[cart,setCart] = useState(0);

  const cartVal = () => {
    setCart(cart+1);
    console.log(cart)
  }
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <b className={styles.headingText}>Selling Fast</b>
      </div>
      <Link to="/view-all" className={styles.view_all_btn}> View all </Link>

      <div className={styles.slider}>
        <Slider {...settings}>
        {
            SellingFastData.map((item)=>{
                return(
                    <div key={item.id} className={styles.productSlider}>
                        <div className={styles.imgContainer}>
                            <img src={item.image} alt="" />
                            <span className={styles.tag}>{item.tag}</span>
                            <span className={styles.buy3offer}>{item.offer1}</span>
                            <span className={styles.buy4offer}>{item.offer2}</span>
                        </div>
                        <div className={styles.textContainer}>
                            <span className={styles.specs}>{item.spec}</span>
                            <p className={styles.productDesc}>{item.title}</p>
                            <div className={styles.rating}>
                                <AiFillStar />
                                <span className={styles.ratingNumber}>{item.rating}</span>
                                <span className={styles.bar}>|</span>
                                <img src="images/verified-icon.png" alt="" />
                                <span className={styles.verifiedUser}>{item.verified} verified</span>
                            </div>
                            <div className={styles.price}>
                            <span className={styles.comparePrice}>₹{item.comparePrice}</span>
                            <span className={styles.actualprice}>₹{item.price}</span>
                            <span className={styles.discount}>{((item.comparePrice-item.price)/item.comparePrice)*100}% Off</span>
                            <div className={styles.randomNumber}></div>
                            </div>
                        </div>
                        <button className={styles.addCartBtn} onClick={cartVal}>Add to cart</button>
                    </div>
                )
            })
        }
        </Slider>
      </div>
    </div>
  );
};

export default SellingFast;
