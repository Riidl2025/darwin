import React from "react";

const Testimonial = () => {
  const items = [
    {
      name: "Mr. Salman Promon Khann",
      role: "CEO, Mechamind and Star Labs BD",
      quote:
        "Mr. Salman Promon Khan, attendee at Darwin 2019 says that it was amazing to see bio-enthusiasts from different parts of the world come together for the conference. He believes that Darwin can initiate and create a big global movement for the enthusiasts of biology and science.",
      link: "https://www.youtube.com/watch?v=-b9llJyDWyM",
    },
    {
      name: "Mr. Erik Zepka",
      role: "Founding President, Open Science Network",
      quote:
        "Mr. Erik Zepka, speaker at Darwin 2019 believes that open science needs to be multi-cultural. He says the Darwin conference to be one of the most rewarding, interactive, engaging and met the most interesting communities here.",
      link: "https://www.youtube.com/watch?v=DErV4DT3wHU",
    },
  ];

  return (
    // <section id="testimonials" className="py-24 bg-slate-900/20">
      <div className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-pink-300">
            Testimonials
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((t, i) => (
            <div
              key={i}
              className="p-2 glass-card rounded-[2.5rem] relative group"
            >
              <i className="fa-solid fa-quote-left text-4xl text-slate-800 absolute top-8 left-8 group-hover:text-amber-500/20 transition-colors"></i>

              <div className="relative">
                <p className="text-xl italic text-slate-300 mb-8 leading-relaxed font-light">
                  "{t.quote}"
                </p>

                <div className="flex items-center ">
                  <div>
                    <h5 className="text-green-200/50 font-bold">{t.name}</h5>
                    <p className="text-slate-400 text-xs uppercase tracking-wider font-bold">
                      {t.role}
                    </p>

                    {/* LINK */}
                    <a
                      href={t.link}
                      className="inline-block mt-2 px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 text-[10px] font-bold uppercase hover:bg-amber-500/20 transition"
                    >
                      Full Video
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    // </section>
  );
};

export default Testimonial;
