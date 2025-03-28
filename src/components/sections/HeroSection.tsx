import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  language?: "en" | "pt-br";
  onLanguageChange?: (lang: "en" | "pt-br") => void;
}

const translations = {
  en: {
    greeting: "Hello, I am",
    name: "John Doe",
    title: "Full Stack Developer",
    description:
      "I build exceptional and accessible digital experiences for the web.",
    cta: "Learn more about me",
  },
  "pt-br": {
    greeting: "Olá, eu sou",
    name: "John Doe",
    title: "Desenvolvedor Full Stack",
    description:
      "Eu construo experiências digitais excepcionais e acessíveis para a web.",
    cta: "Saiba mais sobre mim",
  },
};

const HeroSection: React.FC<HeroSectionProps> = ({
  language = "en",
  onLanguageChange = () => {},
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<"en" | "pt-br">(
    language,
  );
  const text = translations[currentLanguage];

  useEffect(() => {
    setCurrentLanguage(language);
  }, [language]);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[600px] w-full bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80')] bg-cover bg-center opacity-10 dark:opacity-15"></div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 mb-2"
          >
            {text.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          >
            {text.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl font-medium mb-6 text-slate-200"
          >
            {text.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
          >
            {text.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Button
              onClick={scrollToNextSection}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 rounded-full text-lg group"
            >
              {text.cta}
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <div className="animate-bounce">
          <ArrowDown className="h-8 w-8 text-slate-300" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
