import React from 'react';
import "../HomeServices/HomeServices.css";
import { useTranslation } from 'react-i18next';
import Service1 from "../../../assets/Home/HomeInfo/services1.svg";
import Service2 from "../../../assets/Home/HomeInfo/services2.svg";
import Service3 from "../../../assets/Home/HomeInfo/services3.svg";
import Service4 from "../../../assets/Home/HomeInfo/services4.svg";

export default function HomeInfo() {
    const { t } = useTranslation();
    return (
        <section className='home-info-section'>
            <div className='home-services-container'>
                <div className="home-service">
                    <img src={Service1} alt="service" />
                    <h3>{t('home-delivery-service-head-text', { ns: 'home' })}</h3>
                    <p>{t('home-service-desc-text', { ns: 'home' })}</p>
                </div>
                <div className="home-service">
                    <img src={Service2} alt="service" />
                    <h3>{t('home-payment-head-text', { ns: 'home' })}</h3>
                    <p>{t('home-service-desc-text', { ns: 'home' })}</p>
                </div>
                <div className="home-service">
                    <img src={Service3} alt="service" />
                    <h3>{t('home-guarantee-service-head-text', { ns: 'home' })}</h3>
                    <p>{t('home-service-desc-text', { ns: 'home' })}</p>
                </div>
                <div className="home-service">
                    <img src={Service4} alt="service" />
                    <h3>{t('home-support-service-head-text', { ns: 'home' })}</h3>
                    <p>{t('home-service-desc-text', { ns: 'home' })}</p>
                </div>
            </div>
        </section>
    )
}
