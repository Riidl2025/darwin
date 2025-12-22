import React from "react";
import about from "../../assets/3/About/about.jpg";

const About = () => {
  return (
      <div id="about" className="py-20 max-w-7xl mx-auto px-4 ">
        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* Image */}
          <div className="w-full md:w-1/2 relative">
            <img
              src={about}
              alt="About Conference"
              className="relative z-10 rounded-2xl shadow-2xl"
            />
            
            <div
              className="absolute -bottom-6 -right-6 w-full h-full
              border-2 border-pink-500 rounded-2xl z-0"
            ></div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-pink-300 mb-6">
              About
            </h2>

            <div className="text-gray-200 space-y-4 leading-relaxed">
              <p>
                Researchers can use this platform to showcase their research and have their work 
                published in reputed journals. Participants will get a chance to network with 
                international bio-enthusiasts and researchers while learning more about breakthroughs in the domain of Life Sciences.
              </p>
            </div>
          </div>

        </div>
      </div>
  );
};

export default About;
