import React from "react";

import A from "../../assets/4/Gallery/A.jpeg";
import B from "../../assets/4/Gallery/B.jpeg";
import C from "../../assets/4/Gallery/C.jpeg";
import D from "../../assets/4/Gallery/D.jpeg";
import E from "../../assets/4/Gallery/E.jpg";
import F from "../../assets/4/Gallery/F.jpg";
import G from "../../assets/4/Gallery/G.jpg";
import H from "../../assets/4/Gallery/H.jpg";
import I from "../../assets/4/Gallery/I.jpg";
import J from "../../assets/4/Gallery/J.jpg";
import K from "../../assets/4/Gallery/K.jpg";
import L from "../../assets/4/Gallery/L.jpg";

const Gallery = () => {
  const images = [A, B, C, D, E, F, G, H, I, J, K, L];

  return (
    <section className="py-20  relative overflow-hidden">
      
      {/* subtle background glow */}
      {/* <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div> */}
      {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-pink-300 mb-12">
          Photo Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden group rounded-xl aspect-4/3 cursor-zoom-in
                         border border-pink-200/20
                         bg-gray-800/80 backdrop-blur-md
                         shadow-lg shadow-pink-300/10"
            >
              <div className="absolute inset-0 bg-pink-300 opacity-0 group-hover:opacity-100 blur-xl transition-all"></div>

              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="relative z-10 w-full h-full object-cover
                           group-hover:scale-110 transition-transform duration-500"
              />

              {/* dark overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
