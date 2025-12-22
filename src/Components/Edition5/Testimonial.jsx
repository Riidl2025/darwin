import React, { useState } from "react";

// ---- Imported Images ----
import t1 from "../../assets/5/Testimonials/testimonial1.png";
import t2 from "../../assets/5/Testimonials/testimonial2.png";
import t3 from "../../assets/5/Testimonials/testimonial3.png";
import t4 from "../../assets/5/Testimonials/testimonial4.png";
import t5 from "../../assets/5/Testimonials/testimonial5.png";
import t6 from "../../assets/5/Testimonials/testimonial6.png";
import t7 from "../../assets/5/Testimonials/testimonial7.png";

// ---- Testimonial Data ----
const TESTIMONIALS = [
  {
    id: 1,
    name: "Georgiana Lorena Moruz, Romania",
    role: "Student",
    src: t5,
    span: "md:col-span-2",
    content:
      "It helped me to expand my knowledge on many things such as universe and life, genetics, AI, data storage, the possibility to create a universe with codes, and trying to build the tech in order to remove DNA information. I really enjoyed what Markus Schmidt told us about the power of the AI, what Joe Davis told about the milky way DNA, the Microvenus project, what Joe Zayner said regarding my question of whether AI can take on human characteristics including emotional intelligence, what Jonathan Minchin said regarding my question of how international policies can improve regarding climate change. Thank you for giving me this opportunity to participate and hope to hear more from you in the future."
  },       
  {
    id: 2,
    name: "Bilal Rehman, Pakistan",
    role: "Bioartist, Biohacking Space Peshawar",
    src: t3,
    content:
      "So it was my first year at Darwin conference where I as a team member of Biohacking Space Peshawar presented a DIY project - building a DIY Incubator. I am grateful to Darwin for giving us a chance to exchange ideas and have conversations with people from multiple countries and communicate with such amazing minds. I personally learned so much form this virtual conference. Thank you so much again to all organisers and speakers!"
    },
  
  {
    id: 3,
    name: "Salman Promon Khan, Bangladesh",
    role: "CEO, Mechamind and Star Labs BDv",
    src: t6,
    content:
      "It was amazing to see bio-enthusiasts from different parts of the world come together for the conference. I believe that Darwin can initiate and create a big global movement for the enthusiasts of biology and science!"
  },
  {
    id: 4,
    name: "Nana Oforiwaa Ntorinkansah, Africa",
    role: "Student, Kwame Nkrumah University of Science and Technology",
    src: t7,
    content:
      "I had no clear idea of what to expect when I joined Darwin as an ambassador and registered for the international conference. However, the conference has enhanced my knowledge from the classroom and I'm confident that I can one day achieve something for myself and the science community. The keynote speakers, the workshops and networking will go a long way to advance my career in biotechnology!"
  },
  {
    id: 5,
    name: "Isabel Lara Mora, Mexico",
    role: "Student",
    src: t4,
    content:
      "My experience was gratifying since as a student knowing topics of interest helped me to form better criteria, in addition to expanding my culture because it was in another part of the world!"
  },
  {
    id: 6,
    name: "Deepakshi Kasat, India",
    role: "Founder, The BioTalk Magazine",
    src: t2,
    content:
      "Darwin was quite an interesting experience - the fact that the team pulled it off so systematically in a lockdown was truly impressive. Daily updates, availability, networking opportunities, such insightful talks and workshops, kudos to the team. Further, as a collaborator, I had a great learning experience. Looking forward to more such collaborations between Darwin and The BioTalk Magazine!"
  },
  {
    id: 7,
    name: "Alex Kyabarongo, Africa",
    role: "Co-Founder, Center for STEM Education and Research (CeSTER)",
    src: t1,
    span: "md:col-span-2",
    content:
      "It was an amazing experience starting from the keynote speeches to the tours, learning how to build a startup, going through all the challenges and the deficiencies to creating a stable and sustainable project or startup. The different breakout sessions that taught about local synthetic biology and the different experiences surrounding them and how obstacles have been negotiated to reach there. I was inspired and I look forward to seeing more great work done in the world of synthetic biology here in Africa, I will be glad to contribute towards this development!"
  }
];

// ---- Testimonial Card ----
const TestimonialCard = ({ data }) => {
  const [open, setOpen] = useState(false);
  const isWide = data.span && data.span.includes("col-span-2");

  return (
    <div
      onClick={() => setOpen(!open)}
      className={`relative group overflow-hidden rounded-3xl p-6 sm:p-8 
      bg-gray-900 border border-gray-800 
      hover:border-pink-500 hover:shadow-xl 
      transition-all duration-500 ease-out cursor-pointer
      flex flex-col
      ${data.span || ''}
      ${isWide ? 'md:flex-row md:items-center md:gap-8' : ''}`}
    >
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl group-hover:bg-pink-500/20 transition-all duration-500" />

      <div className={`relative z-10 ${isWide ? "flex-1 order-2 md:order-1" : ""}`}>
        <p
          className={`text-gray-300 leading-relaxed text-sm transition-all duration-500 
          ${open ? "max-h-[500px]" : "max-h-16 overflow-hidden"}
        `}
        >
          "{data.content}"
        </p>

        <span className="text-pink-400 text-xs mt-2 inline-block select-none">
          {open ? "Show Less ▲" : "Read More ▼"}
        </span>

        {!isWide && (
          <div className="mt-6 flex items-center gap-3">
            <img
              src={data.src}
              alt={data.name}
              className="w-10 h-10 rounded-full ring-2 ring-gray-800 object-cover"
            />
            <div>
              <h4 className="font-semibold text-white text-sm">{data.name}</h4>
              <p className="text-xs text-gray-500">{data.role}</p>
            </div>
          </div>
        )}
      </div>

      {/* Wide Layout */}
      {isWide && (
        <div className="mt-6 md:mt-0 md:w-48 flex md:flex-col items-center md:items-start gap-4 md:border-l md:border-gray-800 md:pl-8 order-1 md:order-2 shrink-0 relative">
          <img
            src={data.src}
            alt={data.name}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full ring-2 ring-pink-500/20 object-cover"
          />
          <div>
            <h4 className="font-bold text-white text-base md:text-lg">{data.name}</h4>
            <div className="text-sm text-gray-400">{data.role}</div>
          </div>
        </div>
      )}
    </div>
  );
};

const Testimonial = () => (
  <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-pink-300 mb-6">
        Testimonials
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {TESTIMONIALS.map((t) => (
        <TestimonialCard key={t.id} data={t} />
      ))}
    </div>
  </section>
);

export default Testimonial;
