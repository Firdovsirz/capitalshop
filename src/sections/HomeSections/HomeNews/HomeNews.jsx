import React from 'react';
import "../HomeNews/HomeNews.css";
import { useTranslation } from 'react-i18next';
import Blog1 from "../../../assets/Home/HomeNews/blog1.jpg";
import Blog2 from "../../../assets/Home/HomeNews/blog2.jpg";
import Blog3 from "../../../assets/Home/HomeNews/blog3.jpg";

export default function HomeNews() {
    const { t } = useTranslation();
    return (
        <section className='home-news-section'>
            <h3>{t('home-news-head-text', { ns: 'home' })}</h3>
            <div className='home-news-card-container'>
                <div className="blog-card-container">
                    <div className='blog-img-container'>
                        <img src={Blog1} alt="blog" />
                    </div>
                    <div className='blog-text-container'>
                        <h4>{t('home-blog-head-text', { ns: 'home' })}</h4>
                        <h2>{t('home-blog-first-main-head-text', { ns: 'home' })}</h2>
                        <p>{t('home-blog-first-desc-text', { ns: 'home' })}</p>
                        <button className='blog-read-more-btn'>{t('home-blog-read-btn', { ns: 'home' })}</button>
                    </div>
                </div>
                <div className="blog-card-container">
                    <div className='blog-img-container'>
                        <img src={Blog2} alt="blog" />
                    </div>
                    <div className='blog-text-container'>
                        <h4>{t('home-blog-head-text', { ns: 'home' })}</h4>
                        <h2>{t('home-blog-second-main-head-text', { ns: 'home' })}</h2>
                        <p>{t('home-blog-second-desc-text', { ns: 'home' })}</p>
                        <button className='blog-read-more-btn'>{t('home-blog-read-btn', { ns: 'home' })}</button>
                    </div>
                </div>
                <div className="blog-card-container">
                    <div className='blog-img-container'>
                        <img src={Blog3} alt="blog" />
                    </div>
                    <div className='blog-text-container'>
                        <h4>{t('home-blog-head-text', { ns: 'home' })}</h4>
                        <h2>{t('home-blog-third-main-head-text', { ns: 'home' })}</h2>
                        <p>{t('home-blog-third-desc-text', { ns: 'home' })}</p>
                        <button className='blog-read-more-btn'>{t('home-blog-read-btn', { ns: 'home' })}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
