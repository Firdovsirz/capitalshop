import React from 'react'
import Header from '../../components/Header/Header'
import HomeNews from '../../sections/HomeSections/HomeNews/HomeNews';
import HomeMayLike from '../../sections/HomeSections/HomeMayLike/HomeMayLike';
import HomeTrending from '../../sections/HomeSections/HomeTrending/HomeTrending';
import HomeServices from "../../sections/HomeSections/HomeServices/HomeServices";
import HomeComments from '../../sections/HomeSections/HomeComments/HomeComments';
import HomeQuickAccess from "../../sections/HomeSections/HomeQuickAccess/HomeQuickAccess";
import HomeSwiperSection from '../../sections/HomeSections/HomeSwiperSection/HomeSwiperSection';
import HomeDiscountSection from '../../sections/HomeSections/HomeDiscountSection/HomeDiscountSection';
import Footer from '../../components/Footer/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <HomeDiscountSection />
                <HomeSwiperSection />
                <HomeQuickAccess />
                <HomeTrending />
                <HomeComments />
                <HomeMayLike />
                <HomeNews />
                <HomeServices />
            </main>
            <Footer />
        </>
    )
}
