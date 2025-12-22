import React, { useState } from "react";
import philross from "../../assets/3/Our_Speaker/philross.jpeg";
import annad from "../../assets/3/Our_Speaker/annad.jpeg";
import asa from "../../assets/3/Our_Speaker/asa.jpeg";
import hkauf from "../../assets/3/Our_Speaker/hkauf.jpeg";
import jwillet from "../../assets/3/Our_Speaker/jwillet.jpeg";
import manojg from "../../assets/3/Our_Speaker/manojg.jpeg";
import ocatts from "../../assets/3/Our_Speaker/ocatts.jpeg";
import praveent from "../../assets/3/Our_Speaker/praveent.jpeg";
import schavan from "../../assets/3/Our_Speaker/schavan.jpeg";

const Speakers = () => {
  const [activeSpeaker, setActiveSpeaker] = useState(null);

  const mainSpeaker = {
    name: "Phil Ross",
    image: philross,
    paragraph:
      "Phil Ross is the Co-Founder and Chief Technical Officer of MycoWorks, a company that grows high performance mycelium for the fashion industry. With three decades of experience cultivating fungi, Philip’s inventions have pioneered the engineering and applications of mushroom materials for industry. Known as a thought leader on biomimicry, his artworks have been featured at NY MoMA, the Moscow Biennale of Contemporary Art, and the Venice Biennial of Architecture. In 2014 Philip joined Stanford University’s Department of Bioengineering as a Visiting Scholar, where he contributed designs towards the internet of biological things- the Bionet.",
  };

  const speakers = [
    {
      id: 1,
      name: "Dr. Surendra Chavan",
      image: schavan,
      bio: "Dr Surendra Chavan, CEO, Founder and Board Director of Rubhu Biologics Inc, Athens, USA. Dr. Chavan has sustained international experience in drug development, commercial partnerships, strategy development, and operational management and financial management of life sciences/biotechnology companies. He has more than 28 years of biotechnology experience, of which the last 20 years have been dedicated for the development of cell-based therapies and bio-therapeutic molecules for treatment of cancer and autoimmunity diseases. He also has over 20 years of global drug development experience covering preclinical, and early-stage clinical development, clinical operations, regulatory and safety functions. During this period, he held several positions of increasing responsibility and have successfully led drug development research programs at Celtaxsys, Inc (Atlanta, USA), Forest Life Sciences (San Diego, USA), Bioquant, (San Diego), and Memorial Sloan Kettering Cancer Center, (New York, USA) which resulted in over 50 publications in peer-reviewed journals and 12 US patents. Successfully manage global teams during the development/validation phase of several immunology- and cell biology-based assays for preclinical and clinical evaluation of novel drugs. He is one of the inventors of the real time fluorescent reverse transcriptase assay that forms the basis of today’s real time PCR technology platform. He has received several awards for his scientific contributions including the Henry Christian Award from American Federation for Medical Research Foundation, USA. Dr. Chavan earned his Ph.D. in Biochemistry from the “The Advanced Centre for Treatment, Research and Education in Cancer (ACTREC), Mumbai, India, and the Master degree in Biotechnology from the “Indian Institute of Technology” Mumbai, India."
    },
    {
      id: 2,
      name: "Dr. Howard Kaufman",
      image: hkauf,
      bio: "Dr. Howard L. Kaufman has been a leading authority on tumor immunotherapy and oncolytic viruses for the treatment of melanoma. He led the first successful phase III trial of an oncolytic herpes virus that demonstrated clinical benefit in patients with melanoma resulting in the first FDA approval of an oncolytic virus for the treatment of cancer. He also recently completed a positive clinical trial demonstrating therapeutic responses of a new PD-L1-directed monoclonal antibody in patients with Merkel cell carcinoma. Dr. Kaufman has maintained a funded laboratory in tumor immunology for nearly 20 years. He was born in Chicago, Illinois and received his MD degree from Loyola University, completed a residency in General Surgery at Boston University and fellowship training in Tumor Immunology and Surgical Oncology at the National Cancer Institute. He has previously held appointments as Chief of the Division of Surgical Oncology and Associate Director of the Herbert Irving Comprehensive Cancer Center at Columbia University, inaugural Director of the Rush University Cancer Center, and Associate Director for Clinical Science of the Rutgers Cancer Institute of New Jersey. His industry experience includes serving as Chief Medical Officer at Compass Therapeutics, Replimune, Inc. and currently at Ankyra Therapeutics. Dr. Kaufman has published over 500 peer-reviewed scientific papers, books, review articles and abstracts and serves on the editorial board of the Journal for Immunotherapy of Cancer, The Oncologist and Journal of Translational Medicine. He is a member of numerous professional societies and served as President of the Society for Immunotherapy of Cancer. Dr. Kaufman was the recipient of several awards including the Daland Prize, MRF Humanitarian Award and UIC Distinguished Alumnus Award. He has been appointed to the Board of Directors of several professional organizations, including the Melanoma Research Foundation, Melanoma Research Alliance, Commission on Cancer, American Cancer Society-Eastern Division and the University of Illinois Chicago College of Liberal Arts and Sciences. He maintains an academic appointment at Harvard Medical School and is a Clinical Associate at Massachusetts General Hospital"
    },
    {
      id: 3,
      name: "Dr. Jennifer Willet",
      image: jwillet,
      bio: "Dr. Jennifer Willet is a Canada Research Chair in Art, Science, and Ecology, a Professor in the School of Creative Arts at the University of Windsor and the Director of INCUBATOR Art Lab, founded in 2009. She is a member of the College of New Scholars, Artists, and Scientists in the Royal Society of Canada. Willet is a leader in the Canadian bioart community, and works internationally as an artist and curator in the field. In 2018, Willet opened a new state-of-the-art bioart laboratory, and in 2020 a storefront bioart studio and community engagement centre in Windsor, Ontario, Canada"
    },
    {
      id: 4,
      name: "Dr. Alejandro Sánchez Alvarado",
      image: asa,
      bio: "Sánchez Alvarado received a BS in molecular biology and chemistry from Vanderbilt University in Nashville, TN, and a PhD in pharmacology and cell biophysics from the University of Cincinnati College of Medicine in Cincinnati, OH. He performed postdoctoral and independent research at the Carnegie Institution of Washington, Department of Embryology in Baltimore, MD. In 2002, he joined the faculty of the University of Utah School of Medicine in Salt Lake City where he held the H.A. & Edna Benning Presidential Endowed Chair. In 2005, he was named a Howard Hughes Medical Institute Investigator. He joined the Stowers Institute for Medical Research in Kansas City in 2011 and became Executive Director and Chief Scientific Officer of the Stowers Institute in 2020. Sánchez Alvarado is a member of the National Academy of Science, the American Academy of Arts and Sciences, and the Latin American Academy of Sciences, a Kavli Fellow of the National Academy of Sciences USA, a Fellow of the Marine Biological Laboratory in Woods Hole, MA, a recipient of a National Institutes of Health MERIT award and the EE Just Medal for Scientific Achievement and as of 2021, the Priscilla Wood Neaves Endowed Chair in the Biomedical Sciences at the Stowers Institute for Medical Research. He has served on numerous scientific advisory committees and boards including the National Advisory Council of the National Institute of General Medical Sciences, National Institutes of Health, and presently serves on the Board of Directors of American Century Investments."
    },
   {
      id: 5,
      name: "Anna Dumitriu",
      image: annad,
      bio: "Anna Dumitriu is an award winning internationally renowned British artist who works with BioArt, sculpture, installation, and digital media to explore our relationship to infectious diseases, synthetic biology and robotics. Past exhibitions include ZKM, Ars Electronica, BOZAR, The Picasso Museum, HeK Basel, Science Gallery Detroit, MOCA Taipei, LABoral, Art Laboratory Berlin, and Eden Project. She holds visiting research fellowships at the University of Hertfordshire, Brighton and Sussex Medical School, and Waag Society, as well as artist-in-residence roles with the Modernising Medical Microbiology Project at the University of Oxford, and with the National Collection of Type Cultures at Public Health England. She was the 2018 President of the Science and the Arts Section of the British Science Association. Her work has featured in many significant publications including Frieze, Artforum International Magazine, Leonardo Journal, The Art Newspaper, Nature and The Lancet. Current collaborations include the Institute of Microbiology and Microbial Biotechnology at BOKU – Universität für Bodenkultur in Vienna, the EU H2020 CHIC Consortium, the University of Leeds and the Institute of Epigenetics and Stem Cells at HelmholtzZentrum in München. "
    },
   {
      id: 6,
      name: "Manoj Gopalkrishnan",
      image: manojg,
      bio: "Manoj Gopalkrishnan is Associate Professor at IIT Bombay, Founder-Director of Algorithmic Biologics Pvt Ltd, and an interdisciplinary researcher with publications spanning Mathematics, Physics, Chemistry, Biology, Computer Science, Information Theory, Control Theory, and Machine Learning. His awards and recognition include the Ramanujan fellowship, the Viterbi graduate fellowship, and finalist in the XPRIZE. He has coauthored more than 40 papers with more than 450 citations, and 2 patent publications, and has been a regular member of the program committee for the International Conference on DNA Computing and Molecular Programming for the past several years. He holds a PhD in Computer Science from University of Southern California and a B.Tech in Computer Science & Engineering from IIT Kharagpur."
    },
    {
      id: 7,
      name: "Praveen Tipirneni",
      image: praveent,
      bio: "Praveen Tipirneni, MD. is President and CEO of Morphic Therapeutic Inc. Previously, he was Senior Vice President of Corporate Development and Global Strategy at Cubist Pharmaceuticals, a position in which he served from 2002 until the company’s acquisition by Merck in 2015. In his time at Cubist, he was a member of the clinical group working on the Cubicin NDA (skin and skin structure infections) and sNDA (Staph. Bacteremia and Endocarditis) teams. He was head of business development since January 2006. Prior to joining Cubist, Dr. Tipirneni worked at Sun Microsystems in corporate strategy, Covad Communications in Corporate Strategy, and Deltagen in business development. He also served time as a 1st. Lieutenant in the U.S. Army. Dr. Tipirneni received a bachelor’s degree from MIT in mechanical engineering and an M. D. from McGill University. After completing his post-graduate residency in Internal Medicine at University of Illinois, Chicago, he received his MBA from the University of Pennsylvania’s Wharton School of Business in healthcare finance."
    },
    {
      id: 8,
      name: "Dr. Oron Catts",
      image: ocatts,
      bio: "Oron Catts is the co-founder and the Director of SymbioticA, The Centre of Excellence in Biological Arts, School of Human Sciences, The University of Western Australia. He is an artist, researcher, designer and curator who in 1996 pioneered the use of living tissue as a medium for artistic expression. In 2000 he co-founded SymbioticA. SymbioticA is the first research laboratory of its kind, enabling artists and researchers to engage in wet biology practices in a biological science department. SymbioticA offers new means of artistic inquiry, one in which artists actively use the tools and technologies of the life sciences, not just to comment about them, but also to explore their possibilities. SymbioticA was awarded the inaugural Golden Nica for Hybrid Arts in the Prix Ars Electronica in 2007, and the WA Premier’s Award in 2008. Based in one of the top research universities in Australia since 2000, SymbioticA has developed best practice systems for dealing with ethics and health & safety compliance and ways of displaying biological, environmental and socially sensitive artworks. Repeatedly supporting complex collaborative work has enabled SymbioticA to develop a clear framework for negotiating terms of intellectual property in fields where there may be little or no reference. Catts was a Research Fellow in Harvard Medical School, a visiting Scholar at the Department of Art and Art History, Stanford University, and a Visiting Professor of Design Interaction and a Professor at Large in Contestable Design at the Royal College of Arts, London. In 2012-2013 he set up a biological art lab called Biofilia - Base for Biological Art and Design, at the School of Art, Design and Architecture, Aalto University, Helsinki, where he was a Visiting Professor. He received his BA (Product Design) with First Class Honours, in 1996 and MA (Visual Arts) with Distinction in 2003 both from Curtin University of Technology.Catts interest is Life, more specifically the shifting relations and perceptions of life in the light of new knowledge and its applications. Often working in collaboration with other artists and scientists, Catts has developed a body of work that speaks volumes about the need for new cultural articulation of evolving concepts of life. Catts curated thirteen exhibitions, published/co-edited four books, published more than seventy book chapters and journal articles. He delivered more than twenty keynote addresses in conferences ranging from Artificial Life, Biomaterials, Architecture, Art, Design and Cultural Studies. His research creation work featured in exhibitions in prestigious venues such MoMA NY, Centre Pompidou, Mori art Museum, Science Gallery London and Dublin, Yerba Buena Center for the Arts, Ars Electronica, National Art Museum of China, and more. In 2009 Catts was recognised by Thames & Hudson’s “60 Innovators Shaping our Creative Future” book”, and by Icon Magazine as one of the top 20 Designers, “making the future and transforming the way we work”. Catts has made important contributions to research creation training by devising and delivering a range of intensive hands-on and theoretical workshops, supervising postgraduate students and mentoring artists and designers in all stages of their career. His work was covered by Nature, Science, The Lancet, The NY Times, Washington Post, Wired, New Scientist, Time, Newsweek and other TV, radio, print and online media."
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-bold text-center text-pink-300 mb-16">
        Keynote Speaker
      </h3>

      {/* MAIN SPEAKER */}
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-14 items-start mb-32">
        <img
          src={mainSpeaker.image}
          alt={mainSpeaker.name}
          className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-xl"
        />

        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold text-gray-100">{mainSpeaker.name}</h3>
          <p className="text-slate-400 text-lg leading-relaxed mt-4">
            {mainSpeaker.paragraph}
          </p>
        </div>
      </div>

      {/* OUR SPEAKERS */}
      <h3 className="text-2xl md:text-3xl font-bold mb-16 text-center text-pink-300">
        Our Speakers
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
        {speakers.map((s) => (
          <div key={s.id} className="text-center">
            <div
              className="w-32 h-32 mx-auto mb-6 cursor-pointer overflow-hidden rounded-full border border-white/10"
              onClick={() => setActiveSpeaker(s)}
            >
              <img
                src={s.image}
                alt={s.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-bold text-lg text-pink-200">{s.name}</h4>
          </div>
        ))}
      </div>

      {activeSpeaker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">
          <div className="relative bg-slate-900 max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-3xl p-10">
            <button
              onClick={() => setActiveSpeaker(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-white"
            >
              ✕
            </button>

            <div className="text-center mb-6">
              <img
                src={activeSpeaker.image}
                alt={activeSpeaker.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-green-600">{activeSpeaker.name}</h3>
            </div>

            <p className="text-gray-300 text-lg">
              {activeSpeaker.bio}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Speakers;
