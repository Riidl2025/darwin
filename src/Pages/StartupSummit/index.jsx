import React from 'react';
import Opportunities from '../../Components/StartupSummit/Opportunities';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/StartupSummit/Navbar';
import Join from '../../Components/StartupSummit/Join';
import Panel from '../../Components/StartupSummit/Panel';
import Hero from '../../Components/StartupSummit/Hero';
import Event from '../../Components/StartupSummit/Event';

const StartupSummit = () => {
  return (
    <div id="startup_summit" className='bg-gray-950'>
      <Navbar />
      <Hero />
      <Panel />
      <Join />
      <Event />
      <Opportunities />
      <Footer />
    </div>
  );
};
export default StartupSummit;