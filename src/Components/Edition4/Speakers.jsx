import React, { useState } from 'react';
import tony from "../../assets/4/Speaker/Anthony_Davis.jpg";
import Joe from "../../assets/4/Speaker/Joe_Davis.jpg";
import Markus from "../../assets/4/Speaker/Markus_Schmidt.jpg";
import Pierre from "../../assets/4/Speaker/pierre_dukan.jpg";
import Vishal from "../../assets/4/Speaker/Vishal_Bhuyaan.jpg";

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [showKeynoteDesc, setShowKeynoteDesc] = useState(false);

  const speakers = [
    { 
      name: "Dr. Markus Schmidt", 
      role: "Founder of Biofaction", 
      img: Markus,
      desc: "Dr. Markus Schmidt is founder and team leader of BIOFACTION (www.biofaction.com), a research, technology assessment and art-science institute in Vienna, Austria. With a multidisciplinary educational background in biomedical and electronic engineering, biology and environmental risk assessment he has carried out inter- and transdisciplinary projects in a number of science and technology fields such as GM-crops, gene therapy, nanotechnology, converging technologies, synthetic and xenobiology, and neurotechnology. Schmidt works on the interface between science and society, and since 2004 has participated in a total 22 EC FP6/7/H2020, national and international research projects projects. He served as an advisor to the EC European Group on Ethics (EGE, 2009), to the US Presidential Commission for the Study of Bioethical Issues (2010), and was member of the EC’s Scientific Committee on Emerging and Newly Identified Health Risks (SCENIHR, 2014/15) working group on synthetic biology."
    },
    { 
      name: "Joe Davis", 
      role: "Artist-scientist, Harvard Medical School", 
      img: Joe,
      desc: "A research affiliate in the Department of Biology at MIT, and in the George Church Laboratory at Harvard Medical School. Joe Davis spent most of his early life in the American Deep South. While earning his Creative Arts degree (1973) from Mt Angel College in Oregon, he pioneered sculptural methods in laser carving at Bell Laboratories in Murray Hill, NJ, and University of Cincinnati Medical Center Laser Laboratory."
    },
    { 
      name: "Dr. Pierre Dukan", 
      role: "Nutritionist", 
      img: Pierre,
      desc: "Committed since I am a nutritionist doctor in the fight against overweight, obesity and diabetes. In 1970, faced with a scientific environment immersed in the dogma of the undifferentiated calorie and faced with its impotence, I created my method leaving the calories for the categories. This method considers industrially processed carbohydrates as the exclusive culprit of overweight and diabetes, and proteins and dietary fibers as the two nutrients to be favored to fight them. This method has been supported by books that have sold 18 million copies in 30 countries. The second aspect of my action is my work and research on the impairment of the fetus during pregnancy by the ultra-processed diet of the mother. Such a diet during the 4th and 5th month of pregnancy (91st day to 150th day) deeply disturbs the development of the fetus' pancreas which produces a vulnerability of the future adult to overweight and diabetes. Once an adult, this acquired vulnerability will be directly affected by the new eating. And it is this encounter between a fragile pancreas and a non-human diet that is for me at the origin of the epidemic of overweight and diabetes, and by ricochet of the diseases of civilization."
    },
    { 
      name: "Vishaal Bhuyan", 
      role: " CEO Aanika Biosciences", 
      img: Vishal,
      desc: `Vishaal co-founded Aanika Biosciences in 2018 after experiencing first-hand the complexities and problems in our food supply chain. Prior to Aanika, Vishaal spent over a decade in the investing space, serving as a portfolio manager of a multi-strategy hedge fund with over a billion in AUM and trading a portfolio of esoteric derivatives for a group of family offices. He has co-authored / edited three books with Wiley and FT Press on the use of financial derivatives and insurance to combat issues such as overfishing, water scarcity and demographic change.
      Vishaal graduated from the University of Pennsylvania in 2005 with a B.A. in the History of Science and began his career working for one of the largest commodity traders on the New York Mercantile Exchange.`
    },
  ];

  return (
    <section className="py-20 text-white relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-pink-300 mb-4">Keynote Speaker</h2>
        </div>

        {/* KEYNOTE */}
        <div className="mb-20 relative">
          <div className="bg-gray-800/80 rounded-3xl shadow-lg overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row border border-pink-200/20">
            
            <div className="md:w-1/2">
              <img 
                src={tony} 
                alt="Keynote Speaker" 
                className="w-full h-full object-cover border-r border-pink-200/20"
              />
            </div>

            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h4 className="text-3xl font-bold text-pink-300 mb-2">Dr. Tony Davis</h4>
              <p className="text-pink-200 font-medium text-lg mb-6">
                Director & Co-Founder of Ziylo
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                Tony Davis obtained BA and DPhil degrees from Oxford University. After postdoctoral
                positions in Oxford and Zurich, he was appointed in 1982 as a Lecturer in Organic
                Chemistry at Trinity...
              </p>

              <button
                className="self-start px-6 py-2 border-2 border-green-600 text-green-600 font-semibold rounded hover:bg-green-200 hover:text-gray-900 transition-colors"
                onClick={() => setShowKeynoteDesc(true)}
              >
                Read More
              </button>
            </div>
          </div>

          {/* KEYNOTE DESCRIPTION CARD */}
          {showKeynoteDesc && (
            <div
              className="absolute inset-0 bg-gray-800/95 flex flex-col justify-center items-center p-10 rounded-3xl border border-pink-200/30 z-20 cursor-pointer"
              onClick={() => setShowKeynoteDesc(false)}
            >
              <h4 className="text-2xl font-bold text-pink-300 mb-4">
                Dr. Tony Davis
              </h4>
              <p className="text-gray-300 text-center max-w-4xl leading-relaxed">
                Tony Davis obtained BA and DPhil degrees from Oxford University. After postdoctoral positions in Oxford and Zurich, he was 
                appointed in 1982 as a Lecturer in Organic Chemistry at Trinity College, Dublin, Ireland. In September 2000 he moved to the 
                University of Bristol, where he is Professor of Supramolecular Chemistry in the School of Chemistry. In 2002 he was awarded 
                the Tilden Medal of the Royal Society of Chemistry, in 2015 the RSC Award for Physical Organic Chemistry, and in 2020 the RSC 
                Robert Robinson Award. He is currently Chair of the Editorial Board of Organic and Biological Chemistry. His research in 
                supramolecular chemistry has focused mainly on the design of synthetic receptors, especially for carbohydrates and anions. 
                His work on carbohydrate recognition has led to the foundation of two companies; Ziylo, which was sold in 2018 to the insulin 
                manufacturer Novo Nordisk, and Carbometrics, which is developing applications in glucose sensing. Other areas of interest include 
                crystal engineering, high affinity binding pairs, and the origin of life. In the last of these fields he has argued for the primary 
                importance of informational self-replication, and for an open mind concerning early versions of this process. His lecture will focus 
                mainly on the design of synthetic carbohydrate receptors and their potential for application in the treatment of diabetes.
              </p>

              <button className="mt-6 text-green-600 font-semibold">
                Close
              </button>
            </div>
          )}
        </div>

        {/* SPEAKERS */}
        <div className="relative">
          <h3 className="text-3xl font-bold text-center text-pink-300 mb-12">
            Speakers
          </h3>

          {selectedSpeaker && (
            <div
              className="absolute inset-0 bg-gray-800/90 flex flex-col justify-center items-center p-8 rounded-2xl shadow-lg border border-pink-200/30 z-10 cursor-pointer"
              onClick={() => setSelectedSpeaker(null)}
            >
              <h4 className="text-2xl font-bold text-pink-300 mb-2">
                {selectedSpeaker.name}
              </h4>
              <p className="text-pink-200 mb-2">{selectedSpeaker.role}</p>
              <p className="text-gray-300 text-center max-w-3xl">
                {selectedSpeaker.desc}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="group bg-gray-800/80 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-pink-200/20"
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={speaker.img}
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-end p-6">
                    <button
                      className="text-pink-200 text-sm font-semibold"
                      onClick={() => setSelectedSpeaker(speaker)}
                    >
                      View Profile →
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-pink-300">{speaker.name}</h4>
                  <p className="text-pink-200">{speaker.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Speakers;
