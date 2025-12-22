import React from "react";
import Puneet_Katyal from "../../assets/5/Dignitaries/Puneet_Katyal.jpg";
import Santanu_Satapathy from "../../assets/5/Dignitaries/Santanu_Satapathy.jpeg";
import Shreya_Ghodawat from "../../assets/5/Dignitaries/Shreya_Ghodawat.jpg";
import Siddharth_Mohantty from "../../assets/5/Dignitaries/Siddharth_Mohantty.jpeg";

const Dignitaries = () => {
  const dignitaries = [
    {
      id: 1,
      name: "Mr. Puneet Katyal",
      role: "CEO, Viviid Emissions Reductions Universal Pvt Ltd",
      img: Puneet_Katyal,
      link: "https://www.viviidgreen.com/great-minds-section/puneet-katyal/",
    },
    {
      id: 2,
      name: "Ms. Shreya Ghodawat",
      role: "Co-Founder - Meat Less, Meet More",
      img: Shreya_Ghodawat,
      link: "https://www.linkedin.com/in/shreyaghodawat/",
    },
    {
      id: 3,
      name: "Dr. Santanu Satapathy",
      role: "Sustainability Practitioner, IIM Mumbai | NIT Rourkela",
      img: Santanu_Satapathy,
      link: "https://www.linkedin.com/in/dr-santanu-satapathy/s",
    },
    {
      id: 4,
      name: "Mr. Siddharth Mohantty",
      role: "Founder, TWIKKs",
      img: Siddharth_Mohantty,
      link: "https://www.linkedin.com/in/siddharthmohantty/",
    },
  ];

  return (
    <section id="dignitaries" className="py-20 relative overflow-x-hidden">
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-pink-300 mb-6">
          Dignitaries
        </h2>

        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-green-400 text-lg leading-relaxed">
            Keynote on Climate Action: Now or Never
          </p>
        </div>

        {/* ROW 1 */}
        <div className="flex justify-center mb-16">
          <a
            href={dignitaries[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group cursor-pointer flex flex-col items-center"
          >
            <div className="w-48 h-48 rounded-2xl overflow-hidden border shadow-lg relative">
              <img
                src={dignitaries[0].img}
                alt={dignitaries[0].name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center rounded-2xl">
                <span className="text-white font-semibold text-center px-2">
                  {dignitaries[0].name}
                </span>
                <span className="text-sm text-white/80 text-center px-2">
                  {dignitaries[0].role}
                </span>
              </div>
            </div>
          </a>
        </div>

        <div className="text-center mb-10">
          <h3 className="text-xl font-semibold text-gray-300">
            Panel Discussion on Climate Action: Human Actions or Natural Forces
          </h3>
        </div>

        {/* ROW 2 */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {dignitaries.slice(1).map((d) => (
            <a
              key={d.id}
              href={d.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group cursor-pointer flex flex-col items-center"
            >
              <div className="w-48 h-48 rounded-2xl overflow-hidden border shadow-lg relative">
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center rounded-2xl">
                  <span className="text-white font-semibold text-center px-2">
                    {d.name}
                  </span>
                  <span className="text-sm text-white/80 text-center px-2">
                    {d.role}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dignitaries;
