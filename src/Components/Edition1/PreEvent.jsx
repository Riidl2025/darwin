import React from "react";
import agar from "../../assets/1/PreEvent/agar.jpg";
import biobricks from "../../assets/1/PreEvent/biobricks.jpeg";
import devc from "../../assets/1/PreEvent/devc.jpeg";
import microbial from "../../assets/1/PreEvent/microbial.jpg";
import roadshow from "../../assets/1/PreEvent/roadshow.jpg";

const PreEvent = () => {
  const events = [
    {
      title: "BioBricks",
      image: biobricks,
      content:
        "In association with iGEM Bioriidl Somaiya, Biobytes was organised to create a platform for bio-background students to integrate and learn all the online tools easily, as multidisciplinary research projects are expanding worldwide."
    },
    {
      title: "BioBytes",
      image: devc,
      content:
        "BioBytes in collaboration with Facebook Developers' Circle was organised that aided the knowledge of the audience on “Incorporating technology in healthcare sector.” The audience experienced Virtual Reality sessions."
    },
    {
      title: "Roadshow",
      image: roadshow,
      content:
        "In collaboration with Global Bio-India, BIRAC and Facebook Developer Circles Mumbai, Roadshow was organised wherein panelists talked on research that is being conducted at their companies R&D labs on biotech products."
    },
    {
      title: "Agar Art",
      image: agar,
      content:
        "In association with the American Society of Microbiology (ASM), Bioriidl had conducted Agar Art in collaboration with Somaiya Initiatives For Research and Consultancy (SIRAC). The participants were amazed after seeing the wonderful patterns created by microbes on the agar plate."
    },
    {
      title: "Microbial Mapping",
      image: microbial,
      content:
        "Although bacteria are visible nowhere in our daily routines, they do, however, occupy every nook and cranny of our life in various ways. Microbial Mapping is an endeavor to understand and identify the microscopic life around us in our Somaiya Vidyavihar Campus."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pink-300 mb-12">
          Pre Events
        </h2>

        <div className="space-y-10">
          {events.map((event, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 items-center group`}
            >
              <div className="w-full md:w-1/4">
                <div className="overflow-hidden rounded-3xl shadow-2xl border border-slate-800">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-60 object-cover"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-bold text-green-300 mb-6">
                  {event.title}
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {event.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreEvent;
