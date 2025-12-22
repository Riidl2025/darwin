import React from 'react';
import Navbar from '../../Components/Edition5/Navbar';
import Overview from '../../Components/Edition5/Overview';
import Dignitaries from '../../Components//Edition5/Dignitaries';
import Testimonial from '../../Components/Edition5/Testimonial';
import Hero from '../../Components/Home/Hero';
import Footer from '../../Components/Footer/Footer';


const Edition5 = () => {
  return (
    <div className='bg-gray-950'>
      <Navbar />
      <Hero />
      <Overview />
      <Dignitaries />
      <Testimonial />
      <Footer />
    </div>
  );
};
export default Edition5;