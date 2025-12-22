import React from "react";
import biohack from "../../assets/1/EventOverview/biohack.png";
import talk from "../../assets/1/EventOverview/talk.png";
import work from "../../assets/1/EventOverview/work.png";

const Overview = () => {
  const events = [
    {
      icon: talk,
      title: "Talks and Panels",
      desc: "Hacking is a creative problem solving to improve one's life, and we are turning the focus on our bodies and biology. In Biohackathon, Biohackers will try to hack and improve biomaterials such as pigments, fuels, DNA or fungi. It can also result in more conceptual explorative projects to see the potential for future products.",
    },
    {
      icon: work,
      title: "Workshops",
      desc: "The workshop is aimed at improving science literacy among nonscience majors in the context of practising DIY biology. As scientific and social issues are central to most assemblies, so through workshops we are trying to motivate our exploration of major ideas and helping students see what is interesting and important in areas of biology unfamiliar to them.",
    },
    {
      icon: biohack,
      title: "Bio Hackathon",
      desc: "Hacking is a creative problem solving to improve one's life, and we are turning the focus on our bodies and biology. In Biohackathon, Biohackers will try to hack and improve biomaterials such as pigments, fuels, DNA or fungi. It can also result in more conceptual explorative projects to see the potential for future products.",
    },
  ];

  return (
    <div id="overview" className=" py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-300 mb-4">
            Event Overview
          </h2>

          <h2 className="text-xl md:text-2xl font-bold text-green-500 mb-4">
            BioHackathon in India
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Biohackathon- India’s Biggest Biohacking Movement is designed to provide
            space to bio-enthusiasts to witness and develop solutions to existing
            problems while building a strong bio-community.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((item, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl bg-gray-950 border border-pink-300 hover:border-pink-600 transition-all group"
            >
              {/* glow */}
              <div className="absolute inset-0 rounded-2xl bg-pink-200/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* icon */}
              <div className="w-36 h-36 mb-6 rounded-2xl bg-white border border-white/5 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-36 h-36"
                />
              </div>

              {/* text */}
              <h3 className="font-bold text-white mb-1 group-hover:text-pink-400 transition">
                {item.title}
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
