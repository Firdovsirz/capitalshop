import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../HomeSwiperSection/HomeSwiperSection.css";

export default function HomeSwiperSection() {

    // Initialize AOS
    AOS.init({
        duration: 1000, // Animation duration
        once: false, // Animation happens every time
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
                        <h3 data-aos="fade-down" data-aos-anchor-placement="top-bottom">Fashion Sale</h3>
                        <h2 data-aos="fade-down" data-aos-anchor-placement="top-bottom">Minimal Menz Style</h2>
                        <p>
                            Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure,
                            delectus dignissimos facilis neque nulla earum.
                        </p>
                        <button className='slide-shop-now-btn'>Shop Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='home-second-slide home-slide'>
                    <div className='home-slide-txt'>
                        <h3 data-aos="fade-left" data-aos-anchor-placement="top-bottom">Fashion Sale</h3>
                        <h2 data-aos="fade-down" data-aos-anchor-placement="top-bottom">Minimal Menz Style</h2>
                        <p>
                            Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure,
                            delectus dignissimos facilis neque nulla earum.
                        </p>
                        <button className='slide-shop-now-btn'>Shop Now</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}