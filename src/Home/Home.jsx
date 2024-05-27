import React from 'react'
import styles from './Home.module.css';
import HomeSlider from './HomeSlider/HomeSlider';
import PopularCategories from './PopularCategories/PopularCategories';
import SellingFast from './SellingFast/SellingFast';
import Values from './LBP Values/Values.jsx';

const Home = () => {
    return(
        <div>
            <HomeSlider />
            <PopularCategories />
            <SellingFast />
            <Values />
        </div>
    )
}
export default Home;
