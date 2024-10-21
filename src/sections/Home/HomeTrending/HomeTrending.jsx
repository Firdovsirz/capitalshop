import "../HomeTrending/HomeTrending.css";
import React, { useState, useEffect } from 'react';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenShoe from "../../../assets/Home/HomeTrending/Men/men-shoe.jpg";
import MenJacket from "../../../assets/Home/HomeTrending/Men/men-jacket.jpeg";
import MenShirt from "../../../assets/Home/HomeTrending/Men/men-shirt-blue.jpg";
import WomenRed from "../../../assets/Home/HomeTrending/Women/women-red-cloth.jpg";
import WomenGray from "../../../assets/Home/HomeTrending/Women/women-gray-cloth.jpg";
import MenBlueShirt from "../../../assets/Home/HomeTrending/Men/men-blue-shirt.webp";
import WomenWhite from "../../../assets/Home/HomeTrending/Women/women-white-cloth.jpg";

export default function HomeTrending() {
    const [selection, setSelection] = useState('');

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
            image: MenBlueShirt,
            name: 'baby',
            price: 50.9,
            disPrice: 120
        }, {
            image: MenShoe,
            name: 'baby',
            price: 70.8,
            disPrice: 120
        }, {
            image: '',
            name: '',
            price: 1.1,
            disPrice: 120
        }, {
            image: '',
            name: '',
            price: 1.1,
            disPrice: 120
        }
    ];
    const fashionCards = [
        {
            image: MenBlueShirt,
            name: 'fashion',
            price: 50.9,
            disPrice: 120
        }, {
            image: MenShoe,
            name: 'Casual Men Shoe',
            price: 70.8,
            disPrice: 120
        }, {
            image: '',
            name: '',
            price: 1.1,
            disPrice: 120
        }, {
            image: '',
            name: '',
            price: 1.1,
            disPrice: 120
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
                    <h4>Trending This Week</h4>
                </div>
                <div className='trending-heading-selection'>
                    <ul>
                        <li onClick={() => handleTrendingCards('men')} value={selection}>Men</li>
                        <li onClick={() => handleTrendingCards('women')}>Women</li>
                        <li onClick={() => handleTrendingCards('baby')}>Baby</li>
                        <li onClick={() => handleTrendingCards('fashion')}>Fashion</li>
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
