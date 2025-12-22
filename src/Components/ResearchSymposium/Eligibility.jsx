import React from 'react';

const Eligibility = () => {
  const criteria = [
    "Review Papers are also accepted along with Research Papers",
    "Only authentic and original papers are accepted. Plagiarism is not acceptable at all",
    "Plagiarism is not acceptable at all",
    "Open to all age groups and demographics"
  ];

  return (
    <section id="eligibility" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-300">
            Eligibility
          </h2>
        </div>
        <p className="text-gray-200 mb-4 text-2xl">
          The symposium is open to:
        </p>

        <div className="space-y-4">
          {criteria.map((text, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 bg-gray-400/45 p-5 rounded-xl border border-pink-200/20"
            >
              <div className="flex-shrink:0 w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <p className="text-gray-300 font-medium leading-snug">
                {text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Eligibility;
