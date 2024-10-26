import React from 'react';
import "../HomeMayLike/HomeMayLike.css";
import { useTranslation } from 'react-i18next';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SliderFirst from "../../../assets/Home/HomeLike/slider1.jpg";
import SliderThird from "../../../assets/Home/HomeLike/slider3.jpg";
import SliderSecond from "../../../assets/Home/HomeLike/slider2.jpg";

export default function HomeMayLike() {
    const { t } = useTranslation();
    const sliderImg = [SliderFirst, SliderSecond, SliderThird];
    const likeProducts = [
        {
            image: SliderFirst,
            name: "Cashmere Tank + Bag",
            price: 59,
            disPrice: 120
        }, {
            image: SliderSecond,
            name: "Cashmere Tank + Bag",
            price: 59,
            disPrice: 120
        }, {
            image: SliderThird,
            name: "Cashmere Tank + Bag",
            price: 59,
            disPrice: 120
        }, {
            image: SliderFirst,
            name: "Cashmere Tank + Bag",
            price: 59,
            disPrice: 120
        }
    ];
    return (
        <section className='home-may-like-section'>
            <h2>{t('home-may-like-head-text', {ns: 'home'})}</h2>
            <div className='like-product-container'>
                {likeProducts.map((item) => {
                    return (
                        <div className='may-like-pro-container'>
                            <div className='may-like-img-container'>
                                <img src={item.image} alt="product" />
                                <div className='like-card-rools'>
                                    <ul>
                                        <li>
                                            <ShoppingCartIcon className="trend-card-cart-tool" />
                                        </li>
                                        <li>
                                            <FavoriteIcon className="trend-card-fav-tool" />
                                        </li>
                                        <li>
                                            <ZoomInIcon className="trend-card-zoom-tool" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='may-like-pro-det'>
                                <h5>{item.name}</h5>
                                <div>
                                    <p>{`${item.price} $`}</p>
                                    <p>{`${item.disPrice} $`}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
