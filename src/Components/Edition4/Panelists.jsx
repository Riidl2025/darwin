import React, { useState } from "react";
import Josiah_Zayner from "../../assets/4/Panelists/Bioesign/Josiah_Zayner.jpg";
import Margherita_Pevere from "../../assets/4/Panelists/Bioesign/Margherita_Pevere.jpg";
import Marta_Menezes from "../../assets/4/Panelists/Bioesign/Marta_Menezes.jpg";
import Minerva_Castellanos from "../../assets/4/Panelists/Bioesign/Minerva_Castellanos.jpeg";
import Salman_Promon from "../../assets/4/Panelists/Bioesign/Salman_Promon.jpg";
import David_Ishee from "../../assets/4/Panelists/GMO_Foods/David_Ishee.jpg";
import Dilip_Verma from "../../assets/4/Panelists/GMO_Foods/Dilip_Verma.jpg";
import Jonathan_Minchin from "../../assets/4/Panelists/GMO_Foods/Jonathan_Minchin.jpg";
import parvathi from "../../assets/4/Panelists/GMO_Foods/parvathi.jpg";

const Panelists = () => {
  const [activeTab, setActiveTab] = useState("panel1");
  const [selectedPanelist, setSelectedPanelist] = useState(null);

  const panel1Data = [
    { id: 1, name: "Ms. Margherita Pevere", role: "Bio-artist", img: Margherita_Pevere, desc: "Margherita Pevere (IT/DE) is an internationally acknowledged artist and researcher whose practice glides across biological arts and performance with a distinctive visceral signature. Her inquiry hybridizes biotechnology, ecology, politics, queer and death studies to create arresting artworks that trail today’s ecological complexity. Her body of work is a blooming garden crawling with genetically edited bacteria, cells, sex hormones, microbial biofilm, bovine blood, slugs, growing plants and decomposing remains. With Marco Donnarumma and Andrea Familari, she co-founded the artists’ group Fronte Vacuo to create performances made of bodies, symbionts, sounds, machines and images. She is completing a PhD at Aalto University on biological arts and queer studies." },
    { id: 2, name: "Ms. Marta de Menezes", role: "Director at Cultivamos Cultura", img: Marta_Menezes, desc: "Marta de Menezes (born 1975) is a Portuguese artist, with a Degree in Fine Arts from the University of Lisbon and a MSt from the University of Oxford. De Menezes is director of Cultivamos Cultura, the leading institution devoted to experimental art in Portugal and Ectopia, dedicated to facilitating collaborative work between artists and scientists. Marta de Menezes has worked in the intersection of art and biology since the late 90s, in the UK, Australia, the Netherlands, and Portugal, exploring the conceptual and aesthetic opportunities offered by biological sciences for visual representation in the arts. Her work has been widely exhibited in major venues in all continents, presented in most anthologies devoted to bioart, discussed in doctoral dissertations, and considered an example of research in the visual arts. Among the most recent international exhibitions, de Menezes was invited for the 2019 Ars Electronica Festival: Out of the Box, and organized two 2020 Ars Electronica Gardens (Lisbon and São Luis)." },
    { id: 3, name: "Ms. Minerva Castellanos", role: "Co-founder of Scintia", img: Minerva_Castellanos, desc: "Creator of Sinestesia, an Edtech startup focused on synthetic biology, and a bioart and biodesign exhibition, respectively. She is a fellow of the leadership program of the Global Community Biotechnology Initiative of the MIT Media Lab. Minerva was iGEM Ambassador for Latam and Outreach Lead of Design League. Leader in biotechnology selected by Allbiotech and TEDx speaker. Recognized by the Tec Women award in the entrepreneurship category in 2019." },
    { id: 4, name: "Dr. Jo Zayner", role: "Bio-engineer, biohacker, & CEO of The ODIN", img: Josiah_Zayner, desc: "Dr. Jo Zayner is a visionary biochemist and genetic designer. For over 15 years, they have pioneered work in the field of bioengineering, publishing a number of scientific papers on the topic. Jo received their PhD in Biophysics from the University of Chicago, winning a number of awards for their work on engineering proteins. They then spearheaded work on developing engineered microbes for Mars terraforming at NASA, eventually leaving to start The ODIN, a bioengineering company based in Austin, Texas that is working to make genetic engineering accessible to everyone. Zayner’s groundbreaking work in human genetic engineering and medicine has been the focus of many documentaries, including the Netflix documentary Unnatural Selection and the NYT documentary Gut Hack. They have been made fun of on Last Week Tonight with John Oliver and written about in media all over the world including The New York Times, The New Yorker, El País, Le Monde, Time, Scientific American and NPR, among others. Somehow Jo still finds time to be an accomplished artist whose work has been featured in exhibits at San Francisco MoMA, Philadelphia Museum of Art, NY MoMA, ZKM and the Smithsonian. Zayner is transgender and uses they/she pronouns advocating for diversity, body autonomy and science for all." },
    { id: 5, name: "Mr. Salman Promon", role: "Founder, Mechamind & STAR Labs BD", img: Salman_Promon, desc: "Salman Khan Promon is a science and technology enthusiast, looking for acquiring expertise required to solve real-life problems by working and collaborating with various local and global initiatives. He is currently working as a lecturer at the Department of Life Sciences, Independent University, Bangladesh. He completed his BS and MS in Biotechnology from Brac University, Bangladesh. He is involved in teaching, student activities, research, technology & innovation and social development initiatives. Currently his research line is focused on regenerative medicine, industrial biotechnology, biomedical engineering, cancer research, cell & molecular biology." },
  ];

  const panel2Data = [
    { id: 1, name: "Dr. Jonathan Minchin", role: "Founder of Ecological Interaction Applied Research group", img: Jonathan_Minchin, desc: "Jonathan is a multidisciplinary researcher and technology developer, focusing on environmental and land use change in rural and agricultural contexts. In the field ‘International Cooperation, Sustainable Emergency Architecture’ he has worked on housing and development projects associated with ‘UN habitat’ in Barcelona, ‘Habitat for Humanity’ in Costa Rica, ‘UNESCO’ in Cuba. He has authored several research papers and contributed to books on the topic of “Geographic referencing for Technology Transfer” and themes involving ‘Computational Agriculture’ and technology choice. Between 2013 and 2018 he set up and managed the ‘Green Fab Lab’ and ‘Valldaura Labs’ campus for the ‘Institute of Advanced architecture’ in Catalunya (IAAC). He co-founded the project and company OSBH ‘Open Source Beehives’ and was the project manager for the European Commission H2020 program named ‘ROMI’, Robotics for Micro-farms and is currently involved with the European Commission ‘ICAERUS’ program for innovation and capacity building in UAV services for crop monitoring. He now directs the applied research group named ‘Ecological Interaction’ and runs a ten hectare research farm in Southern Catalunya." },
    { id: 2, name: "Dr. Dilip Kumar Verma", role: "Senior Scientist at ICAR", img: Dilip_Verma , desc: "Dr. Dilip Kumar Verma is a senior scientist specializing in plant breeding, genetics, and cytogenetics. He has worked on a range of crops including rice, maize, wheat, temperate grasses, and legumes. Dr Verma received his MSc and PhD from the Dr Rajendra Prasad Central Agricultural University in Pusa, Bihar, and has guided 9 MSc students. He has developed a number of varieties of wheat and identified various strains of grasses and legumes. Dr Verma has also worked at various institutes including the ICAR-ICAR(RC)NEH region in Umiam, Meghalaya, the ICAR-IIMR in Ludhiana, the ICAR-IARI RS Pusa in Bihar, the ICAR-IGFRI RRS in Srinagar, Jammu and Kashmir, and the ICAR-IARI RS Indore, where he is currently based." },
    { id: 3, name: "Mr. David Ishee", role: "Dog Breeder & Biohacker", img: David_Ishee , desc: "David Ishee is a biohacker and dog breeder working on projects to improve access to genetic engineering technology. Starting with no degree or laboratory David had to be self taught genetic engineering and build his own genetic engineering lab. With a lab built from home made and used genetics equipment he’s been able to bootstrap genetically modified organisms at a fraction of the typical costs. His projects range from developing more accessible methods of gene editing dogs that allow breeders to remove genetic disease, all the way to developing DIY methods of gene therapy for humans.His work is focused around the idea that these powerful new technologies can only reach their potential if they’re accessible to a broad DIY community and the rapid innovation it can drive. This work led to media coverage all over the world with the biggest coverage of some of his work being on the BBC, MIT technology review, New Scientist, Showtime and a 4 part documentary on Netflix called “Unnatural Selection”. " },
    { id: 4, name: "Dr. Parvathi JR", role: "Assistant Director of Somaiya Institute for Research and Consultancy", img: parvathi, desc: "Dr. Parvathi JR is the Assistant Director of Somaiya Institute for Research and Consultancy and Co-director of the newly established Centre for Sustainable Development and Climate Action at Somaiya Vidyavihar University. She focuses on nucleating interdisciplinary research teams within the University, strengthening outreach communication, coordinating and executing special projects, and global networking assigned by management. Dr. Parvathi is also a bioscientoonist and is passionate about creating multilingual instructional scientoons, concept sketches, illustrations, and building a network of creative educators and communicators. She is also the Co-director of the newly established Centre for Sustainable Development and Climate Action at Somaiya Vidyavihar University and mainly contributes to drafting concept notes, building global programs, research capacity & network in omics, and strengthening outreach communication of the University’s sustainable initiatives." },
  ];

  const currentPanelData = activeTab === "panel1" ? panel1Data : panel2Data;

  const handleSelect = (person) => {
    setSelectedPanelist(selectedPanelist?.id === person.id ? null : person);
  };

  return (
    <section className="py-20 text-white relative">

      {/* Subtle Glow Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-50 pointer-events-none"></div> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-center text-pink-300 mb-12">
            Panelists
          </h2>
        </div>

        {/* TABS */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 p-1 rounded-full inline-flex shadow-md shadow-pink-300/20">

            <button
              onClick={() => { setActiveTab("panel1"); setSelectedPanelist(null); }}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                activeTab === "panel1"
                  ? "bg-pink-300 text-gray-900 shadow-md shadow-pink-300/40"
                  : "text-gray-300 hover:text-pink-200"
              }`}
            >
              Panel 1
            </button>

            <button
              onClick={() => { setActiveTab("panel2"); setSelectedPanelist(null); }}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                activeTab === "panel2"
                  ? "bg-pink-300 text-gray-900 shadow-md shadow-pink-300/40"
                  : "text-gray-300 hover:text-pink-200"
              }`}
            >
              Panel 2
            </button>

          </div>
        </div>

        {/* BOX */}
        <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-pink-200/20 shadow-lg shadow-pink-300/20">

          {/* TITLE */}
          <h3 className="text-2xl text-center font-bold mb-6 text-pink-200 tracking-wide">
            {activeTab === "panel1"
              ? "Tackling challenges in implementation of the field of Biodesign"
              : "GMO Foods: An asset to tackle Climate Change or a Health Risk ?"}
          </h3>

          {/* DESCRIPTION BOX */}
          {selectedPanelist && (
            <div className="mb-10 bg-gray-700/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-pink-200/30 text-center transition-transform hover:scale-105">
              <h4 className="text-xl font-bold text-pink-300">{selectedPanelist.name}</h4>
              <p className="text-sm text-gray-300 mb-2">{selectedPanelist.role}</p>
              <p className="text-gray-200 mt-2">{selectedPanelist.desc}</p>
            </div>
          )}

          {/* IMAGES GRID */}
          <div className="flex flex-wrap gap-10 justify-center">
            {currentPanelData.map((p) => (
              <div
                key={p.id}
                className="flex flex-col items-center space-y-2 cursor-pointer group"
                onClick={() => handleSelect(p)}
              >
                <div className="relative">
                  {/* Outer Glow */}
                  <div className="absolute inset-0 rounded-full bg-pink-300 blur-xl opacity-0 group-hover:opacity-30 transition-all"></div>

                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-pink-300 shadow-md shadow-pink-300/30 group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="text-center">
                  <span className="text-sm font-semibold text-white">{p.name}</span>
                  <p className="text-xs text-gray-300">{p.role}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Panelists;
