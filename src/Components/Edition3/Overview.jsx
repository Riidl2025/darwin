import React from "react";
import Panel from "../../assets/3/Conference_Overview/PanelDiss.jpeg";
import RS from "../../assets/3/Conference_Overview/RS.jpeg";
import Speaker from "../../assets/3/Conference_Overview/Speaker.jpeg";
import Tours from "../../assets/3/Conference_Overview/Tours.jpeg";
import Workshops from "../../assets/3/Conference_Overview/Workshops.jpeg";

const GRID_ITEMS = [
  {
    id: 1,
    title: "Research Symposium",
    description:
      "A platform for researchers and students to exhibit their research papers and get their work published in a reputed journal for free.",
    image: RS,
  },
  {
    id: 2,
    title: "Speaker Sessions",
    description:
      "Various scientists, researchers and industry leaders share their expertise on topics around Biodesign, Food & Agriculture and Bioentrepreneurship.",
    image: Speaker,
  },
  {
    id: 3,
    title: "Panel Discussions",
    description:
      "Discussions facilitated by experts on current and important issues that need to be tackled",
    image: Panel,
  },
  {
    id: 4,
    title: "Workshops",
    description:
      "Hands-on workshop experiences and training to provide Do-It-Yourself biology experiences and an insight into various advances and technologies in the biotechnology field.",
    image: Workshops,
  },
  {
    id: 5,
    title: "Tours",
    description:
      "Tours to various labs and organisations, both physically and virtually to attendees understand global innovation and research culture.",
    image: Tours,
  },
];

const Overview = () => {
  return (
    <div id="overview" className="min-h-screen p-6 py-20">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-300 mb-6">
            Conference Overview
          </h2>
        </div>

        {/* GRID */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GRID_ITEMS.map((item) => (
              <div key={item.id} className="relative group">
                <div
                  className="bg-[#0f0f0f] rounded-xl border border-gray-800 overflow-hidden
                  transition-all duration-300
                  group-hover:border-pink-800
                  group-hover:shadow-lg group-hover:shadow-pink-800/10"
                >
                  {/* Lavender glow */}
                  <div
                    className="absolute -bottom-6 -right-6 w-28 h-28
                    bg-pink-300 rounded-full blur-3xl opacity-0
                    group-hover:opacity-60 transition-opacity duration-500"
                  ></div>

                  {/* Image */}
                  <div className="h-40 overflow-hidden rounded-t-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover
                      group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3
                      className="font-bold text-white mb-1
                      group-hover:text-pink-500 transition"
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Overview;
