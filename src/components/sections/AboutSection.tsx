import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Heart } from "lucide-react";
import React from "react";
import { useLanguage } from "../i18n/LanguageProvider";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";

interface AboutSectionProps {
  id?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id = "about" }) => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "About Me",
      subtitle: "Get to know me better",
      bio: "Currently enrolled in Systems Analysis and Development, I have two years of experience as a Full-Stack Developer. I specialize in React and Node.js, focusing on developing interactive and high-performance solutions. Driven by continuous learning, I seek to constantly improve my skills and expand my expertise in new technologies.",
      experience: "Experiences",
      experienceText: `Full-Stack Developer at Araucárias (Sep 2024 - Present): Responsible for developing an institutional application integrating AI tools.
Full-Stack Developer at MarjoSports (Nov 2023 - Sep 2024): Developed features for a betting platform using Node.js and Angular.
Software Development Intern at Orion (Mar 2023 - May 2024): Focused on front-end development with React and back-end with C#.
Electrician Technician at Voltech (2020 - 2022): Coordinated team operations and project management.`,
      education: "Education",
      educationText: `Bachelor in Systems Analysis and Development - UniCEUB (2022 - 2024)
Bachelor of Chemistry - UnB (2016 - 2018, not completed)`,
      interests: "Interests",
      interestsText:
        "I enjoy coding, learning new technologies, and exploring innovative solutions. I also have a keen interest in design and project management.",
    },
    "pt-br": {
      title: "Sobre Mim",
      subtitle: "Conheça-me melhor",
      bio: "Atualmente matriculado em Análise e Desenvolvimento de Sistemas, possuo dois anos de experiência como Desenvolvedor Full-Stack. Especializado em React e Node.js, foco no desenvolvimento de soluções interativas e de alta performance. Motivado pelo aprendizado contínuo, busco aprimorar minhas habilidades e expandir meu conhecimento em novas tecnologias.",
      experience: "Experiências",
      experienceText: `Desenvolvedor Full-Stack na Araucárias (Set 2024 - Presente): Responsável pelo desenvolvimento de um aplicativo institucional integrando ferramentas de IA.
Desenvolvedor Full-Stack na MarjoSports (Nov 2023 - Set 2024): Desenvolvimento de funcionalidades para uma plataforma de apostas com Node.js e Angular.
Estagiário em Desenvolvimento de Software na Orion (Mar 2023 - Mai 2024): Foco no desenvolvimento front-end com React e back-end com C#.
Técnico Eletricista na Voltech (2020 - 2022): Coordenação de equipe e gerenciamento de projetos.`,
      education: "Educação",
      educationText: `Bacharel em Análise e Desenvolvimento de Sistemas - UniCEUB (2022 - 2024)
Bacharelado em Química - UnB (2016 - 2018, não concluído)`,
      interests: "Interesses",
      interestsText:
        "Gosto de programar, aprender novas tecnologias e explorar soluções inovadoras. Também tenho interesse em design e gerenciamento de projetos.",
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
          <Separator className="mt-4 mx-auto w-24 bg-gradient-to-r from-blue-500 to-purple-600" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="sticky top-20">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-20"></div>
                <Card className="relative overflow-hidden rounded-2xl border-2 border-slate-200 dark:border-slate-700">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src="./profile-img.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 space-y-8 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700">
              <div>
                <div className="p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                  <p className="text-lg text-slate-900 dark:text-white leading-relaxed">
                    {t.bio}
                  </p>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="h-6 w-6 text-blue-500" />
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {t.experience}
                  </h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                  {t.experienceText}
                </p>
              </div>

              <Separator />

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-purple-500" />
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {t.education}
                  </h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                  {t.educationText}
                </p>
              </div>

              <Separator />

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-6 w-6 text-red-500" />
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {t.interests}
                  </h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {t.interestsText}
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
