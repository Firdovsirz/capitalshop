import 'swiper/css';
import React from 'react';
import 'swiper/css/navigation';
import "../HomeComments/HomeComments.css";
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import CommentImg from "../../../assets/Home/founder.png";

export default function HomeComments() {
  const { t } = useTranslation();
  const comments = [
    {
      desc: "Absolutely love this shop! The clothing selection is always on-trend, high-quality, and unique—perfect for finding pieces that stand out. The staff is friendly and knowledgeable, always happy to help find just the right style.",
      name: "Petey Cruiser",
      image: CommentImg,
    }, {
      desc: "Absolutely love this shop! The clothing selection is always on-trend, high-quality, and unique—perfect for finding pieces that stand out. The staff is friendly and knowledgeable, always happy to help find just the right style.",
      name: "Petey Cruiser",
      image: CommentImg,
    }, {
      desc: "Absolutely love this shop! The clothing selection is always on-trend, high-quality, and unique—perfect for finding pieces that stand out. The staff is friendly and knowledgeable, always happy to help find just the right style.",
      name: "Petey Cruiser",
      image: CommentImg,
    }, {
      desc: "Absolutely love this shop! The clothing selection is always on-trend, high-quality, and unique—perfect for finding pieces that stand out. The staff is friendly and knowledgeable, always happy to help find just the right style.",
      name: "Petey Cruiser",
      image: CommentImg,
    }
  ];
  return (
    <section className='home-comments-section'>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        loop={true}
        className="mySwiper">
        {comments.map((item) => {
          return (
            <SwiperSlide className='slide-container'>
              <h3>{t('home-comments-head-text', {ns: 'home'})}</h3>
              <p>{item.desc}</p>
              <div className='comment-user-info'>
                <img src={item.image} alt="user-profile" />
                <h5>{item.name}</h5>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}
