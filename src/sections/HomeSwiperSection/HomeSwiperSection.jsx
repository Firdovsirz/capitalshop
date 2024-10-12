import 'swiper/css';
import React from 'react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../HomeSwiperSection/HomeSwiperSection.css";

export default function HomeSwiperSection() {
    return (
        <section className='home-swiper-section'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className='home-first-slide home-slide'>
                    <div className='home-slide-txt'>
                        <h3>Fashion Sale</h3>
                        <h2>Minimal Menz Style</h2>
                        <p>
                            Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure,
                            delectus dignissimos facilis neque nulla earum.
                        </p>
                        <button className='slide-shop-now-btn'>Shop Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='home-second-slide home-slide'>
                    <div className='home-slide-txt'>
                        <h3>Fashion Sale</h3>
                        <h2>Minimal Menz Style</h2>
                        <p>
                            Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure,
                            delectus dignissimos facilis neque nulla earum.
                        </p>
                        <button className='slide-shop-now-btn'>Shop Now</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section >
    )
}
