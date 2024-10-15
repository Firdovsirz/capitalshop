import React from 'react';
import "../HomeQuickAccess/HomeQuickAccess.css";
import ManFashion from "../../../assets/Home/manFashionAccess.jpeg";
import BabyFashion from "../../../assets/Home/babyFashionAccess.jpg";
import WomenFashion from "../../../assets/Home/womenFashionAccess.jpg";


export default function HomeQuickAccess() {
    const accessInfo = ["Men's Fashion", "Women's Fashion", "Baby Fashion"];
    const accessBg = [ManFashion, WomenFashion, BabyFashion];
    return (
        <section className='home-quick-access-section'>
            {accessInfo.map((item, index) => {
                return (
                    <div className='home-access-container'>
                        <img src={accessBg[index]} alt="" className='access-img' />
                        <div className='home-access-txt'>
                            <h3>{item}</h3>
                            <p className='shop-now-access'>Show Now</p>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}
