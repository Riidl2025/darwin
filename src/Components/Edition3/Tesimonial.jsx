import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "Darwin is about accelerated evolution. It is a celebration of all the things represented at the event. Most importantly, it is about open access to science and about equitable distribution of technology.",
      author: "Prof. George Church",
      role: "Professor of Genetics, Harvard Medical School",
    },
    {
      quote:
        "Mr. Erik Zepka, speaker at Darwin 2019 believes that open science needs to be multi-cultural. He says the Darwin conference to be one of the most rewarding, interactive, engaging and met the most interesting communities here.",
      author: "Mr. Erik Zepka",
      role: "Founding President, Open Science Network",
    },
    {
      quote:
        "It was an amazing experience, right from the keynote speech to the tours - learning how to start a business while going through all the challenges was interesting too. Different breakout sessions taught me about local Synthetic Biology. I was very inspired and I look forward to great works in the field of Synthetic Biology here in Africa. I’ll be glad to contribute to this development!",
      author: "Mr. Alex Kyabarongo",
      role: "iGEM Regional Ambassador Program Coordinator for Africa",
    },
    {
      quote:
        "Mr. Salman Promon Khan, attendee at Darwin 2019 says that it was amazing to see bio-enthusiasts from different parts of the world come together for the conference. He believes that Darwin can initiate and create a big global movement for the enthusiasts of biology and science.",
      author: "Mr. Salman Promon Khan",
      role: "CEO, Mechamind and Star Labs BD",
    },
    {
      quote:
        "It was a great conference made by great people and glad to put a grain of sand in there! I always felt inspired what Darwin and Bioriidl does and that honour is mutual. Looking forward to seeing what comes next.",
      author: "Mr. Robert Ramirez Garcia",
      role: "PhD student, Monash - Warwick Alliance & Former Chair, Education Committee, iGEM",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-pink-300 mb-12">
            Testimonial
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl shadow-md flex flex-col
                         bg-pink-100"
            >
              <p className="text-gray-800 mb-6 italic">"{t.quote}"</p>

              <div className="mt-auto">
                <h4 className="text-sm font-bold text-gray-900">
                  {t.author}
                </h4>
                <p className="text-xs text-gray-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
