
import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-dev-blue py-12 relative">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold gradient-text font-code">
              {"<Dev/>"}
            </a>
            <p className="text-gray-400 mt-2">
              Crafting digital experiences with code
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex gap-6">
              <a href="#home" className="text-gray-300 hover:text-dev-purple transition-colors">
                Home
              </a>
              <a href="#projects" className="text-gray-300 hover:text-dev-purple transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-gray-300 hover:text-dev-purple transition-colors">
                Skills
              </a>
              <a href="#about" className="text-gray-300 hover:text-dev-purple transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-300 hover:text-dev-purple transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} All rights reserved
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 bg-dev-purple rounded-full hover:bg-dev-darkPurple transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
