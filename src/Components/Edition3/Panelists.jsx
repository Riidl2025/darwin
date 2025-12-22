import React, { useState } from "react";
import cangle from "../../assets/3/Panelists/Panel1/cangle.jpeg";
import izurr from "../../assets/3/Panelists/Panel1/izurr.jpeg";
import nathanw from "../../assets/3/Panelists/Panel1/nathanw.jpeg";
import paulv from "../../assets/3/Panelists/Panel1/paulv.jpeg";
import sanker from "../../assets/3/Panelists/Panel1/sanker.jpeg";
import stacys from "../../assets/3/Panelists/Panel1/stacys.jpeg";

import alexs from "../../assets/3/Panelists/Panel2/alexs.jpeg";
import peterf from "../../assets/3/Panelists/Panel2/peterf.jpeg";
import sjay from "../../assets/3/Panelists/Panel2/sjay.jpeg";
import udays from "../../assets/3/Panelists/Panel2/udays.jpeg";
import yux from "../../assets/3/Panelists/Panel2/yux.jpeg";

import gjensen from "../../assets/3/Panelists/Panel3/gjensen.jpeg";
import sadvani from "../../assets/3/Panelists/Panel3/sadvani.jpeg";
import varshab from "../../assets/3/Panelists/Panel3/varshab.jpeg";

const Panelists = () => {
  const [activeTab, setActiveTab] = useState("panel1");
  const [selectedPanelist, setSelectedPanelist] = useState(null);

  const panel1Data = [
    { id: 1, name: "Dr. Nathan Walworth", img: nathanw, desc: "Dr. Nathan Walworth (PhD) is an entrepreneurial climate scientist and futurist whose work lies at the intersection of exponential tech, carbon removal, regeneration, culture prediction, experience design, DNA sequencing, and the marine microbiome. His environmental research has taken him from the Tropics to Antarctica. He has previously co-founded several startups across diverse industries from sustainable fashion to cannabis. He is Co-founder and VP of Science at Project Vesta where he leads the science teams to scale nature-based strategies in gigaton carbon removal. He is Co-founder of the NEXUS Futurism Group: a platform designed to convene leaders across industry to guide the ethical advancement in rapidly emerging technologies. He is also Co-founder of the NEXUS Impact Accelerator where he accelerates companies across tackling the UN Sustainable Development Goals. He is an Adjunct Professor of Regenerative Studies and an expert in the Marine Microbiome. He also serves on the Advisory Board for the AI-driven culture prediction company, sparks & honey, where he blends cultural signals with his business and scientific background to advise companies on future cultural trends." },
    { id: 2, name: "Carolyn Angleton", img: cangle, desc: " Carolyn Angleton is a bioartist and biotechnology researcher. She has taught art and critical theory at California State University, Fresno and Sierra College in Rocklin, CA. She is a co-founder of ARC/BAC, an art and synthetic biology collaborative at the American River College in Sacramento, California, and director of SacBioArts. Her biological artwork involves designing art/science protocols which investigate biosynthetic color pathways and pattern design in bacteria. Through serving on the organizing committee for the MIT Global BioSummit and Biofellows Initiative, she’s committed to building a world-wide art/science network that addresses issues of social justice, knowledge diversification and equity. " },
    { id: 3, name: "Dr. Stacy Switzer", img: stacys, desc: "Stacy Switzer is curator and executive director of Fathomers (Los Angeles, CA, USA) and served as artistic director of Grand Arts (Kansas City, MO, USA) from 2004-2015. Her current projects in development include the bioart survey Emergence: A Genealogy, supported by the Getty Foundation and opening in Los Angeles in 2024. In 2002, Switzer curated the first exhibition in the United States to include work by Oron Catts and Ionat Zurr’s Tissue Culture and Art Project. Additional bioartists Switzer has worked with include Critical Art Ensemble and Paul Vanouse (Cult of the New Eve, Grand Arts, 2004); Heather Dewey Hagborg (Field Station: Spirit Molecule, 2019); Faith Wilding and subRosa (Salina Art Center, 2002); Sissel Tolaas (Grand Arts, 2007 and 2012); and Phil Ross (MycoCosmos, Fathomers, 2017). She has been a visiting lecturer, critic and consultant for Creative Capital, Sotheby's Institute, the Jerome Foundation, and the Philadelphia Exhibitions Initiative, among others. With Annie Fischer, Switzer is co-editor of Problems and Provocations: Grand Arts 1995-2015." },
    { id: 4, name: "Dr. Ionat Zurr", img: izurr, desc: "Dr. Ionat Zurr is the Chair of the Fine Arts Discipline at the School of Design The University of Western Australia (UWA), a core researcher and the academic co-ordinator at SymbioticA: the Centre of Excellence in Biological Arts, School of Human Sciences at the University of Western Australia (UWA) & Adjunct Professor at Hong Kong University of Science and Technology, Computational and Media Arts 2021 – 2024. Zurr was visiting scholar at The Centre of Arts and Art History at Stanford University (2007) and Research Fellow at The Tissue Engineering & Organ Fabrication Laboratory, Harvard Medical School (2000-2001). Zurr is considered a pioneer in the field of Biological Arts; she published widely and exhibited internationally in areas beyond the arts such as new materials, textiles, design, architecture, ethics, fiction, and food." },
    { id: 5, name: "Dr. Paul Vanouse", img: paulv, desc: "Paul Vanouse is an artist and professor of Art at the University at Buffalo, NY, where he is the founding director of the Coalesce Center for Biological Art. Interdisciplinarity and impassioned amateurism guide his art practice. His projects, “Latent Figure Protocol”, “Suspect Inversion Center” and “America Project” use molecular biology techniques to challenge misleading “DNA-hype”, such as the idea that “DNA Is Destiny”. His work has been exhibited in over 25 countries and widely across the US. Recent solo exhibitions include: Burchfield-Penny Gallery in Buffalo, Beall Center in Irvine, Muffathalle in Munich, Schering Foundation in Berlin, and Kapelica Gallery in Ljubljana. His scent-based bio-artwork, Labor, was awarded the Golden Nica at Prix Ars Electronica, 2019." },
    { id: 6, name: "Dr. Suzanne Anker", img: sanker, desc: "Suzanne Anker is a visual artist and theorist working at the intersection of art and the biological sciences. Her practice investigates the ways in which nature is being altered in the 21st century. Concerned with genetics, climate change, species extinction and toxic degradation, she calls attention to the beauty of life and the “necessity for enlightened thinking about nature’s ‘tangled bank’.” Anker frequently works with “pre-defined and found materials” botanical specimens, medical museum artifacts, laboratory apparatus, microscopic images and geological specimens. She works in a variety of mediums ranging from digital sculpture and installation to large-scale photography to plants grown by LED lights. Her work has been shown both nationally and internationally in museums and galleries including the Everson Museum of Art, Syracuse, NY; Daejeon Biennale, Korea; ZKM, Karlsruhe, Germany; Walker Art Center, Minneapolis, MN; the Smithsonian Institute, Washington, D.C.; the Phillips Collection, Washington, DC; P.S.1 Museum, New York, NY; J. Paul Getty Museum, Los Angeles, CA; the Berliner Medizinhistorisches Museum der Charité, Berlin, Germany; the Center for Cultural Inquiry, Berlin, Germany; the Pera Museum, Istanbul, Turkey; the Museum of Modern Art, Kyoto, Japan; and the International Biennial of Contemporary Art of Cartagena de Indias, Colombia. Anker’s exhibitions have been the subject of reviews and articles in the New York Times, Artforum, Art in America, Flash Art, and Nature. Her books include The Molecular Gaze: Art in the Genetic Age, co-authored with the late sociologist Dorothy Nelkin, published in 2004 by Cold Spring Harbor Laboratory Press, Visual Culture and Bioscience, co-published by University of Maryland and the National Academy of Sciences in Washington, D.C. Her writings have appeared in Art and America, Seed Magazine, Nature Reviews Genetics, Art Journal, Tema Celeste and M/E/A/N/I/N/G. Her work has been the subject of reviews and articles in the New York Times, Artforum, Art in America, Flash Art, and Nature. She has hosted twenty episodes of the Bio Blurb show, an Internet radio program originally on WPS1 Art Radio, in collaboration with MoMA in NYC, now archived on Alana Heiss’ Clocktower Productions. She has been a speaker at Harvard University, the Royal Society in London, Cambridge University, Yale University, the London School of Economics, the Max-Planck Institute, University of Leiden, the Hamburger Bahnhof Museum in Berlin, the Courtauld Institute of Art in London, Banff Art Center any many others. Chairing SVA’s Fine Arts Department in NYC since 2005, Ms. Anker continues to interweave traditional and experimental media in her department’s new digital initiative and the SVA Bio Art Lab."},
  ];

  const panel2Data = [
    { id: 1, name: "Dr. S. Jay Olshansky", img: sjay, desc: "S. Jay Olshansky received his Ph.D. in Sociology at the University of Chicago in 1984. He is currently a Professor in the School of Public Health at the University of Illinois at Chicago, Research Associate at the Center on Aging at the University of Chicago and at the London School of Hygiene and Tropical Medicine, and Chief Scientist at Lapetus Solutions, Inc. The focus of his research to date has been on estimates of the upper limits to human longevity, exploring the health and public policy implications associated with individual and population aging, forecasts of the size, survival, and age structure of the population, pursuit of the scientific means to slow aging in people (The Longevity Dividend), and global implications of the re-emergence of infectious and parasitic diseases. Dr. Olshansky is on the Board of Directors of the American Federation of Aging Research; he is the first author of The Quest for Immortality: Science at the Frontiers of Aging (Norton, 2001) and A Measured Breath of Life (2013); and co-edited Aging: The Longevity Dividend (Cold Spring Harbor Laboratory Press, 2015). In 2016, Dr. Olshansky was honored with the Donald P. Kent Award from the Gerontological Society of America, the Irving S. Wright Award from the American Federation for Aging Research, and he was named one of Next Street’s Influencer in Aging." },
    { id: 2, name: "Dr. Yu-Xuan Lu", img: yux, desc: "Dr. Yu-Xuan Lu is a molecular biologist and biogerontologist at Max Planck Institute for Biology of Ageing, a co-founder of Max Planck PostdocNet, and an intercultural trainer currently based in Germany. Originally from China, where he received his PhD degree on Biochemistry and Molecular Biology in 2012, he moved to Germany as an EMBO Fellow and Postdoctoral Researcher in 2014. Yu-Xuan’s work focus on combating ageing via understanding biological mechanisms of ageing and repurposing existing drugs to anti-ageing usage, in which he received prestigious awards such as EMBO long-term fellowship (2014-2016) and European Crucible for future research leaders (2021), and was invited to present his work including EMBO fellows’ meeting (2017) and Aging Research & Drug Discovery meeting (2021). Apart from his scientific contribution, Yu-Xuan devotes himself to academic working culture improvement. He co-founded and leads the Max Planck PostdocNet and MPCSA.eV, both bring researchers together to achieve common good. In addition, he serves on several Advisory Boards at Max Planck Society, where he contributes on the topics of leadership culture, career development, and diversity & inclusion." },
    { id: 3, name: "Uday Saxena", img: udays, desc: "Dr. Uday Saxena is currently a Co-Founder of start-up Biotech Company - ReaGene Innovations. He has held Executive and Leadership positions at Parke- Davis in Ann Arbor, AtheroGenics in Atlanta (VP Drug Discovery), Dr. Reddy’s Laboratories (Chief Scientific Officer, US and India) and Kareus Therapeutics (CEO). He has a PhD in Biochemistry from Memorial University and Post- doctoral training at Columbia University. He was associated with the Team at Parke-Davis/Pfizer that discovered Lipitor/atorvastatin, the largest selling (peak sales of $17 billion dollars) drug in pharma business. He led teams that brought several drug candidates from an idea into the clinic. Dr. Saxena’s current research interests are translational product discovery. His passion is to continue being an entrepreneur having initiated biotech companies in the US and India. He is one of the few executives who combine excellence in science as well as the business side of pharma including being part of a start-up which was successfully listed on wall street (NASDAQ). He serves as a review member/Mentor to several DBT panels as well as IKP and CSIR programs. He is a well-known speaker in International and National platforms and recipient of academic and Industry honors. He has published more than 60 papers and been granted/filed 33 patents." },
    { id: 4, name: "Alexandra Stolzing", img: alexs, desc: "Professor Alexandra Stolzing, PhD was born in Bonn, Germany, where she studied Biology before focusing on aging and regenerative medicine at Charite Berlin, the Kroto Tissue Engineering Institute Sheffield, UK, and the Fraunhofer Institute Leipzig, Germany. Currently she is a full Professor for Biogerentological Engineering at Loughborough University UK, and Vice President for Research at the SENS Foundation, a Silicon-Valley based research charity promoting the application of regenerative medicine to aging." },
    { id: 5, name: "Dr. Peter Fedichev", img: peterf, desc: "He is an entrepreneur and scientist with over 20 years of experience in academic research and biotech. His scientific background lies in the field of condensed matter physics, biophysics, and bioinformatics. He has conducted research at Kurchatov Institute, one of the leading science government agencies in Russia, AMOLF, an academic institute for fundamental physics in the Netherlands, and the University of Innsbruck. He earned his M.S. in theoretical physics from the Moscow Institute of Physics and Technology and Ph.D. from the University of Amsterdam and currently has over 75+ publications in peer-reviewed journals. The most recent works concern quantitative modeling of aging and chronic diseases, biomarkers of stress and aging, as well as a demonstration of rejuvenation in model organisms. Peter founded GeroSense, a company using AI/ML to quantify health and aging from ambient digital sources, such as wearable devices and mobile phones. He believes that nothing beats the joy of discovery, the power of physics to uncover the laws of nature, and the challenge of aging research. His dream is to beat aging and experience life in space." },
  ];

  const panel3Data = [
    { id: 1, name: "Dr. Grant J. Jensen", img: gjensen, desc: "Grant Jensen is a Professor of Biochemistry and Dean of the College of Physical and Mathematical Sciences at Brigham Young University (BYU) in Provo, Utah. He earned his doctorate working on electron microscopy of RNA polymerase and other protein complexes with Dr. Roger Kornberg (who later won the Nobel prize for structural studies of transcription) at Stanford University. Next Grant continued his work in protein electron microscopy as a Damon Runyon-Walter Winchell post-doctoral fellow under the supervision of Dr. Kenneth Downing at the Lawrence Berkeley National Lab. There his interests expanded to include electron tomography of whole cells. Grant began his independent career at the California Institute of Technology (Caltech) in 2002. At Caltech his research has focused on three main areas: the ultrastructure of small cells, the structural biology of HIV, and the further development of cryo-EM technology. Together with his colleagues he has now published nearly 200 papers in these areas (see http://www.jensenlab.caltech.edu/publications.html). His lab has developed a searchable tomography database and populated it with ~50 thousand cryotomograms of over 100 different viral and microbial samples (https://etdb.caltech.edu/). Among his most prominent discoveries has been the structure and function of the bacterial type VI secretion system, a ’poison-tipped spring-loaded molecular dagger,’ and the architecture of the type IV pilus responsible for cell motility. All this work is now summarized in an electronic textbook, the Atlas of Bacterial and Archaeal Cell Structure (https://www.cellstructureatlas.org/). Meanwhile Grant’s teaching has centered on biophysical methods, including the creation of the popular online course Getting started in Cryo-EM (http://cryo-em-course.caltech.edu/). In 2020 Grant moved to BYU to become Dean of their College of Physical and Mathematical Sciences" },
    { id: 2, name: "Dr. Varsha Bhargava", img: varshab, desc: "Varsha got her Masters in Biotechnology at St. Xavier’s College in Kolkata, India. Once she graduated, she went on to get her PhD at UTSouthwestern in Dallas, Texas, where she worked in the lab of Dr. Michael Buszczak. At UTSouthwestern she worked on in vivo CRISPR based genetic screens using Drosophila as a model system to discover novel genes crucial for germ cell development and maintenance. She led the optimization of CRISPR protocols in Drosophila which are now used by multiple other labs across the United States. After completing her work in graduate school, she went on to a short industry postdoc at Boehringer-Ingelheim in Ridgefield, Connecticut. Here, she worked on uncovering genetic pathways and small molecules that aid adult cell trans-differentiation to pancreatic beta cells. Currently, she works as a Research Scientist at Vertex Pharmaceuticals in Boston, Massachusetts, where her work focusses on pipeline projects like Alpha 1 Anti Trypsin Deficiency along with exploratory projects uncovering new therapies for other rare genetic diseases. Along with her science, Varsha enjoys cooking, dancing and styling! She is also passionate about introducing STEM education to young girls from minority and underprivileged backgrounds. Her other but most important passion is mental health awareness and education- feel free to ask her about her story!" },
    { id: 3, name: "Dr. Siddhi Advani", img: sadvani, desc: "Siddhi Advani is an interdisciplinary scientist and skin microbiome researcher. Their love for developmental biology began at St. Xavier’s College, Mumbai where they obtained a Bachelor’s in Life Science. After that, they completed a Master’s in Biochemistry at the University of Hyderabad, and worked on a summer research program in developmental biology at Center for Cell and Molecular Biology, Hyderabad. Siddhi completed their PhD at University of Massachusetts Amherst, working on developmental biology of frog gastrulation and cell biology of microtubule-severing enzymes. They presented their work at the Northeastern Society for Developmental Biology and ASCB conferences. After obtaining their doctorate, Siddhi moved to New York City and volunteered at two community DIYBio labs over the span of a year – Biotech Without Borders and Genspace. There, they consulted for a seed-stage synthetic biology startup. Siddhi conducted their postdoctoral research on postnatal development of the mouse intestine at Yale School of Medicine in New Haven, CT, before moving back to Amherst to investigate the skin microbiome with an industry partner. Siddhi is passionate about using their knowledge of developmental biology to further our understanding of the skin microbiome." },
  ];

  const currentPanelData =
    activeTab === "panel1"
      ? panel1Data
      : activeTab === "panel2"
      ? panel2Data
      : panel3Data;

  const handleSelect = (person) => {
    setSelectedPanelist(selectedPanelist?.id === person.id ? null : person);
  };

  return (
    <section className="py-20 text-white relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-center text-pink-300 mb-12">
          Panelists
        </h2>

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

            <button
              onClick={() => { setActiveTab("panel3"); setSelectedPanelist(null); }}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                activeTab === "panel3"
                  ? "bg-pink-300 text-gray-900 shadow-md shadow-pink-300/40"
                  : "text-gray-300 hover:text-pink-200"
              }`}
            >
              Panel 3
            </button>

          </div>
        </div>

        <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-pink-200/20 shadow-lg shadow-pink-300/20">

       {/* TITLE */}
<h3 className="text-2xl text-center font-bold mb-6 text-pink-200 tracking-wide">
  {activeTab === "panel1"
    ? "Panel Discussion on 'Redesigning the Future of Science with BioArt'"
    : activeTab === "panel2"
    ? "Panel Discussion on 'Aging: A curable disease or an inevitable process'"
    : "Panel Discussion on 'Cell and Developmental Biology: Perspectives from around the world'"}
</h3>


          {selectedPanelist && (
            <div className="mb-10 bg-gray-700/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-pink-200/30 text-center">
              <h4 className="text-xl font-bold text-pink-300">{selectedPanelist.name}</h4>
              <p className="text-sm text-gray-300 mb-2">{selectedPanelist.role}</p>
              <p className="text-gray-200 mt-2">{selectedPanelist.desc}</p>
            </div>
          )}

          <div className="flex flex-wrap gap-10 justify-center">
            {currentPanelData.map((p) => (
              <div
                key={p.id}
                className="flex flex-col items-center space-y-2 cursor-pointer group"
                onClick={() => handleSelect(p)}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-pink-300 shadow-md shadow-pink-300/30"
                />
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
