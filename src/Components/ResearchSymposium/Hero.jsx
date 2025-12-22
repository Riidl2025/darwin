import React from 'react';
import svv_logo from "../../assets/Logos/svv_logo.png";
import STrust from "../../assets/Logos/STrust.png";
import birac from "../../assets/Logos/birac.png";
import riidl from "../../assets/Logos/riidl.png";
import bioriidl from "../../assets/Logos/bioriidl.png";

const PARTNERS = [
  { name: "Somaiya Vidyavihar", img: svv_logo },
  { name: "Somaiya Trust", img: STrust },
  { name: "BIRAC", img: birac },
  { name: "riidl", img: riidl },
  { name: "Bioriidl", img: bioriidl },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center">

      {/* Background glow */}
      {/* <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div> */}

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex-1 flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-rose-300 mb-6 tracking-tight">
          Research Symposium
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">
          A global platform for students, academicians and researchers to showcase their research
        </p>
      </div>

      {/* Partner Logos */}
      <div className="relative pb-12">
        <div className="mx-auto max-w-4xl bg-white/90 backdrop-blur-md rounded-xl px-8 py-6 flex flex-wrap justify-center items-center gap-10 shadow-lg">
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
    </section>
  );
};

export default Hero;
