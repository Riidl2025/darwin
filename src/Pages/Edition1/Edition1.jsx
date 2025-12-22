import React from 'react'
import Navbar from '../../Components/Edition1/Navbar';
import Hero from '../../Components/Home/Hero';
import About from '../../Components/Edition1/About'
import Overview from '../../Components/Edition1/Overview';
import Speakers from '../../Components/Edition1/Speakers';
import Benefits from '../../Components/Edition1/Benefits';
import PreEvent from '../../Components/Edition1/PreEvent';
import Footer from '../../Components/Edition1/Footer';

function Edition1() {
  return (
    <div className='bg-gray-950'>
      <Navbar />
      <Hero />
      <About />
      <Overview />
      <Speakers />
      <Benefits />
      <PreEvent />
      <Footer />
    </div>
  )
}

export default Edition1
