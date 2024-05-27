import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import {LiaUserSolid} from 'react-icons/lia';
import {BsBasket} from 'react-icons/bs';
import {AiOutlineSearch} from 'react-icons/ai';

const Header = () => {
  const[cart,setCart] = useState(0);
  return (
    <div className={`${styles.header_container} ${styles.dFlex}`}>
        <div className={styles.logo_image}>
      <Link to="/"><img src="images/LBP_logo.avif" alt="" /></Link>
      </div>
      <div className={styles.header_components}>
      <Link to="/new-launches">New Launches</Link>
      <Link to="/best-sellers">Bestsellers</Link>
      <Link to="/hair-care">Hair Care</Link>
      <Link to="/body-care">Body Care</Link>
      <Link to="/face-care">Face Care</Link>
      <Link to="/shop-by-ingredients">Shop By Ingredients</Link>
      <Link to="/value-combo">Value Combo</Link>
      <Link to="/offer" className={styles.offer}>Buy 3 @ ₹ 1399</Link>
      <Link to="/hot-deals">Hot Deals</Link>
      </div>
      <div className={styles.header_search_bar}>
        <span className={styles.search_icon}><AiOutlineSearch/></span>
        <input type="search" placeholder='Search products here'/>
      </div>
      <div className={`${styles.header_user_details} ${styles.dFlex}`}>
        <div className={styles.user_profile}><Link to="/sign-in"><LiaUserSolid/></Link></div>
        <div className={styles.user_cart}><Link to="/cart"><BsBasket/><span className={styles.count}>{cart}</span></Link></div>
      </div>
    </div>
  )
}

export default Header
