import React from "react";

const OpportunityCard = ({ title, description }) => (
  <div className="bg-gray-900 p-8 rounded-2xl border border-gray-200 hover:shadow-lg shadow-gray-200 transition-all">
    <h3 className="text-xl font-bold text-gray-900 mb-3">
      {title}
    </h3>
    <p className="text-gray-100 leading-relaxed text-medium">
      {description}
    </p>
  </div>
);

const Opportunities = () => {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-300 mb-4">
            Opportunities
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <OpportunityCard
            description="1. To pitch about your startup to domain-specific and sector agnostic investors and raise funding."
          />

          <OpportunityCard
            description="2. Connect and learn from other startups and entrepreneurs in the Life Sciences domain."
          />

          <OpportunityCard
            description="3. Network with various stakeholders of the startup ecosystem including incubators, investors, government officials, successful entrepreneurs among others"
          />

          <OpportunityCard
            description="4. Hear experiences from various experts and investors on a variety of relevant topics"
          />
        </div>

      </div>
    </div>
  );
};

export default Opportunities;
