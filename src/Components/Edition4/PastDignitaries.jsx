import React from "react";

import George_Church from "../../assets/4/Past_Diginitaries/George_Church.jpg";
import Jasonkelly from "../../assets/4/Past_Diginitaries/Jasonkelly.png";
import Amy_Dickman from "../../assets/4/Past_Diginitaries/Amy_Dickman.jpg";
import Phil_Ross from "../../assets/4/Past_Diginitaries/Phil_Ross.jpg";
import JJHashtings from "../../assets/4/Past_Diginitaries/JJHashtings.jpg";
import David_Kong from "../../assets/4/Past_Diginitaries/David_Kong.jpg";
import Joe_Davis from "../../assets/4/Past_Diginitaries/Joe_Davis.jpg";
import Anu_Acharya from "../../assets/4/Past_Diginitaries/Anu_Acharya.jpg";
import Oron_Catts from "../../assets/4/Past_Diginitaries/Oron_Catts.jpg";

const PastDignitaries = () => {
  const dignitaries = [
    { id: 1, name: "Prof. George Church", role: "Professor of Genetics, Harvard Medical School", img: George_Church },
    { id: 2, name: "Dr. Jason Kelly", role: "CEO & Co-Founder, Ginkgo Bioworks Inc", img: Jasonkelly },
    { id: 3, name: "Dr. Amy Dickman", role: "Co-Founder and Chief Technical Officer, MycoWorks", img: Amy_Dickman },
    { id: 4, name: "Mr. Phil Ross", role: "Co-Founder and Chief Technical Officer, MycoWorks", img: Phil_Ross },
    { id: 5, name: "Dr. J.J. Hastings", role: "CEO, Analogs LLC", img: JJHashtings },
    { id: 6, name: "Dr. David Sun Kong", role: "Director, Community Biotechnology Initiative, MIT Media Lab", img: David_Kong },
    { id: 7, name: "Mr. Joe Davis", role: "Artist-scientist, Harvard Medical School", img: Joe_Davis },
    { id: 8, name: "Ms. Anu Acharya", role: "Founder & CEO, mapmygenome", img: Anu_Acharya },
    { id: 9, name: "Dr. Oron Catts", role: "Co-founder and Director, SymbioticA", img: Oron_Catts },
  ];

  return (
    <section className="py-20 relative ">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-pink-300 mb-12">
          Past Dignitaries Hosted
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 justify-items-center">
          {dignitaries.map((d) => (
            <div
              key={d.id}
              className="relative group cursor-pointer flex flex-col items-center"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-pink-300 shadow-lg shadow-pink-300/40 relative">
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-pink-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center rounded-full">
                  <span className="text-white font-semibold text-center px-2">
                    {d.name}
                  </span>
                  <span className="text-sm text-white/80 text-center px-2">
                    {d.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastDignitaries;
