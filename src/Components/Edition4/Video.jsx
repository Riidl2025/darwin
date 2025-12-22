import React from "react";

const Video = () => {
  return (
    <section className="py-20 relative overflow-hidden">

      {/* background glow */}
      {/* <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div> */}
      {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-center text-pink-300 mb-12">
            After Movie
          </h2>
        </div>

        {/* VIDEO BOX */}
        <div
          className="relative w-full h-72 md:h-[500px] rounded-3xl overflow-hidden
                     border border-pink-200/20
                     bg-gray-800/80 backdrop-blur-md
                     shadow-xl shadow-pink-300/20"
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/XN_541KwdhA"
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
