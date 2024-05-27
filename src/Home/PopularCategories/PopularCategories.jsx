import React from 'react'
import styles from './PopularCategories.module.css';
import { Link } from 'react-router-dom';

const PopularCategories = () => {
  return (
    <div className={styles.category_section}>
        <div className={styles.head}>
        <span className={styles.title}>
            Popular Categories
        </span>
        <span className={styles.text}>Discover Our Hair Care & Body Care Essentials</span>
        </div>
      <div className={styles.categories}>
        <span className={styles.category}><Link to="/shampoo"> Shampoo</Link></span>
        <span className={styles.category}><Link to="/hair">Hair mask</Link></span>
        <span className={styles.category}><Link to="/gifting">Gifting</Link></span>
        <span className={styles.category}><Link to="/body-wash">Body wash</Link></span>
        <span className={styles.category}><Link to="/body-lotion">Body lotion</Link></span>
        <span className={styles.category}><Link to="/face-care">Face care</Link></span>
      </div>
    </div>
  )
}

export default PopularCategories
