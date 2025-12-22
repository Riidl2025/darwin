import React from 'react';
import svv_logo from "../../assets/Logos/svv_logo.png";
import STrust from "../../assets/Logos/STrust.png";
import birac from "../../assets/Logos/birac.png";
import riidl from "../../assets/Logos/riidl.png";
import bioriidl from "../../assets/Logos/bioriidl.png";
import darwin from "../../assets/Logos/darwin.png"

const Hero = () => {

  const PARTNERS = [
    { name: "Somaiya Vidyavihar", img: svv_logo },
    { name: "Somaiya Trust", img: STrust },
    { name: "BIRAC", img: birac },
    { name: "riidl", img: riidl },
    { name: "Bioriidl", img: bioriidl },
  ];

  return (
    <div className="relative min-h-screen flex flex-col">

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        
        <img
          src={darwin}
          alt="Darwin"
          className="w-48 md:w-72 lg:w-96 mb-6 drop-shadow-[0px_0px_10px_rgba(255,255,255,0.3)]"
        />

        <p className="text-xl md:text-3xl text-green-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
          One of India's Biggest Evolutionary Movements in Biology
        </p>

        {/* LOGOS */}
        <div className="bg-white border border-gray-800 rounded-xl px-10 py-6 flex flex-wrap justify-center items-center gap-10 mb-16">
          {PARTNERS.map((p, i) => (
            <img
              key={i}
              src={p.img}
              alt={p.name}
              className="h-10 w-auto object-contain"
            />
          ))}
        </div>

      </div>

    </div>
  );
};

export default Hero;
