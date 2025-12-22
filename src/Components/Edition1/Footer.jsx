import React from "react";
import bioriidl from "../../assets/1/Logos/bioriidl.png";
import birac from "../../assets/1/Logos/birac.png";
import riidl from "../../assets/1/Logos/riidl.png";
import STrust from "../../assets/1/Logos/STrust.png";
import svv_logo from "../../assets/1/Logos/svv_logo.png";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-gray-400 border-t border-slate-900 py-8 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-8 text-center md:text-left">

          {/* Initiative */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-slate-700 font-bold uppercase tracking-wider text-sm text-center md:text-left">
              An Initiative Of
            </h3>
            <div className="flex flex-wrap gap-6 items-center justify-center md:justify-start">
              <img src={STrust} alt="STrust" className="h-10 sm:h-12" />
              <img src={svv_logo} alt="Somaiya" className="h-10 sm:h-12" />
            </div>
          </div>

          {/* Organized by */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-slate-700 font-bold uppercase tracking-wider text-sm">
              Organized By
            </h3>
            <img
              src={bioriidl}
              alt="BioRIIDL"
              className="h-10 sm:h-12 mx-auto md:mx-0"
            />
          </div>

          {/* Backed by */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-slate-700 font-bold uppercase tracking-wider text-sm">
              Backed By
            </h3>
            <img
              src={birac}
              alt="BIRAC"
              className="h-10 sm:h-12 mx-auto md:mx-0"
            />
          </div>

          {/* Supported by */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-slate-700 font-bold uppercase tracking-wider text-sm">
              Supported By
            </h3>
            <img
              src={riidl}
              alt="RIIDL"
              className="h-10 sm:h-12 mx-auto md:mx-0"
            />
          </div>

        </div>

        {/* Bottom bar */}
        <p className="text-slate-600 text-sm text-center">
          © 2024 BioInnovate 1st Edition. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
