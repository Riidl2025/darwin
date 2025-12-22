import React from "react";
import img1 from "../../assets/3/Pre_Events/img1.jpeg";
import img2 from "../../assets/3/Pre_Events/img2.jpeg";
import img3 from "../../assets/3/Pre_Events/img3.jpeg";
import img4 from "../../assets/3/Pre_Events/img4.png";
import img5 from "../../assets/3/Pre_Events/img5.png";
import img6 from "../../assets/3/Pre_Events/img6.png";
import img7 from "../../assets/3/Pre_Events/img7.png";
import img8 from "../../assets/3/Pre_Events/img8.png";

const EVENTS = [
  { id: 1, title: "Ask me Anything session on the Role of Open Science in the Thriving Research Community", img: img1, text: "Talking about Open science, Ms. Bhavna Pandya enlightened us about accessing data in an open-source mode to all life science professionals. She also summarized about DIY biolabs, processes to apply for the same, challenges as well as scope in life sciences and industry." },
  { id: 2, title: "Ask me Anything session on Science Journalism: A new Researcher’s Perspective", img: img2, text: "Reputed science journalist, Dr. Martina Ribar Hestericová gave an overview about having opportunities, benefits and the dos and don’ts in the field of science journalism. She also spoke about her side hustle, and the challenges in the STEM field with well-versed skills." },
  { id: 3, title: "Ask me Anything session on the Emerging field of Biomaterials Science: Advancements and Opportunities", img: img3, text: "An aspiring PhD candidate, Ms. Frankie Lewns lectured about Biomaterials and how they would be a great asset in the future, its role in 3D bioprinting. She also spoke about her PhD work." },
  { id: 4, title: "Ask me anything session in celebration of #womaninscience on Science for Everybody: Paving the path in life sciences", img: img4, text: "A molecular biology student, Ms. Grace spoke about the role of science communication, research during the pandemic and failures in life sciences. Prominent skills required for a head start in the career were explained precisely." },
  { id: 5, title: "Ask Me Any session on Novel-Techniques in Medical Biology: From Organ on Chip to Lung Cancer Research", img: img5, text: "A well possessed career enlightened by Ms. Emily. Spoke about Organ on chip and micro fluidics in depth. Science communication as an essential guide and making science inclusive for all communities including the LGBTQ+ and its future scope was explained." },
  { id: 6, title: "Ask me Anything session in celebration of #womaninscience on STEM in Society: How 3D Printing can shape the World", img: img6, text: "Notable innovator Ms. Shweta Thapa had an insightful discussion about the world of 3D bioprinting, her journey into being an entrepreneur, the skill sets required to innovate, the common misconceptions and the challenges faced in the field of 3D bioprinting" },
  { id: 7, title: "Ask Me Any session on Cancer Cell Pathways: How One Signal Can Make a Difference", img: img7, text: "Biochemistry student Ms. McElrath gave an overview of her work in cancer metastasis and how the process of cell signaling occurs in cancer cells, she gave encouraging and kind advice to aspiring students and also spoke about the impact of research during Covid – 19" },
  { id: 8, title: "Ask Me Any session on STEM opportunities: How One Can Pursue Cancer Research", img: img8, text: "Ms Blyth is an integrated PhD student at the University of Southampton..." },
];

const PreEvent = () => {
  return (
    <div className="pt-20">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-10 xl:px-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-300">
            Pre Event
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
          {EVENTS.map((event) => (
            <div key={event.id} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-sm border hover:border-pink-800 hover:shadow-pink-800">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute bottom-0 left-0 w-full bg-black/20 p-3">
                  <h3 className="text-sm md:text-base font-bold text-white hover:text-green-600">
                    {event.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                {event.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreEvent;