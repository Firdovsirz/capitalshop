import "../HomeTrending/HomeTrending.css";
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from 'react';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenShoe from "../../../assets/Home/HomeTrending/Men/men-shoe.jpg";
import BabyFirst from "../../../assets/Home/HomeTrending/Baby/babyFirst.jpg";
import BabyThird from "../../../assets/Home/HomeTrending/Baby/babyThird.jpg";
import MenJacket from "../../../assets/Home/HomeTrending/Men/men-jacket.jpeg";
import BabyFourth from "../../../assets/Home/HomeTrending/Baby/babyFourth.webp";
import BabySecond from "../../../assets/Home/HomeTrending/Baby/babySecond.webp";
import MenShirt from "../../../assets/Home/HomeTrending/Men/men-shirt-blue.jpg";
import WomenRed from "../../../assets/Home/HomeTrending/Women/women-red-cloth.jpg";
import WomenGray from "../../../assets/Home/HomeTrending/Women/women-gray-cloth.jpg";
import MenBlueShirt from "../../../assets/Home/HomeTrending/Men/men-blue-shirt.webp";
import WomenWhite from "../../../assets/Home/HomeTrending/Women/women-white-cloth.jpg";

export default function HomeTrending() {
    const [selection, setSelection] = useState('');
    const { t } = useTranslation();
    const menCards = [
        {
            image: MenBlueShirt,
            name: 'Men Printed Casual Shirt',
            price: 50.9,
            disPrice: 120
        }, {
            image: MenShoe,
            name: 'Casual Men Shoe',
            price: 70.8,
            disPrice: 120
        }, {
            image: MenJacket,
            name: 'Casual Black Men Jacket',
            price: 1.1,
            disPrice: 120
        }, {
            image: MenShirt,
            name: 'Casual Blue Men Shirt',
            price: 1.1,
            disPrice: 120
        }
    ];
    const womenCards = [
        {
            image: WomenWhite,
            name: 'Cashmere Tank + Bag',
            price: 98.00,
            disPrice: 120
        }, {
            image: WomenRed,
            name: 'Cashmere Tank + Bag',
            price: 98.00,
            disPrice: 120
        }, {
            image: WomenGray,
            name: 'Cashmere Tank + Bag',
            price: 98.00,
            disPrice: 120
        }, {
            image: WomenWhite,
            name: 'Cashmere Tank + Bag',
            price: 98.00,
            disPrice: 120.00
        }
    ];
    const babyCards = [
        {
            image: BabyFirst,
            name: 'Cashmere Tank + Bag',
            price: 98.00,
            disPrice: 120
        }, {
            image: BabySecond,
            name: 'Cashmere Tank + Bag',
            price: 98.00,
            disPrice: 120
        }, {
            image: BabyThird,
            name: 'Cashmere Tank + Bag',
            price: 98.00,
            disPrice: 120
        }, {
            image: BabyFourth,
            name: 'Cashmere Tank + Bag',
            price: 98.00,
            disPrice: 120.00
        }
    ];
    const fashionCards = [
        {
            image: WomenWhite,
            name: 'Cashmere Tank + Bag',
            price: 98.00,
            disPrice: 120
        }, {
            image: MenBlueShirt,
            name: 'Cashmere Tank + Bag',
            price: 98.00,
            disPrice: 120
        }, {
            image: BabyThird,
            name: 'Cashmere Tank + Bag',
            price: 98.00,
            disPrice: 120
        }, {
            image: WomenRed,
            name: 'Cashmere Tank + Bag',
            price: 98.00,
            disPrice: 120.00
        }
    ]
    const trendingCards = selection === 'men' ? menCards : selection === 'women' ? womenCards : selection === 'baby' ? babyCards : selection === 'fashion' ? fashionCards : menCards;
    const handleTrendingCards = (e) => {
        if (e === 'men') {
            setSelection(e);
            trendingCards = menCards;
        } else if (e === 'women') {
            setSelection(e);
            trendingCards = womenCards;
        } else if (e === 'baby') {
            setSelection(e);
            trendingCards = babyCards;
        } else if (e === 'fashion') {
            setSelection(e);
            trendingCards = fashionCards;
        } else {
            setSelection(e);
            trendingCards = null;
        }
    }
    useEffect(() => {
        console.log(selection); // Log the updated selection value
    }, [selection]);
    return (
        <section className='home-trending-section'>
            <div className='home-trending-heading'>
                <div className='trending-head-txt'>
                    <h4>{t('home-trending-head-txt', { ns: 'home' })}</h4>
                </div>
                <div className='trending-heading-selection'>
                    <ul>
                        <li onClick={() => handleTrendingCards('men')} value={selection}>
                            {t('home-trending-selection-men', { ns: 'home' })}
                        </li>
                        <li onClick={() => handleTrendingCards('women')}>
                            {t('home-trending-selection-women', { ns: 'home' })}
                        </li>
                        <li onClick={() => handleTrendingCards('baby')}>
                            {t('home-trending-selection-baby', { ns: 'home' })}
                        </li>
                        <li onClick={() => handleTrendingCards('fashion')}>
                            {t('home-trending-selection-fashion', { ns: 'home' })}
                        </li>
                    </ul>
                </div>
            </div>
            <div className='home-trending-card-container'>
                {trendingCards.map((item) => {
                    return (
                        <div className="trending-card-container">
                            <div className="trend-card-img-container">
                                <img src={item.image} alt="cloth" />
                                <div className="trend-card-tools">
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
                            <h5>{item.name}</h5>
                            <div className="trending-card-price">
                                <p className="trending-price">{`${item.price} $`}</p>
                                <p className="trending-dis-price">{`${item.disPrice} $`}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
