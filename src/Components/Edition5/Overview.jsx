import React from "react";
import main from "../../assets/5/Overview/MainConf.jpeg";
import Eco from "../../assets/5/Overview/Ecohackathon.jpeg";
import Panel from "../../assets/5/Overview/Panel.jpeg";
import RS from "../../assets/5/Overview/RS.jpeg";
import Speakers from "../../assets/5/Overview/Speakers.jpeg";
import Tour from "../../assets/5/Overview/Tours.jpeg";
import Workshops from "../../assets/5/Overview/Workshops.jpeg";

const MAIN_METRIC = {
  title: "Main Conference",
  description:
    "A three-day in-person conference themed around Sustainability focused on bringing together researchers, professionals, and students to discuss the latest advances in Waste Management, Climate Action, Material Sciences and more.",
  image: main,
};

const GRID_ITEMS = [
  {
    id: 1,
    title: "EcoHackathon",
    description:
      "A 2-month competition to solve a problem statement by developing a product / application / research project through biology and get rewarded with cash prizes of upto INR 1 Lakh.",
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
    title: "Speaker Sessions",
    description:
      "Various researchers and industry leaders to share their expertise on topics around Sustainability.",
    image: Speakers,
  },
  {
    id: 4,
    title: "Panel Discussions",
    description:
      "Discussions facilitated by experts on current and important issues that need to be tackled in the field of Sustainability.",
    image: Panel,
  },
  {
    id: 5,
    title: "Workshops",
    description:
      "Hands-on workshops by expert instructors to provide DIY Biology experiences into various advances and technologies.",
    image: Workshops,
  },
  {
    id: 6,
    title: "Tours",
    description:
      "Tours to various labs and institutes for the attendees to understand their global innovation and research culture.",
    image: Tour,
  },
];

const Overview = () => {
  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-full mx-auto space-y-10">
        <section>
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-pink-300 mb-6">
              Overview
            </h2>
          </div>

          {/* MAIN IMAGE CARD */}
          <div className="relative group">
            <div className="bg-[#0e0e0e] rounded-2xl shadow-lg border border-gray-800 overflow-hidden flex flex-col md:flex-row
                            transition-all duration-300 group-hover:border-pink-500 group-hover:shadow-pink-500/50">

              <div className="absolute -top-10 -right-10 w-36 h-36 bg-pink-500 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

              <div className="md:w-3/5 h-48 md:h-64 overflow-hidden rounded-2xl">
                <img
                  src={MAIN_METRIC.image}
                  alt="Overview"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="md:w-2/5 p-6 flex flex-col text-white">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-green-600 transition">
                  {MAIN_METRIC.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {MAIN_METRIC.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GRID SECTION */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GRID_ITEMS.map((item) => (
              <div key={item.id} className="relative group">
                <div className="bg-[#0f0f0f] rounded-xl border border-gray-800 shadow-md overflow-hidden
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
                    <h3 className="font-bold text-white mb-1 group-hover:text-pink-400 transition">
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
