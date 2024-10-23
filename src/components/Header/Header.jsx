import React from 'react';
import "../Header/Header.css";
import { useTranslation } from 'react-i18next';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeaderLogo from "../../assets/Header/header-logo.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LanguageChange from '../LanguageChange/LanguageChange';

export default function Header() {
    const { t } = useTranslation();
    return (
        <header>
            <nav>
                <div className='header-comp-logo'>
                    <img src={HeaderLogo} alt="logo" style={{ cursor: "pointer" }} />
                </div>
                <div className='header-pages'>
                    <ul>
                        <li>{t('home', {ns: 'header'})}</li>
                        <li>{t('men', {ns: 'header'})}</li>
                        <li>{t('women', {ns: 'header'})}</li>
                        <li>{t('baby-collection', {ns: 'header'})}</li>
                        <li>{t('pages', {ns: 'header'})}</li>
                        <li>{t('blog', {ns: 'header'})}</li>
                        <li>{t('contact', {ns: 'header'})}</li>
                    </ul>
                </div>
                <div className='header-main'>
                    <ul>
                        <li className='header-search'>
                            <SearchIcon style={{ fontSize: 30 }} className='header-search-icon' />
                        </li>
                        <li className='header-profile'>
                            <FavoriteIcon style={{ fontSize: 30 }} className='header-profile-icon' />
                        </li>
                        <li className='header-cart'>
                            <ShoppingCartIcon style={{ fontSize: 30 }} className='header-cart-icon' />
                        </li>
                    </ul>
                </div>
                <div>
                    <LanguageChange />
                </div>
            </nav>
        </header>
    )
}
