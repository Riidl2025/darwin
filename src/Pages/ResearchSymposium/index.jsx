import React from 'react'
import Navbar from '../../Components/ResearchSymposium/Navbar';
import Footer from '../../Components/Footer/Footer';
import Hero from '../../Components/ResearchSymposium/Hero';
import About from '../../Components/ResearchSymposium/About';
import Eligibility from '../../Components/ResearchSymposium/Eligibility';
import Opportunities from '../../Components/ResearchSymposium/Opportunities';
import Submission from '../../Components/ResearchSymposium/Submission';
import JournalPartner from '../../Components/ResearchSymposium/JournalPartner';

function index() {
  return (
    <div className='bg-gray-950'>
      <Navbar />
      <Hero />
      <About />
      <Opportunities />
      <Eligibility />
      <Submission />
      <JournalPartner />
      <Footer />
    </div>
  )
}

export default index
