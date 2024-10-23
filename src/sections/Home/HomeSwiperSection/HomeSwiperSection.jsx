import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../HomeSwiperSection/HomeSwiperSection.css";

export default function HomeSwiperSection() {

    const { t } = useTranslation();

    AOS.init({
        duration: 1000,
        once: false,
    });
    const handleSlideChange = () => {
        console.log("changed");
        AOS.refresh();
    }
    return (
        <section className='home-swiper-section'>
            <Swiper
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                onSlideChange={handleSlideChange}
            >
                <SwiperSlide className='home-first-slide home-slide'>
                    <div className='home-slide-txt'>
                        <h3 data-aos="fade-down" data-aos-anchor-placement="top-bottom">
                            {t('home-swiper-first-txt-fashion', { ns: 'home' })}
                        </h3>
                        <h2 data-aos="fade-down" data-aos-anchor-placement="top-bottom" style={{ textAlign: "center" }}>
                            {t('home-swiper-first-txt-heading', { ns: 'home' })}
                        </h2>
                        <p>
                            {t('home-swiper-first-txt-desc', { ns: 'home' })}
                        </p>
                        <button className='slide-shop-now-btn'>
                            {t('home-swiper-first-btn', { ns: 'home' })}
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='home-second-slide home-slide'>
                    <div className='home-slide-txt'>
                        <h3 data-aos="fade-down" data-aos-anchor-placement="top-bottom">
                            {t('home-swiper-first-txt-fashion', { ns: 'home' })}
                        </h3>
                        <h2 data-aos="fade-down" data-aos-anchor-placement="top-bottom" style={{ textAlign: "center" }}>
                            {t('home-swiper-first-txt-heading', { ns: 'home' })}
                        </h2>
                        <p>
                            {t('home-swiper-first-txt-desc', { ns: 'home' })}
                        </p>
                        <button className='slide-shop-now-btn'>
                            {t('home-swiper-first-btn', { ns: 'home' })}
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}