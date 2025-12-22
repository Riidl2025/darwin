import React from "react";
import Sanjay_Sonar from "../../assets/Startup_Summit/Founder_Talk/Sanjay_Sonar.jpg";
import ayushshukla from "../../assets/Startup_Summit/Panel_Discussion/ayushshukla.jpeg";
import Chhaya_Chauhan from "../../assets/Startup_Summit/Panel_Discussion/Chhaya_Chauhan.jpg";
import Mithun_John from "../../assets/Startup_Summit/Panel_Discussion/Mithun_John.jpg";
import Pranav_Anam from "../../assets/Startup_Summit/Panel_Discussion/Pranav_Anam.jpg";
import Pranav_Sanghvi from "../../assets/Startup_Summit/Panel_Discussion/Pranav_Sanghvi.jpg";
import Kanchi_Daiya from "../../assets/Startup_Summit/Fireside_Chat/Kanchi_Daiya.png";
import Raghuveer_Supra from "../../assets/Startup_Summit/Fireside_Chat/Raghuveer_Supra.png";
import Utpal_Doshi from "../../assets/Startup_Summit/Fireside_Chat/Utpal_Doshi.png";

const SpeakerCard = ({ name, image, company }) => (
  <div className="group relative bg-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center">
    <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-brand-50 group-hover:border-brand-100 transition-colors">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
    </div>

    <h3 className="text-lg font-bold text-gray-900">{name}</h3>
    {/* <p className="text-sm text-gray-500 mt-1">{role}</p> */}
    <p className="text-xs text-brand-600 font-semibold mt-2 px-3 py-1 bg-brand-50 rounded-full">
      {company}
    </p>
  </div>
);

const Panel = () => {
  return (
    <section id="panels" className="py-20">
      <div className="max-w-7xl mx-auto px-4 space-y-24">

        {/* Founder's Talk */}
        <div>
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-center text-pink-300">Founder's Talk</h2>
            </div>

            <div className="flex justify-center">
              <div className="bg-white/10 p-6 rounded-2xl text-center">
                <img
                  src= {Sanjay_Sonar}
                  alt="Dr. Sanjay Sonar"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-2xl font-bold text-gray-200">Dr. Sanjay Sonar</h3>
                <p className="text-gray-300">Founder & Director</p>
                <p className="text-gray-400 text-sm">Biogenomics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Panel Discussion */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-center mb-12 text-pink-300 ">
            Panel Discussion on Startups Ecosystem for Life Science Startups in India
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 ">
            <SpeakerCard name="Mr. Mithun John" company="HDFC" image={Mithun_John} />
            <SpeakerCard name="Mr. Pranav Sanghvi" company="Angel Investor" image={Pranav_Sanghvi} />
            <SpeakerCard name="Mr. Pranav Anam" company="The Gene Box" image={Pranav_Anam} />
            <SpeakerCard name="Ms. Chhaya Chauhan"  company="BIRAC" image={Chhaya_Chauhan} />
            <SpeakerCard name="Mr. Ayush Shukla" company="Sr. Programs Associate, Village Capital" image={ayushshukla} />
          </div>
        </div>

        {/* Fireside Chat */}
        <div className="bg-brand-50 rounded-3xl p-8 md:p-16">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-12 text-pink-300">
            Fireside Chat on Investor’s Perspective in Investing in Early Stage Life Sciences Startups
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SpeakerCard name="Ms. Kanchi Daiya" company="IAN, Bio Angels" image= {Kanchi_Daiya} />
            <SpeakerCard name="Mr. Utpal Doshi"  company="100x VC" image= {Utpal_Doshi} />
            <SpeakerCard name="Mr. Raghuveer Supra" company="Founder, Stemtech Medical Devices" image= {Raghuveer_Supra} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Panel;
