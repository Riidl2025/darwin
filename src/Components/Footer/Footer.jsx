import React from "react";
import darwin from "../../assets/Logos/darwin.png";
import insta from "../../assets/Footer/insta.png";
import X from "../../assets/Footer/X.png";
import facebook from "../../assets/Footer/fb.png";
import linkedin from "../../assets/Footer/in.png";

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-6 ">
      <div id="footer" className="max-w-6xl mx-auto flex items-center justify-between flex-wrap px-4 gap-4 border-t-2 border-gray-900">

        <div className="flex items-center gap-2">
          <img src={darwin} alt="Darwin" className="w-20 h-20 object-contain" />
        </div>

        <p className="text-gray-300 text-sm hover:text-pink-300">
            Contact us on:{" "}
            <a
              href="mailto:darwin@somaiya.edu"
              className="text-white hover:underline hover:text-pink-300"
            >
              darwin@somaiya.edu
            </a>
          </p>

        <div className="flex items-center gap-8 ">          {/* Social Icons */}
          <div className="flex items-center gap- hover:text-pink-300">
            <span className="text-gray-300 text-sm whitespace-nowrap hover:text-pink-300">Follow us on:</span>
            <SocialIcon href="#" src={insta} alt="Instagram" />
            <SocialIcon href="#" src={X} alt="X" />
            <SocialIcon href="#" src={facebook} alt="Facebook" />
            <SocialIcon href="#" src={linkedin} alt="LinkedIn" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, src, alt }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={alt}>
    <img
      src={src}
      alt={alt}
      className="w-6 h-6 object-contain hover:opacity-70 transition"
    />
  </a>
);

export default Footer;
