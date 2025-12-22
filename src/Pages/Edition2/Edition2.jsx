import React from 'react'
import Navbar from '../../Components/Edition2/Navbar'
import Hero from '../../Components/Home/Hero';
import Footer from '../../Components/Footer/Footer';
import About from '../../Components/Edition2/About';
import Testimonial from '../../Components/Edition2/Testimonial';
import Collaborations from '../../Components/Edition2/Collaborations';
import Publications from '../../Components/Edition2/Publications';
import Overview from '../../Components/Edition2/Overview';
import Panelists from '../../Components/Edition2/Panelists';
import PreEvent from '../../Components/Edition2/PreEvent';
import Speakers from '../../Components/Edition2/Speakers';


function Edition2() {
  return (
    <div className='bg-gray-950'>
      <Navbar />
      <Hero />
      <About />
      <Overview />
      <Speakers />
      <Panelists />
      <PreEvent />
      <Collaborations />
      <Testimonial />
      <Publications />
      <Footer />
    </div>
  )
}

export default Edition2
