import React from 'react';

const Submission = () => {
  const rounds = [
    {
      title: "First Round",
      content:
        "This entails submitting a 250-words abstract that explains the research in general along with keywords",
    },
    {
      title: "Second Round",
      content:
        "The full research / review paper must be presented using PowerPoint presentations, as well as all research papers must be submitted",
    },
    {
      title: "Third Round",
      content:
        "If selected, the research / review papers will be then forwarded to the respective journals for a thorough peer review process following which publication process will be initiated",
    }
  ];

  return (
    <section id="guidelines" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-300">
            Submission Guidelines
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8">
          {rounds.map((round, idx) => (
            <div
              key={idx}
              className="bg-gray-800 border border-white/10 hover:border-pink-200/10 shadow hover:shadow-pink-200 p-8 rounded-2xl hover:bg-white/8 transition-colors "
            >
              <h3 className="text-sm md:text-lg font-semibold text-green-400 mb-3">
                {round.title}
              </h3>

              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {round.content}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Submission;
