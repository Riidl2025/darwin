import React from "react";
import img1 from "../../assets/2/Pre_Event/img1.jpeg";
import img2 from "../../assets/2/Pre_Event/img2.png";
import img3 from "../../assets/2/Pre_Event/img3.jpeg";
import img4 from "../../assets/2/Pre_Event/img4.png";
import img5 from "../../assets/2/Pre_Event/img5.png";
import img6 from "../../assets/2/Pre_Event/img6.png";

const PreEvent = () => {
  const events = [
    {
      title: "Panel discussion on Genetic Modifications - Safe or Unsafe?",
      img: img1,
      desc: "With Mr. Salman Promon Khan, Ms. Maria Chavez, Mr. Robert Garcia and Mr. Otim Geoffrey as our panelists - the topic of Genetically Modified organisms was thoroughly discussed. The sub-topics of bioethics, legal framework, and importance of biolabs were brought forth and the glaring absence of knowledge about the subject was acknowledged along with ways to correct this.",
    },
    {
      title: "Ask Me Anything session on Myths and Facts about Food for Immunity Boosts by Dt. Bhavna Sharma",
      img: img2,
      desc: "Talking about the myths and facts about immune and immunity system, Dt. Bhavna Sharma instilled a need for better lifestyle in all viewers. Things about gluton based diet, home remedies as boosts and vitamin supplements were cleared and a precise understanding was presented about how they work and how should we make them work.",
    },
    {
      title: "Ask Me Anything session on 7 years until we stop existing by Mr. Sagar Singh",
      img: img3,
      desc: "The session witnessed Mr. Sagar Singh, an environmentalist talking about how climate change governs life right now and the only way to battle the degradation is switch to sustainable methods because complete ban of plastic and shut down of industries is not possible. Addressing the Doomsday Clock incident, the attendees were enlightened with a very different perspective and the alarming problem that should be the world's biggest priority right now - climate change.",
    },
    {
      title: "Ask Me Anything on Save a little today to live a better tomorrow by Mr. Subhajit Mukherjee",
      img: img4,
      desc: "Mr. Subhajit talked about the intentions and psych of the population who do not acknowledge the many problems that arise with inefficient use of freshwater. He talked about important factors like time and education that are needed urgently in order to bring about a substantial change in society when it comes to fast depleting sources. The event came to an end at a hopeful note with a promise to do better today and tomorrow - not just for us but for those who do not enjoy the same resources as us and the ones who truly deserve it.",
    },
    {
      title: "Ask Me Anything on Biodiversity Conservation and Community Building",
      img: img5,
      desc: "The event held a profound impact as personal topics like education and qualities required in order to be an impactful leader were discussed by Mr. Nirit Dutta with regards to nature and life in general. Important issues like impractical education practiced in India and the conflict regarding meat consumption was addressed with positive milestones from the speaker’s own life. The event talked about community building, biological management, a career in it and the scope of becoming successful in it along with qualities required to be a changemaker in the field.",
    },
    {
      title: "Pre-Research Symposium",
      img: img6,
      desc: "Join us from a small glimpse into our mini world built with science and research. We are glad to announce our partnership with the BioTalk Magazine for our Pre-Research Symposium where all of you can submit your research articles and get a chance to be featured in the BioTalk Magazine and a special mention on Darwin's website.",
    },
  ];

  return (
      <div className="py-20 container mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-300">
            Pre Event
          </h2>
          <p className="text-slate-200 mt-4 text-lg">
            So as to make up for the lack of physical presence, we bring to quite a journey filled with virtual pre-events and contests where scientists and researchers come together with students to facilitate the commendable start of Darwin 2.0.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {events.map((e, i) => (
            <div key={i} className="group1" style={{ perspective: "1200px" }}>

              {/* Flip wrapper */}
              <div className="relative h-[420px] transition-transform duration-700" style={{ transformStyle: "preserve-3d" }}>
                
                <div className="absolute inset-0 rounded-3xl overflow-hidden" style={{ backfaceVisibility: "hidden" }}>
                  <img 
                  src={e.img} 
                  alt={e.title} 
                  className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute inset-x-8 bottom-8">
                    <h3 className="text-xl font-black text-gray-200 leading-tight">
                      {e.title}
                    </h3>
                  </div>
                </div>

                <div
                  className="absolute inset-0 rounded-3xl bg-slate-900 p-6 flex items-center"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {e.desc}
                  </p>
                </div>
              </div>

              {/* hover trigger */}
              <style>{`
                .group1:hover > div {
                  transform: rotateY(180deg);
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
  );
};
export default PreEvent;