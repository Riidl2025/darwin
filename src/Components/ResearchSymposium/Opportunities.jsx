import React from "react";

const Opportunities = () => {
  const row1 = [
    {
      desc: "Get your Research Paper published in UGC approved ‘International Journal of Life Sciences’ and Scopus Indexed ‘Developmental Biology’",
    },
    {
      desc: "Expert review and critical input to help you improve your research",
    },
    {
      desc: "Exclusive feature of selected papers in the official Darwin 2021 magazine",
    },
  ];

  const row2 = [
    {
      desc: "An e-certificate of presentation at an international conference",
    },
    {
      desc: "Connect and network with bio-enthusiasts from around the world.",
    },
  ];

  const Card = ({ item }) => (
    <div className="bg-white/80 backdrop-blur-sm border border-pink-200/40 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 h-40 flex items-center">
      <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center">
        {item.desc}
      </p>
    </div>
  );

  return (
    <section id="opportunities" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-pink-300 mb-12">
        Opportunities
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
    </section>
  );
};

export default Opportunities;
