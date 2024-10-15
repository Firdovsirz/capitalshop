import './App.css';
import Header from './components/Header/Header';
import HomeDiscountSection from './sections/Home/HomeDiscountSection/HomeDiscountSection';
import HomeQuickAccess from './sections/Home/HomeQuickAccess/HomeQuickAccess';
import HomeSwiperSection from './sections/Home/HomeSwiperSection/HomeSwiperSection';

function App() {
  return (
    <>
      <Header />
      <HomeDiscountSection />
      <HomeSwiperSection />
      <HomeQuickAccess />
    </>
  )
}

export default App
