import './App.css';
import Header from './components/Header/Header';
import HomeTrending from './sections/Home/HomeTrending/HomeTrending';
import HomeQuickAccess from './sections/Home/HomeQuickAccess/HomeQuickAccess';
import HomeSwiperSection from './sections/Home/HomeSwiperSection/HomeSwiperSection';
import HomeDiscountSection from './sections/Home/HomeDiscountSection/HomeDiscountSection';

function App() {
  return (
    <>
      <Header />
      <HomeDiscountSection />
      <HomeSwiperSection />
      <HomeQuickAccess />
      <HomeTrending />
    </>
  )
}

export default App
