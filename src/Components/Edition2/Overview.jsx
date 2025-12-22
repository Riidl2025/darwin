import React from "react";
import panel from "../../assets/2/Conference_Overview/panel.jpeg";
import rs from "../../assets/2/Conference_Overview/rs.jpeg";
import talks from "../../assets/2/Conference_Overview/talks.jpeg";
import tours from "../../assets/2/Conference_Overview/tours.jpeg";
import ws from "../../assets/2/Conference_Overview/ws.jpeg";

const Overview = () => {
  const row1 = [
    {
      title: "Virtual Workshops",
      desc: "Virtual workshops will be organised to provide Do-It-Yourself biology experiences and an insight into various advances and technologies in the biotechnology field. The workshops are going to be oriented towards the enhancement of science literacy among non-science majors in the context of practicing DIY biology.",
      img: ws,
    },
    {
      title: "Panel Discussions",
      desc: "The Panel Discussions will be facilitated by experts and the topics will focus on current and important issues which need to be and can be tackled using biotechnology. And this year, the topics will focus on “Sustainability and feasibility of Biomaterials” and “Evolution of viruses leading to pandemics”.",
      img: panel,
    },
    {
      title: "Virtual Tours",
      desc: "Virtual Tours to various institutes and organizations will be conducted virtually to make the attendees understand global innovation culture and working and at the same time. We want to encourage the exploration of creativity and help the attendees see what is interesting and fundamental to the areas of biology that they are looking at.",
      img: tours,
    },
  ];

  const row2 = [
    {
      title: "Talks",
      desc: "Various scientists and researchers have been invited to share their expertise on the subject at hand. Talk sessions by key pioneers is something we promise to deliver to make sure that the experience is worth it.",
      img: talks,
    },
    {
      title: "Research Symposium",
      desc: "A platform for researchers to exhibit their research papers and get their work published in a reputed journal. The attendees will be introduced to other researches and innovations in the Life Science domain happening around the globe.",
      img: rs,
    },
  ];

  const Card = ({ item }) => (
    <div className="bg-gray-900 border border-white/10 hover:border-pink-400 rounded-2xl p-6 group shadow-pink-400/35 hover:shadow-md transition-shadow duration-300">
      <img
        src={item.img}
        alt={item.title}
        className="rounded-xl mb-4 h-40 w-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <h4 className="font-semibold mb-2 text-gray-300 group-hover:text-pink-400 transition-colors duration-300">
        {item.title}
      </h4>
      <p className="text-sm text-slate-400">{item.desc}</p>
    </div>
  );

  return (
      <div id="overview" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-pink-300 mb-12">
          Conference Overview
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {row1.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>

        <div className="flex justify-center gap-8">
          {row2.map((item, i) => (
            <div key={i} className="w-full md:w-[calc((100%-4rem)/3)]">
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>

  );
};

export default Overview;
