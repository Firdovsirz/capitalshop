import React from 'react';
import "../Header/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import HeaderLogo from "../../assets/Header/header-logo.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header() {
    return (
        <header>
            <nav>
                <div className='header-comp-logo'>
                    <img src={HeaderLogo} alt="logo" style={{ cursor: "pointer" }} />
                </div>
                <div className='header-pages'>
                    <ul>
                        <li>Home</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Baby Collection</li>
                        <li>Pages</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='header-main'>
                    <ul>
                        <li className='header-search'>
                            <SearchIcon style={{ fontSize: 30 }} className='header-search-icon' />
                        </li>
                        <li className='header-profile'>
                            <PersonIcon style={{ fontSize: 30 }} className='header-profile-icon' />
                        </li>
                        <li className='header-cart'>
                            <ShoppingCartIcon style={{ fontSize: 30 }} className='header-cart-icon' />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
