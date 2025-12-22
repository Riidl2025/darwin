import React, { useState } from "react";
import ab from "../../assets/1/OurSpeaker/ab.jpg";
import DavidKong from "../../assets/1/OurSpeaker/DavidKong.png";
import erik from "../../assets/1/OurSpeaker/erik.jpg";
import jacinta from "../../assets/1/OurSpeaker/jacinta.jpg";
import joe from "../../assets/1/OurSpeaker/joe.png";
import thomas from "../../assets/1/OurSpeaker/thomas.jpg";

const Speakers = () => {
  const [expanded, setExpanded] = useState(null);

  const speakers = [
    {
      name: "Joe Davis",
      image: joe,
      bio: "The Keynote Speaker at Darwin 2019 - Joe Davis is a Research Affiliate in the Department of Biology at MIT and an Artist Scientist in the George Church Laboratory at Harvard Medical School. Davis created the World’s First “Memory Crystals” of information-bearing DNA. His wide range of research projects include creating “DNA Programming Languages” for inserting poetic texts and graphics into living organisms, putting a map of the Milky Way into the ear of a transgenic mouse, experiments with Adam Zaretsky on how E. coli respond to jazz and other sounds and developing an Audio Microscope allowing you to hear living cells, each with its own acoustic signature."
    },
    {
      name: "David S. Kong",
      image: DavidKong,
      bio: "David Sun Kong, Ph.D. is a Synthetic Biologist, community organizer, musician, and photographer based in Lexington, MA. He is the Director of the MIT Media Lab's new Community Biotechnology Initiative. David conducted his graduate studies at MIT’s Media Lab, receiving a Master's degree for developing technology for printing nanostructures with energetic beams and a Ph.D. for demonstrating the first gene synthesis in a microfluidic (“lab-on-a-chip”) system."
    },
    {
      name: "Thomas Landrain",
      image: thomas,
      bio: "Thomas Landrain is a researcher in synthetic biology who has become an entrepreneur to build ecosystems facilitating open, inclusive and collaborative science and innovation, convinced that there is no monopoly on great ideas. He is Co-Founder of the Just One Giant Lab (JOGL), first research and innovation laboratory operating as a distributed, open and massive mobilisation platform for volunteer-based, IP-free task solving."
    },
    {
      name: "Erik Zepka",
      image: erik,
      bio: "Erik Zepka is a researcher, scientist, artist and philosopher that creates platforms to rethink how we engage with science and technology. He has presented at conferences and institutions internationally including NYU, ISEA, SFU, Border Sessions, Pikselfest and the University of the Arts London. He created the interdisciplinary research project based at xox labs and co-founded the Vancouver-based community lab the Open Science Network."
    },
    {
      name: "Anshu Bhardwaj",
      image: ab,
      bio: "Dr. Anshu Bharadwaj obtained her Ph.D. in Life Sciences (2008) from Center for Cellular and Molecular Biology, Hyderabad. The focus of her Ph.D. thesis was on prioritizing Single Nucleotide Polymorphism (SNPs) in disease association studies to identify potential biomarkers."
    },
    {
      name: "Jacinta D'Souza",
      image: jacinta,
      bio: "Prof. Jacinta D'Souza currently works as a Professor and Chairperson of the School of Biological Sciences, Centre for Excellence in Basic Sciences. She is a Ciliary Biologist and her research team is currently investigating three related scientific platforms."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pink-300 mb-12">
          Our Speakers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {speakers.map((speaker, idx) => {
            const isOpen = expanded === idx;

            return (
              <div
                key={idx}
                className="flex flex-col md:flex-row gap-8 items-start bg-gray-900 p-8 rounded-2xl border border-gray-700"
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full md:w-48 h-48 rounded-xl object-cover "
                />

                <div>
                  <h3 className="text-2xl font-bold text-slate-400 mb-2">
                    {speaker.name}
                  </h3>

                  <p
                    className={`text-slate-300 text-sm leading-relaxed ${
                      !isOpen ? "line-clamp-3" : ""
                    }`}
                  >
                    {speaker.bio}
                  </p>

                  <button
                    onClick={() => setExpanded(isOpen ? null : idx)}
                    className="mt-3 text-green-400 text-sm font-semibold hover:underline"
                  >
                    {isOpen ? "View Less" : "View More"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
