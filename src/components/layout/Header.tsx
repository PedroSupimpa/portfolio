import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface HeaderProps {
  currentLanguage?: string;
  onLanguageChange?: (language: string) => void;
}

const Header = ({
  currentLanguage = "en",
  onLanguageChange = () => {},
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation items with translations
  const navItems = [
    { id: "home", en: "Home", pt: "Início" },
    { id: "about", en: "About Me", pt: "Sobre Mim" },
    { id: "projects", en: "Projects", pt: "Projetos" },
    { id: "skills", en: "Skills", pt: "Habilidades" },
    { id: "contact", en: "Contact", pt: "Contato" },
  ];

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (language: string) => {
    onLanguageChange(language);
    closeMenu();
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-background ${isScrolled ? "shadow-md py-2" : "py-4"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link
            to="/"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Portfolio
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {currentLanguage === "en" ? item.en : item.pt}
            </a>
          ))}

          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Toggle language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
                <span className={currentLanguage === "en" ? "font-bold" : ""}>
                  English
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("pt")}>
                <span className={currentLanguage === "pt" ? "font-bold" : ""}>
                  Português
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Toggle language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
                <span className={currentLanguage === "en" ? "font-bold" : ""}>
                  English
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("pt")}>
                <span className={currentLanguage === "pt" ? "font-bold" : ""}>
                  Português
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-foreground/80 hover:text-primary py-2 transition-colors"
                onClick={closeMenu}
              >
                {currentLanguage === "en" ? item.en : item.pt}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
