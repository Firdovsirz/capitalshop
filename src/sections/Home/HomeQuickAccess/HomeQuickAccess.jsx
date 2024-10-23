import React from 'react';
import { useTranslation } from 'react-i18next';
import "../HomeQuickAccess/HomeQuickAccess.css";
import ManFashion from "../../../assets/Home/manFashionAccess.jpeg";
import BabyFashion from "../../../assets/Home/babyFashionAccess.jpg";
import WomenFashion from "../../../assets/Home/womenFashionAccess.jpg";


export default function HomeQuickAccess() {
    const { t } = useTranslation();
    const accessInfo = ["Men's Fashion", "Women's Fashion", "Baby Fashion"];
    const accessBg = [ManFashion, WomenFashion, BabyFashion];
    return (
        <section className='home-quick-access-section'>
                    <div className='home-access-container'>
                        <img src={ManFashion} alt="" className='access-img' />
                        <div className='home-access-txt'>
                            <h3>{t('home-quick-access-man', {ns: 'home'})}</h3>
                            <p className='shop-now-access'>{t('home-quick-access-btn', {ns: 'home'})}</p>
                        </div>
                    </div>
                    <div className='home-access-container'>
                        <img src={WomenFashion} alt="" className='access-img' />
                        <div className='home-access-txt'>
                            <h3>{t('home-quick-access-woman', {ns: 'home'})}</h3>
                            <p className='shop-now-access'>{t('home-quick-access-btn', {ns: 'home'})}</p>
                        </div>
                    </div>
                    <div className='home-access-container'>
                        <img src={BabyFashion} alt="" className='access-img' />
                        <div className='home-access-txt'>
                            <h3>{t('home-quick-access-baby', {ns: 'home'})}</h3>
                            <p className='shop-now-access'>{t('home-quick-access-btn', {ns: 'home'})}</p>
                        </div>
                    </div>
        </section>
    )
}
