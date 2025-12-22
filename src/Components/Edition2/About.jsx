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

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-pink-300 mb-6">
              About
            </h2>

            <div className="text-gray-200 space-y-4 leading-relaxed">
              <p>
                Darwin, an International Conference brought to you in the comfort of your portable devices.
                With the ongoing pandemic, we have decided to go virtual this year!
              </p>

              <p>
                Darwin 2020 just got bigger and better with established biologists, a panel of experts talking about 
                global research topics, virtual workshops & tours and Research Symposium - a paper presentation competition. 
                Darwin provides an endless drive to encourage innovation and connect bio-enthusiasts from across the globe.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
