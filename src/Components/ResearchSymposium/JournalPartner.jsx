import React from "react";
import Developmental_Biology from "../../assets/Research_Symposium/Journal_Partners/Developmental_Biology.png";
import International_Journal from "../../assets/Research_Symposium/Journal_Partners/International_Journal.png";

const JournalPartner = () => {
  const journals = [
    {
      name: "Developmental Biology",
      description:
        "With an impact factor of 3.582, Developmental Biology (DB) publishes original research on mechanisms of development, differentiation, growth, homeostasis and regeneration in animals and plants at the molecular, cellular, genetic and evolutionary levels.",
      img: Developmental_Biology,
      link: "https://www.sciencedirect.com/journal/developmental-biology",
    },
    {
      name: "International Journal of Life Sciences",
      description:
        "With an impact factor of 6.713, International Journal of Life Sciences (IJLSCI) is a peer-reviewed, open-access Refereed journal. It publishes original articles in all areas of Biology and Life Sciences.",
      img: International_Journal,
      link: "https://www.ijlsci.in/ls/index.php/home",
    },
  ];

  return (
    <section id="journals" className="py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-pink-300 mb-14">
          Our Journal Partners
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {journals.map((journal, idx) => (
            <a
              key={idx}
              href={journal.link}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition relative h-80">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900flex-1 pr-4">
                    {journal.name}
                  </h3>
                  <div className="w-32 h-32 flex-shrink:0 rounded-xl overflow-hidden border">
                    <img
                      src={journal.img}
                      alt={journal.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {journal.description}
                </p>

                <div className="text-sm font-medium text-green-600 group-hover:underline">
                  Visit Journal →
                </div>

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default JournalPartner;
