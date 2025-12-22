import React from 'react';
import Navbar from '../../Components/Edition4/Navbar';
import Footer from '../../Components/Footer/Footer';
import About from '../../Components/Edition4/About';
import Panelists from '../../Components/Edition4/Panelists';
import Speakers from '../../Components/Edition4/Speakers';
import Testimonial from '../../Components/Edition4/Testimonial';
import Overview from '../../Components/Edition4/Overview';
import Gallery from '../../Components/Edition4/Gallery';
import PastDignitaries from '../../Components/Edition4/PastDignitaries';
import Video from '../../Components/Edition4/Video';
import Highlights from '../../Components/Edition4/Highlights';
import Hero from '../../Components/Home/Hero';

const Edition4 = () => {
  return (
    <div className='bg-gray-950'>
      <Navbar />
      <Hero />
      <About />
      <Speakers />
      <Panelists />
      <Overview />
      <PastDignitaries />
      <Highlights />
      <Video />
      <Gallery />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Edition4;
