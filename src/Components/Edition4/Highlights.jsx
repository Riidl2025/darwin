import React from "react";
import img1 from "../../assets/4/Highlights/hack3.jpg";
import img2 from "../../assets/4/Highlights/panel3.jpg";
import img3 from "../../assets/4/Highlights/speaker3.jpg";
import img4 from "../../assets/4/Highlights/tours3.jpg";
import img5 from "../../assets/4/Highlights/workshop3.jpg";

const Highlights = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4">
        
        <h2 className="text-3xl font-bold text-center text-pink-300 mb-12">
          Highlights
        </h2>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={img}
                alt={`Highlight ${idx + 1}`}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Highlights;
