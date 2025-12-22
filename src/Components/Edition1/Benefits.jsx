import React from "react";
import fund from "../../assets/1/Benefits_and_Oppo/fund.png";
import network from "../../assets/1/Benefits_and_Oppo/network.png";
import scholarship from "../../assets/1/Benefits_and_Oppo/scholarship.png";

const Benefits = () => {
  const benefits = [
    {
      icon: network,
      title: "Networking",
    },
    {
      icon: fund,
      title: "Seed Funding",
    },
    {
      icon: scholarship,
      title: "Scholarship",
    },
  ];

  return (
    <div className=" py-20 relative ">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-300">
            Benefits & Opportunities
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-800 border border-gray-500 hover:border-pink-300 transition"
            >
              {/* square image */}
              <div className="w-32 h-32 mb-6 flex items-center justify-center">
                <img
                  src={b.icon}
                  alt={b.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* text */}
              <h3 className="text-lg font-semibold text-white">
                {b.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Benefits;
