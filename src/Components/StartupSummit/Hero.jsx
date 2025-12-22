import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-red-300 mb-6">
          Startup Summit
        </h1>

        <p className="max-w-2xl mx-auto text-xl text-gray-300">
          A platform to bring together startups, investors, incubators, government officials, 
          corporate heads and other stakeholders to connect, learn and network
        </p>
      </div>
    </section>
  );
};

export default Hero;
