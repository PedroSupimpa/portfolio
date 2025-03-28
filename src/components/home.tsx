import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LanguageProvider from "./i18n/LanguageProvider";
import Header from "./layout/Header";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./layout/Footer";

const Home: React.FC = () => {
  const [language, setLanguage] = useState<"en" | "pt-br">("en");

  // Check for saved language preference in localStorage on initial load
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "en" | "pt-br";
    if (
      savedLanguage &&
      (savedLanguage === "en" || savedLanguage === "pt-br")
    ) {
      setLanguage(savedLanguage);
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("pt")) {
        setLanguage("pt-br");
      }
    }
  }, []);

  // Handle language change
  const handleLanguageChange = (lang: string) => {
    const newLang = lang === "pt" ? "pt-br" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900">
        <Header
          currentLanguage={language}
          onLanguageChange={handleLanguageChange}
        />

        <main>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <HeroSection language={language} />
            <AboutSection />
            <ProjectsSection language={language} />
            <SkillsSection language={language === "pt-br" ? "pt" : "en"} />
            <ContactSection language={language} />
          </motion.div>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Home;
