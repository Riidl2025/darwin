import React from "react";
import A from "../../assets/3/Collab/A.jpeg";
import B from "../../assets/3/Collab/B.jpeg";
import C from "../../assets/3/Collab/C.jpeg";
import D from "../../assets/3/Collab/D.png";
import E from "../../assets/3/Collab/E.png";
import F from "../../assets/3/Collab/F.png";
import G from "../../assets/3/Collab/G.png";
import H from "../../assets/3/Collab/H.png";
import I from "../../assets/3/Collab/I.png";
import J from "../../assets/3/Collab/J.png";
import K from "../../assets/3/Collab/K.png";
import L from "../../assets/3/Collab/L.png";
import M from "../../assets/3/Collab/M.jpeg";
import N from "../../assets/3/Collab/N.png";
import O from "../../assets/3/Collab/O.png";
import P from "../../assets/3/Collab/P.png";
import Q from "../../assets/3/Collab/Q.png";
import R from "../../assets/3/Collab/R.png";
import S from "../../assets/3/Collab/S.png";
import T from "../../assets/3/Collab/T.png";
import U from "../../assets/3/Collab/U.png";

const COLLABORATIONS = [
  { id: 1, logo: A, link: "https://www.riidl.org/thedarwin.in/2020/2021/l" },
  { id: 2, logo: B, link: "https://www.riidl.org/thedarwin.in/2020/2021/index.html" },
  { id: 3, logo: C, link: "https://www.riidl.org/thedarwin.in/2020/2021/index.html" },
  { id: 4, logo: D, link: "https://www.riidl.org/thedarwin.in/2020/2021/index.html" },
  { id: 5, logo: E, link: "https://www.riidl.org/thedarwin.in/2020/2021/index.html" },
  { id: 6, logo: F, link: "https://stemiafrica.org/" },
  { id: 7, logo: G, link: "https://www.instagram.com/biolilolab/" },
  { id: 8, logo: H, link: "https://www.instagram.com/cygnuscience/" },
  { id: 9, logo: I, link: "https://www.wizkit.org/" },
  { id: 10, logo: J, link: "https://www.instagram.com/genialab_/" },
  { id: 11, logo: K, link: "https://linktr.ee/sbe.utec" },
  { id: 12, logo: L, link: "https://www.facebook.com/coevolutionTW" },
  { id: 13, logo: M, link: "https://www.instagram.com/independenciabiolab/" },
  { id: 14, logo: N, link: "https://www.instagram.com/nextialab/" },
  { id: 15, logo: O, link: "https://www.instagram.com/usbri/" },
  { id: 16, logo: P, link: "https://www.instagram.com/lightmicroscopyaustralia/" },
  { id: 17, logo: Q, link: "https://www.labva.org/" },
  { id: 18, logo: R, link: "https://playo.id/" },
  { id: 19, logo: S, link: "https://www.cambrionics.com/" },
  { id: 20, logo: T, link: "https://www.ijlsci.in/ls/index.php/home" },
  { id: 21, logo: U, link: "https://www.sciencedirect.com/journal/developmental-biology" },
];

const Collaborations = () => {
  return (
    <div id="collaborations" className="py-20">
      <div className="mx-auto px-6">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-300 mb-6">
            Our Collaborations
          </h2>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-8">
          {COLLABORATIONS.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-8 bg-gray-900 rounded-xl border border-white/20 hover:border-pink-800 shadow hover:shadow-pink-400 transition"
            >
              <img
                src={item.logo}
                alt="collaboration-logo"
                className="max-h-14 w-auto object-cover"
              />
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Collaborations;
