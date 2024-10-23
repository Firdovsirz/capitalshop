import React from 'react';
import { useTranslation } from 'react-i18next';
import "../HomeDiscountSection/HomeDiscountSection.css";

export default function HomeDiscountSection() {
    const { t } = useTranslation();
    return (
        <section className='home-discount-section'>
            <h3>{t('home-discount-heading-txt', { ns: 'home' })}</h3>
            <button className='discount-shop-now-btn'>{t('home-discount-btn', { ns: 'home' })}</button>
        </section>
    )
}
