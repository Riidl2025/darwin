import React, { useState, useEffect } from 'react';
import darwin from "../../assets/Logos/darwin.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '4th Edition', href: '/edition4' },
    { name: 'Contact', href: '#footer' },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);

    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }

    if (href === '#') return;

    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950 backdrop-blur-md border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <div
            className="flex items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src={darwin}
              alt="Darwin Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-300 hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                  
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <span className="text-2xl font-bold">&#10005;</span>
              ) : (
                <span className="text-2xl font-bold">&#9776;</span>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        } bg-gray-950`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <div key={link.name}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-gray-300 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                {link.name}
              </button>
              {/* Mobile Dropdown */}
              {link.dropdown && isOpen && (
                <div className="pl-4 flex flex-col">
                  {link.dropdown.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:text-white px-3 py-1"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
