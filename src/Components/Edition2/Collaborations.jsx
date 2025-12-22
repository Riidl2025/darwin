import React from "react";
import A from "../../assets/2/Collab/A.jpeg";
import B from "../../assets/2/Collab/B.png";
import C from "../../assets/2/Collab/C.png";
import D from "../../assets/2/Collab/D.png";
import E from "../../assets/2/Collab/E.png";
import F from "../../assets/2/Collab/F.png";
import G from "../../assets/2/Collab/G.jpeg";
import H from "../../assets/2/Collab/H.png";
import I from "../../assets/2/Collab/I.jpeg";
import J from "../../assets/2/Collab/J.jpeg";
import K from "../../assets/2/Collab/K.jpeg";
import L from "../../assets/2/Collab/L.png";

const COLLABORATIONS = [
  { id: 1, logo: A, name: "Synbio Africa", link: "https://synbioafrica.com/" },
  { id: 2, logo: B, name: "Mechamind", link: "https://www.mechamind.io/" },
  { id: 3, logo: C, name: "Media Lab Nepal", link: "http://medialabnepal.com/" },
  { id: 4, logo: D, name: "Community of Biotechnology", link: "https://cobiotech.org/" },
  { id: 5, logo: E, name: "PSRC Labs", link: "https://psrc-labs.ir/" },
  { id: 6, logo: F, name: "Hive Biolab", link: "https://kumasihive.com/hive-biolab/" },
  { id: 7, logo: G, name: "Bio Science Research Initiative", link: "https://sites.google.com/view/bioscienceresearchinitiative/welcome" },
  { id: 8, logo: H, name: "Matera", link: "https://www.instagram.com/matera_lab?igshid=17p91b1bhq5ut" },
  { id: 9, logo: I, name: "Nova Planta", link: "https://www.instagram.com/novaplantagpi?igshid=1q26odt13tk8w" },
  { id: 10, logo: J, name: "Biodesign", link: "https://www.instagram.com/biodesign_lab?igshid=8p97yxyzbupi" },
  { id: 11, logo: K, name: "African Journal of Biological Sciences", link: "https://afjbs.com/" },
  { id: 12, logo: L, name: "The Biotalk Magazine", link: "https://thebiotalkmagazine.com/" },
];

const Collaborations = () => {
  return (
    <div id="collaborations" className="py-20">
      <div className="mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-300 mb-6">
            Our Collaborations
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
          {COLLABORATIONS.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-3 p-6 bg-gray-900 rounded-xl border border-white/20 hover:border-pink-800 shadow hover:shadow-pink-400 transition"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-14 w-auto object-contain"
              />
              <p className="text-xs text-center text-slate-300 font-semibold tracking-wide">
                {item.name}
              </p>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Collaborations;
