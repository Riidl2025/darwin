import React from "react";

const EventItem = ({ description}) => (
  <div className="p-6 rounded-xl border border-gray-700 bg-gray-900 hover:shadow-md shadow-gray-700 transition-all">
    {/* <h3 className="text-lg font-bold text-gray-900 mb-1">
      • {title}
    </h3> */}
    <p className="text-pink-200 text-lg leading-relaxed">
      • {description}
    </p>
  </div>
);

const Join = () => {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-pink-300 mb-3 text-center ">
          Join the Startup Summit for events like:
        </h2>

        <div className="space-y-4">
          <EventItem
            description="Founder's Talk"
          />

          <EventItem
            // title="Investors' Fireside Chat on Investors' perspective on early-stage startup investments for Life Sciences"
            description="Investors' Fireside Chat on Investors' perspective on early-stage startup investments for Life Sciences"
          />

          <EventItem
            // title="Panel Discussion on Startup ecosystem in India for Life Sciences startups"
            description="Panel Discussion on Startup ecosystem in India for Life Sciences startups"
          />

          <EventItem
            description="Networking session for startups, incubators, investors, government officials and corporates"
            // description="Connect with incubators, investors, government officials and corporates."
          />

          <EventItem
            description="Dedicated pitching sessions for startups in food, med-tech, agriculture, digital healthcare and industrial biotechnology"
            // description="Dedicated slots for startups in food, med-tech, agriculture, digital healthcare and biotech."
          />
        </div>

      </div>
    </section>
  );
};

export default Join;
