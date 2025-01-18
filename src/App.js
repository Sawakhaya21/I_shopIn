import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Products from './components/products/Products';
import TopProducts from './components/topProducts/TopProducts';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';
import Subscribe from './components/subscribe/Subscribe';
import Testimonials from './components/testimonials/Testimonials';
import Popup from './components/popup/Popup';
import AOS from "aos";
import "aos/dist/aos.css";


function App() {

  const [orderPopup, setOrderPopup] = useState(false);

  const  handleOrderPopup = () =>{
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
