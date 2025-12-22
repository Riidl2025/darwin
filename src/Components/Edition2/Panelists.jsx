import React, { useState } from "react";
import benoj from "../../assets/2/Panel1/benoj.png";
import dsk from "../../assets/2/Panel1/dsk.png";
import otimg from "../../assets/2/Panel1/otimg.jpeg";
import spk from "../../assets/2/Panel1/spk.jpeg";

import ct from "../../assets/2/Panel2/ct.png";
import fg from "../../assets/2/Panel2/fg.jpeg";
import larac from "../../assets/2/Panel2/larac.png";
import ss from "../../assets/2/Panel2/ss.jpeg";
import zoep from "../../assets/2/Panel2/zoep.jpeg";

const Panelists = () => {
  const [activePerson, setActivePerson] = useState(null);

  const panel1 = [
    {
      name: "Dr. David Sun Kong",
      img: dsk,
      desc: "Dr. David Sun Kong, Ph.D. is a Synthetic Biologist, community organizer, musician, and photographer based in Lexington, MA. David conducted his graduate studies at MIT’s Media Lab, receiving a Master's degree for developing technology for printing nanostructures with energetic beams and a Ph.D. for demonstrating the first gene synthesis in a microfluidic (“lab-on-a-chip”) system.",
    },
    {
      name: "Mr. Salman Promon Khan",
      img: spk,
      desc: "Salman Promon is willing to promote community science education for social benefits. He is passionate to set examples in the community by involving potential candidates in the applied science and STEAM projects by his organization MECHAMIND. Salman is a lecturer at Brac University, Dhaka, and co-founder of X-Genomics which is a genomic data service company and STAR LABs BD- the first community bio lab in Bangladesh and BioBangla.",
    },
     {
      name: "Mr. Otim Geoffrey",
      img: otimg,
      desc: "Otim is a Molecular biologist with a strong passion for synthetic biology which he developed after attending his first synthetic biology conference (SB.7) in Singapore as a Biosecurity fellow, sponsored by Johns Hopkins center for Health security. He founded the IGEM Makerere University team in 2018, the first IGEM team from East Africa to participate and represent at the IGEM Giant Jamboree in Boston. He later Founded Synbio Africa as an After IGEM initiative to promote and spread the gospel of synthetic biology across Africa.",
    },
     {
      name: "Mr. Beno Juarez",
      img: benoj,
      desc: "Founder & director of the first Fab Lab in South America & The Latin America Fab Lab Network. Graduated in the Bioacademany directed by George Church. Co-founder of NUTRIGENE, a company dedicated to eradicating malnutrition in the world through a nutrient printer. Founder & director of Floating Fab Lab Amazon, winner of the National Eco-efficiency Award & selected by the UN as 'the World's most disruptive project on Sustainable Manufacturing & Climate Change'.",
    },
  ];

  const panel2 = [
     {
      name: "Ms. Lara Campos",
      img: larac,
      desc: "Artist, designer, researcher & maker blurring boundaries between materials, technology and biology. Universe: crafts, biomaterials, biofilia & human-nonhuman interactions. Lara’s work is based in nature as cognified matter. She believes that in a context of environmental collapse, design can open space for dialogue between humans and other living beings, enriching respect and coexistence between species. Her research focuses on biomaterials development and emotional response, observing nature and learning from it. She gives workshops merging digital fabrication and material based design.",
    },
     {
      name: "Mr. Craig Trester",
      img: ct,
      desc: "Craig M. Trester is an educator & citizen scientist that utilizes principles of biomimicry & traditional ecological knowledge through applied mycology to develop regenerative solutions for many of the environmental challenges that impact our world. Through educational outreach he has sought to provide people with the knowledge and resources to recognize and practically apply the benefits that fungi have to offer our health, environment, and society.",
    },
     {
      name: "Dr. Florian Graichen",
      img: fg,
      desc: "As General Manager Forests to Biobased Products Florian is responsible for Scion’s projects, programmes and impact delivery around replacing petrochemicals and non-sustainable materials with products from trees and other biomaterials. These activities are aiming at the design of biomaterials to create products for the rapidly growing sustainability conscious market enabled through distributed manufacturing and biorefineries across New Zealand.",
    },
     {
      name: "Ms. Zoe Powel",
      img: zoep,
      desc: "Zoë Powell is a researcher, designer and lecturer who focuses on materials and processes in collaboration with communities. Over the years she has explored a multitude of biomaterial, digital and craft fabrication techniques, creatively using waste resources and tools in parallel with circular design strategies. She has taken part in regional and global projects, teaching at educational and cultural institutions. She is a Community Coordinator and administrator at the open source material library Materiom and a member of the British Council UK Creative Hubs Advisory Board.",
    },
     {
      name: "Dr. Sangeeta Srivastava",
      img: ss,
      desc: "Dr. Sangeeta Srivastava has been associated with the Company for more than 25 years, managing and directing research activities connected with renewable feedstock. Her last position held in the organization was Chemical Business Unit Head. She has a Master in Sciences (Organic Chemistry) from Sagar University, India and a Masters in Philosophy ( Organic Chemistry) from Jabalpur University, India. She also holds a doctorate in Chemistry from Mumbai University, India.",
    },
  ];

  return (
    <div className="py-20 relative">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-300 mb-6 pb-6">
            Panelist
          </h2>
        </div>

        {/* PANEL 1 */}
        <div className="mb-28 flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-bold text-gray-400 mb-8">
              Panel Discussion on Role of Community Biolabs in Promoting Science
            </h3>
          </div>

          <div className="md:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {panel1.map((p, i) => (
              <div key={i} className="cursor-pointer" onClick={() => setActivePerson(p)}>
                <div className="aspect-square overflow-hidden rounded-2xl mb-4">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <h6 className="text-pink-200 font-bold text-sm">{p.name}</h6>
                <p className="text-slate-500 text-[10px] uppercase">{p.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PANEL 2 (SQUARE IMAGES) */}
        <div className="flex flex-col md:flex-row-reverse gap-16">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-bold  text-gray-400 mb-8">
              Panel Discussion on Sustainability and Feasibility of Biomaterials

            </h3>
          </div>

          <div className="md:w-2/3 grid grid-cols-2 lg:grid-cols-5 gap-6">
            {panel2.map((p, i) => (
              <div key={i} className="cursor-pointer" onClick={() => setActivePerson(p)}>
                <div className="aspect-square overflow-hidden rounded-xl mb-4 border border-white/10">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <h6 className="text-pink-200 font-bold text-sm text-center">{p.name}</h6>
                <p className="text-slate-400 text-[9px] uppercase text-center">
                  {p.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DESCRIPTION MODAL */}
      {activePerson && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-slate-900 p-8 rounded-2xl max-w-md w-full relative">
            <button
              onClick={() => setActivePerson(null)}
              className="absolute top-4 right-4 text-white text-xl"
            >
              ✕
            </button>

            <h4 className="text-green-500 text-xl font-bold text-center">
              {activePerson.name}
            </h4>
            <p className="text-gray-200 text-sm text-center">
              {activePerson.desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Panelists;
