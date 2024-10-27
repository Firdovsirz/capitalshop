import React from 'react';
import "../Footer/Footer.css";
import { useTranslation } from 'react-i18next';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import FooterLogo from "../../assets/Footer/logoFooter.png";

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer>
            <div className='footer-subscription'>
                <div className='footer-sub-txt'>
                    <h3>{t('footer-sub-head-text', { ns: 'home' })}</h3>
                    <p>{t('footer-sub-text', { ns: 'home' })}</p>
                </div>
                <div className='footer-sub-input'>
                    <form action="">
                        <label htmlFor="email">
                            <input type="email" placeholder={t('footer-sub-input-text', { ns: 'home' })} />
                        </label>
                        <button>{t('footer-sub-btn-text', { ns: 'home' })}</button>
                    </form>
                </div>
                <div className='footer-sub-social'>
                    <ul>
                        <li><FacebookIcon /></li>
                        <li><InstagramIcon /></li>
                        <li><YouTubeIcon /></li>
                    </ul>
                </div>
            </div>
            <div className='footer-main'>
                <div className='footer-logo-container'>
                    <img src={FooterLogo} alt="logo" />
                </div>
                <div className='footer-men-shop footer-list'>
                    <h2>Shop Men</h2>
                    <ul>
                        <li>Clothing Fashion</li>
                        <li>Winter</li>
                        <li>Summer</li>
                        <li>Formal</li>
                        <li>Casual</li>
                    </ul>
                </div>
                <div className='footer-woman-shop footer-list'>
                    <h2>Shop Women</h2>
                    <ul>
                        <li>Clothing Fashion</li>
                        <li>Winter</li>
                        <li>Summer</li>
                        <li>Formal</li>
                        <li>Casual</li>
                    </ul>
                </div>
                <div className='footer-baby-coll footer-list'>
                    <h2>Baby Collection</h2>
                    <ul>
                        <li>Clothing Fashion</li>
                        <li>Winter</li>
                        <li>Summer</li>
                        <li>Formal</li>
                        <li>Casual</li>
                    </ul>
                </div>
                <div className='footer-quick-link footer-list'>
                    <h2>Quick Links</h2>
                    <ul>
                        <li>Track Your Order</li>
                        <li>Support</li>
                        <li>FAQ</li>
                        <li>Carrier</li>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
