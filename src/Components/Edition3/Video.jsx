import React from "react";

const Video = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-pink-300 mb-12">
            After Movie
          </h2>
        </div>

        {/* VIDEO BOX */}
        <div className="relative w-full h-72 md:h-[500px] rounded-3xl overflow-hidden border shadow-xl shadow-pink-300/20" >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/Fwc84gqvsnc?start=1"
            title="Conference After Movie"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

      </div>
    </section>
  );
};

export default Video;
