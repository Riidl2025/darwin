import React from "react";

const InfoBox = ({ label, main, sub }) => (
  <div className="flex flex-col items-center md:items-start p-4 bg-brand-700/50 rounded-xl border border-brand-500/50">
    <span className="text-sm text-brand-200 uppercase tracking-wider font-semibold">
      {label}
    </span>
    <span className="text-xl font-bold mt-1">{main}</span>
    {sub && <span className="text-sm text-brand-100">{sub}</span>}
  </div>
);

const Event = () => {
  return (
    <section id="details" className=" py-20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Decorative circles */}
          {/* <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-brand-500 opacity-50"></div> */}
          {/* <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-brand-700 opacity-50"></div> */}

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
            
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-300">
                Event Details
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:w-auto text-pink-200">
              <InfoBox
                label="Date"
                main="5th February, 2023"
              />
              <InfoBox
                label="Time"
                main="11 AM Onwards"
              />
              <InfoBox
                label="Venue"
                main="The Somaiya School Auditorium,"
                sub="Somaiya Vidyvihar, Mumbai"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Event;
