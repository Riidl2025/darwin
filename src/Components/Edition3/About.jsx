import React from "react";
import about from "../../assets/3/About/about.jpg";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">

          <div className="w-full md:w-1/2 relative">
            <img
              src={about}
              alt="About Conference"
              className="relative z-10 rounded-2xl shadow-2xl"
            />
            
            <div
              className="absolute -bottom-6 -right-6 w-full h-full
              border-2 border-pink-400 rounded-2xl"
            ></div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-pink-300 mb-6">
              About
            </h2>

            <div className="text-gray-200 space-y-4 leading-relaxed">
              <p>
                Darwin is an International Conference to be held from 2nd to 5th December, 2021.
                To make this conference more accessible to everyone, we have decided to continue it virtually.
              </p>

              <p>
                This is a global celebration of biology of research enthusiasts facilitated through a panel
                of experts sharing cutting-edge research topics, talks by established biologists, virtual workshops,
                tours and the Research Symposium - a paper presentation competition. This year, the conference is
                centered around Cutting-Edge Biology with sub-themes: BioArt, Cell Biology and Medical Biology.
              </p>

              <p>
                Along with several networking opportunities for bio-enthusiasts, Darwin 2021 will also feature working
                groups’ presentations about various research topics. Post the Darwin 2020 conference, these working groups
                initiated several research causes to work upon for a year and later get them published as Conference Proceedings.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
