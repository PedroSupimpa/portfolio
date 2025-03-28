import React, { useState } from "react";
import { useContext } from "react";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { motion } from "framer-motion";

// Assuming we'll have a language context from LanguageProvider
interface LanguageContextType {
  language: "en" | "pt-br";
  setLanguage: (lang: "en" | "pt-br") => void;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(
  undefined,
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    return { language: "en", setLanguage: () => {} };
  }
  return context;
};

interface AboutSectionProps {
  id?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id = "about" }) => {
  const { language } = useLanguage();

  // Translation content
  const content = {
    en: {
      title: "About Me",
      subtitle: "Get to know me better",
      bio: "I am a passionate software developer with expertise in building modern web applications. With several years of experience in the industry, I have worked on a variety of projects ranging from small business websites to complex enterprise applications.",
      experience: "Experience",
      experienceText:
        "Over 5 years of professional experience working with React, TypeScript, and modern web technologies.",
      education: "Education",
      educationText:
        "Bachelor's degree in Computer Science from a prestigious university, with additional certifications in web development and UI/UX design.",
      interests: "Interests",
      interestsText:
        "When I'm not coding, I enjoy hiking, photography, and exploring new technologies. I'm also an avid reader and enjoy participating in tech communities.",
    },
    "pt-br": {
      title: "Sobre Mim",
      subtitle: "Conheça-me melhor",
      bio: "Sou um desenvolvedor de software apaixonado com experiência na construção de aplicações web modernas. Com vários anos de experiência na indústria, trabalhei em uma variedade de projetos, desde sites de pequenas empresas até aplicações empresariais complexas.",
      experience: "Experiência",
      experienceText:
        "Mais de 5 anos de experiência profissional trabalhando com React, TypeScript e tecnologias web modernas.",
      education: "Educação",
      educationText:
        "Bacharelado em Ciência da Computação por uma universidade prestigiada, com certificações adicionais em desenvolvimento web e design de UI/UX.",
      interests: "Interesses",
      interestsText:
        "Quando não estou programando, gosto de fazer trilhas, fotografia e explorar novas tecnologias. Também sou um leitor ávido e gosto de participar em comunidades de tecnologia.",
    },
  };

  const t = content[language];

  return (
    <section
      id={id}
      className="py-20 bg-slate-50 dark:bg-slate-900 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
            {t.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            {t.subtitle}
          </p>
          <Separator className="mt-4 mx-auto w-24" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="rounded-lg overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
                alt="Profile"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Card className="p-6 h-full">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg mb-6">{t.bio}</p>

                <h3 className="text-2xl font-semibold mb-3">{t.experience}</h3>
                <p className="mb-6">{t.experienceText}</p>

                <h3 className="text-2xl font-semibold mb-3">{t.education}</h3>
                <p className="mb-6">{t.educationText}</p>

                <h3 className="text-2xl font-semibold mb-3">{t.interests}</h3>
                <p>{t.interestsText}</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
