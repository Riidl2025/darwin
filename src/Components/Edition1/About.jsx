import React from "react";

const About = () => {
  return (
    <div id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* About Darwin */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-center text-pink-300 mb-12">
            About
          </h2>
          <p className="text-gray-300">
            Darwin is an International Conference for 101+ Darwinians and 200+ Biohackers and is 
            India’s Biggest Evolutionary Movement in Biology. It is an initiative to promote Open 
            Science and revolves around the theme of Evolution for the year 2019. It includes 
            learning segments such as Biohackathon, Workshops, Talks, Panel Discussions and Field Visits.
          </p>
        </div>

        {/* Our Story */}
        <div>
          <h3 className="text-lg font-bold text-green-400 mb-4 text-center">
            Our Story
          </h3>

          <div className="space-y-6 text-slate-400 leading-relaxed">
            <p className="italic">
             "We started a community bio lab, Bioriidl in 2015 when we realized that there is a need for such space. 
             Few students, alumni, and professionals were struggling to find a space for their project to work. 
             Their own college labs were fully occupied by practicals and lectures.
            </p>

            <div>
              <h4 className="font-bold text-center text-green-300 mb-6">
                There was a need!
              </h4>
              <p className="text-slate-400">
                So, we started this movement 4 years back, we grew from an empty
                space to a fully equipped lab, from 13 to 100+ community members,
                from nothing to Something :) And we want to keep doing this and
                reach out to more people to help them build their dream project
                and facilitate their local communities.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-center text-green-300 mb-2">
                We want more like us...
              </h4>
              <p className="text-slate-400">
                So we are conducting DARWIN to reach out to people like us, who believe 
                in open science, community-driven innovations, and entrepreneurship.
              </p>
               <p className="text-slate-400">
                 Help us build the culture of open science. Be a part of this movement."
              </p>
              <p className="mt-8 font-bold text-slate-100">
                ~ Bhavna Pandya, Innovation Catalyst at riidl and Bioriidl Head
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
