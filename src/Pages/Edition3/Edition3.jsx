import React from 'react'
import Navbar from '../../Components/Edition3/Navbar';
import Hero from '../../Components/Home/Hero';
import Footer from '../../Components/Footer/Footer';
import About from '../../Components/Edition3/About';
import Overview from '../../Components/Edition3/Overview';
import Video from '../../Components/Edition3/Video';
import Collaboration from '../../Components/Edition3/Collaboration';
import Testimonial from '../../Components/Edition3/Tesimonial';
import Highlights from '../../Components/Edition3/Highlights';
import Publications from '../../Components/Edition3/Publications';
import Panelists from '../../Components/Edition3/Panelists';
import PreEvent from '../../Components/Edition3/PreEvent';
import Speakers from '../../Components/Edition3/Speakers';



function Edition3() {
  return (
    <div className="bg-gray-950">
      <Navbar />
      <Hero />
      <About />
      <Overview />
      <Speakers />
      <Panelists />
      <PreEvent />
      <Highlights />
      <Video />
      <Collaboration />
      <Publications />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Edition3
