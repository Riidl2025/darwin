import React, { useState } from "react";
import aa from "../../assets/2/Our_Speaker/aa.jpeg";
import amyd from "../../assets/2/Our_Speaker/amyd.jpeg";
import gchurch from "../../assets/2/Our_Speaker/gchurch.jpeg";
import jjh from "../../assets/2/Our_Speaker/jjh.jpeg";
import jkelly from "../../assets/2/Our_Speaker/jkelly.jpeg";
import joed from "../../assets/2/Our_Speaker/joed.png";
import katea from "../../assets/2/Our_Speaker/katea.jpeg";
import tl from "../../assets/2/Our_Speaker/tl.jpeg";

const speakers = [
  {
    name: "Prof. George Church",
    img: gchurch,
    desc: "Prof. George is the professor of Genetics at Harvard Medical School, a founding member of the Wyss Institute & the director of PersonalGenomes.org, world’s only open-access information on human genomic, environmental and trait data. He developed the first methods for the first genome sequence & dramatic cost reductions since then (down from $3 billion to $600), contributing to nearly all “next generation sequencing” methods & companies. His team invented CRISPR for human stem cell genome editing & other synthetic biology technologies and applications.",
  },
  {
    name: "Dr. J.J. Hastings",
    img: jjh,
    desc: "Dr. Hastings works across multiple fields as a researcher as well as an entrepreneur, from synthetic biology to machine learning and bioastronautics. In 2017, Hastings founded the x0.lab Initiative a not-for-profit organization that supports mission-based scientific field studies and supporting STEAM education in remote communities. Hastings has co-founded two community labs, London Biohackspace.",
  },
  {
    name: "Dr. Jason Kelly",
    img: jkelly,
    desc: "Dr. Jason Kelly is the co-founder & CEO of Ginkgo Bioworks. Ginkgo is a synthetic biology company that programs cells for customers in the chemical, pharmaceutical, food & energy industries. The company recently raised over $430M in venture capital to expand their automated genetic engineering foundries. They have a $100M joint venture with Bayer to develop microbes for self-fertilizing crops, a $160M partnership with Roche to develop antibiotics & with Motif for making animal-free protein ingredients. They have been listed for the past three years on CNBC’s Disruptor 50 List of fast-growing companies. Prior to Ginkgo, Jason received B.S. degrees in Chemical Engineering & Biology and a PhD in Biological Engineering all from MIT.",
  },
  {
    name: "Dr. Amy Dickman",
    img: amyd,
    desc: "Dr. Amy is the Founder and Director of Oxford University’s Ruaha Carnivore Project. She has worked in Africa for over 20 years, specialising in human-carnivore conflict and community-based conservation. She has published over 80 papers and book chapters on large carnivore conservation, is a National Geographic Explorer and has won international awards for her conservation work.",
  },
  {
    name: "Mr. Joe Davis",
    img: joed,
    desc: "A research affiliate in the Department of Biology at MIT, and in the George Church Laboratory at Harvard Medical School. Joe Davis spent most of his early life in the American Deep South. While earning his Creative Arts degree (1973) from Mt Angel College in Oregon, he pioneered sculptural methods in laser carving at Bell Laboratories in Murray Hill, NJ, and University of Cincinnati Medical Center Laser Laboratory.",
  },
  {
    name: "Dr. Thomas Landrain",
    img: tl,
    desc: "One of the pioneers behind the DIYbio (Do-it-yourself Biology) & Open Science movements and communities. He founded in 2009 La Paillasse in Paris, the first French open lab which became one of the largest ones in the world. He is the founder of the digital platform Just One Giant Lab (JOGL.io). JOGL is the first research & innovation laboratory operating as a distributed, open and massive mobilisation platform for collaborative task solving.",
  },
  {
    name: "Dr. Kate Adamala",
    img: katea,
    desc: "Dr. Kate is a biochemist engineering synthetic cells. Her research aims at understanding chemical principles of biology, using artificial cells to create new tools for bioengineering, drug development, and basic research. The interests of the lab span questions from the origin and earliest evolution of life, using synthetic biology to colonize space, to the future of biotechnology and medicine. Kate is a co-founder of the synthetic cell therapeutics startup Synlife, and coordinator of the Build-a-Cell synthetic cell community.",
  },
  {
    name: "Ms. Anu Acharya",
    img: aa,
    desc: "As the Founder & CEO of Mapmygenome, Ms. Anu introduced the concept of personal genomics in India with the launch of Genomepatri in 2013. She co-founded & pioneered her first venture Ocimum Biosolutions through innovative bioinformatics & LIMS solutions, global acquisitions, awards, & fund raises. She serves on governing boards of NIBMG & IIIT Hyderabad; advisory Board at Action for India & KIIT; board of mentors for Ivy Cap Ventures; member of CII National Committee on Biotechnology; Committee Member of HIMSS Asia Pacific India Chapter",
  },
];

const Speakers = () => {
  const [activeSpeaker, setActiveSpeaker] = useState(null);

  return (
    <div id="speakers" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-pink-300 text-center mb-12">
          Our Speakers
        </h2>

        {/* Grid of Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {speakers.map((speaker, i) => (
            <div
              key={i}
              className="cursor-pointer group"
              onClick={() => setActiveSpeaker(speaker)}
            >
              <div className="aspect-square overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-pink-200 font-bold text-center mt-2">
                {speaker.name}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Description Card */}
      {activeSpeaker && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-gray-900 p-8 rounded-2xl max-w-md w-full relative">
            <button
              onClick={() => setActiveSpeaker(null)}
              className="absolute top-4 right-4 text-white text-xl"
            >
              ✕
            </button>

            <h4 className="text-green-500 text-xl font-bold text-center mb-4">
              {activeSpeaker.name}
            </h4>
            <p className="text-gray-200 text-sm text-justify">
              {activeSpeaker.desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Speakers;
