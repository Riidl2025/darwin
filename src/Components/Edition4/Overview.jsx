import React from "react";
import A from "../../assets/4/Overview/A.jpeg";
import Eco from "../../assets/4/Overview/Biohackathon.jpg";
import Panel from "../../assets/4/Overview/PanelDiss.jpeg";
import RS from "../../assets/4/Overview/RS.jpeg";
import Tours from "../../assets/4/Overview/Tours.jpg";
import Workshops from "../../assets/4/Overview/Workshops.jpeg";
import Startup from "../../assets/4/Overview/Startup.jpeg";

const GRID_ITEMS = [
  {
    id: 1,
    title: "Biohackathon",
    description:
      "A 2-month competition to solve a problem statement by developing a product / application / research project through biology and get rewarded with cash prizes",
    image: Eco,
  },
  {
    id: 2,
    title: "Research Symposium",
    description:
      "A platform for researchers and students to exhibit their research papers and get their work published in a reputed journal for free.",
    image: RS,
  },
  {
    id: 3,
    title: "Startup Summit",
    description:
      "An exhibition for startups in the life sciences domain to present their business models to investors to seek funding & exposure.",
    image: Startup,
  },
  {
    id: 4,
    title: "Speaker Sessions",
    description:
      "Various scientists, researchers and industry leaders to share their expertise on topics around Biodesign, Food & Agriculture and Bioentrepreneurship",
    image: A,
  },
  {
    id: 5,
    title: "Panel Discussions",
    description:
      "Discussions facilitated by experts on current and important issues that need to be tackled like 'Navigating the new future of Agriculture & Food around the globe' and '",
    image: Panel,
  },
  {
    id: 6,
    title: "Workshops",
    description:
      "Hands-on workshops by expert instructors to provide DIY Biology experiences into various advances and technologies.",
    image: Workshops,
  },
  {
    id: 7,
    title: "Tours",
    description:
      "Tours to various labs and organisations, both physically and virtually to attendees understand global innovation and research culture.",
    image: Tours,
  },
];

const Overview = () => {
  return (
    <div id="overview" className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <div>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-center text-pink-300 mb-12">
              Overview
            </h2>
          </div>
        </div>

        {/* GRID SECTION */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GRID_ITEMS.map((item) => (
              <div key={item.id} className="relative group">
                <div className="bg-black rounded-xl border border-gray-800 shadow-md overflow-hidden
                                transition-all duration-300 group-hover:border-pink-500 group-hover:shadow-pink-500/50">

                  <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-pink-500 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

                  <div className="h-40 overflow-hidden rounded-t-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-white mb-1 group-hover:text-pink-300 transition">
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
