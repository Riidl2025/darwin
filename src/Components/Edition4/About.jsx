import React from 'react';
import about from "../../assets/4/About/about.jpg"

const About = () => {
  return (
    <section id='about' className="py-20  text-white relative">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-pink-300 mb-6 relative">
              About 
              <span className="absolute bottom-0 left-0 w-20 h-1 bg-pink-300 -mb-2"></span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Darwin is an International Conference to be held in February 2023. To make this conference more 
              accessible to everyone and improve our attendees' experience, this year the conference is going 
              to be hybrid.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              This global celebration of biology of research enthusiasts facilitated through a panel of experts 
              sharing cutting-edge research topics, talk sessions by established biologists, hands-on workshops, 
              tours, Research Symposium - a paper presentation competition and Biohackathon - a hackathon to solve 
              problems of the world biologically will be centered around Sustainable Biotechnology.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src= {about}
                alt="About Conference" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-pink-300/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
