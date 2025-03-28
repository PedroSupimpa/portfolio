import { motion } from "framer-motion";
import { Code, Database, Globe, Layers } from "lucide-react";
import React from "react";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface Skill {
  name: string;
  level: number;
  categories: ("frontend" | "backend" | "tools" | "languages")[];
}

interface SkillsSectionProps {
  title?: string;
  subtitle?: string;
  skills?: Skill[];
  language?: "en" | "pt";
}

const translations = {
  en: {
    title: "My Skills",
    subtitle: "Technologies and tools I work with",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools & DevOps",
      languages: "Languages",
    },
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    expert: "Expert",
    skillsCount: "skills in this category",
  },
  pt: {
    title: "Minhas Habilidades",
    subtitle: "Tecnologias e ferramentas com as quais trabalho",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      tools: "Ferramentas & DevOps",
      languages: "Linguagens",
    },
    beginner: "Iniciante",
    intermediate: "Intermediário",
    advanced: "Avançado",
    expert: "Especialista",
    skillsCount: "habilidades nesta categoria",
  },
};

const defaultSkills: Skill[] = [
  { name: "React", level: 90, categories: ["frontend"] },
  { name: "TypeScript", level: 85, categories: ["frontend", "backend"] },
  { name: "Angular", level: 65, categories: ["frontend"] },
  { name: "Next.js", level: 75, categories: ["frontend"] },
  { name: "Tailwind CSS", level: 80, categories: ["frontend"] },
  { name: "Sass", level: 70, categories: ["frontend"] },

  { name: "NestJs", level: 85, categories: ["backend"] },
  { name: "ExpressJs", level: 70, categories: ["backend"] },
  { name: "MongoDB", level: 70, categories: ["backend"] },
  { name: "PostgreSQL", level: 70, categories: ["backend"] },

  { name: "Jest", level: 75, categories: ["tools"] },
  { name: "Docker", level: 80, categories: ["tools"] },
  { name: "Git", level: 85, categories: ["tools"] },
  { name: "GitHub Actions", level: 70, categories: ["tools"] },
  { name: "Redis", level: 60, categories: ["tools"] },

  { name: "Advanced English", level: 90, categories: ["languages"] },
  { name: "Intermediate Spanish", level: 70, categories: ["languages"] },
];

const getLevelLabel = (level: number, language: "en" | "pt"): string => {
  if (level < 50) return translations[language].beginner;
  if (level < 70) return translations[language].intermediate;
  if (level < 90) return translations[language].advanced;
  return translations[language].expert;
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "frontend":
      return <Layers className="h-5 w-5 mr-2" />;
    case "backend":
      return <Database className="h-5 w-5 mr-2" />;
    case "tools":
      return <Code className="h-5 w-5 mr-2" />;
    case "languages":
      return <Globe className="h-5 w-5 mr-2" />;
    default:
      return null;
  }
};

const getLevelColor = (level: number): string => {
  if (level < 50) return "bg-amber-500";
  if (level < 70) return "bg-blue-500";
  if (level < 90) return "bg-indigo-500";
  return "bg-emerald-500";
};

const SkillsSection: React.FC<SkillsSectionProps> = ({
  title,
  subtitle,
  skills = defaultSkills,
  language = "en",
}) => {
  const t = translations[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  // The categories used in the Tabs remain unchanged.
  const categories = ["frontend", "backend", "tools", "languages"] as const;

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
            {title || t.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {subtitle || t.subtitle}
          </p>
        </motion.div>

        <Tabs defaultValue="frontend" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8 w-full max-w-md mx-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                {t.categories[category]}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="space-y-4">
              {/* Animate the inner content instead */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Card className="border-t-4 border-t-primary shadow-lg">
                  <CardHeader className="pb-2">
                    <div className="flex items-center">
                      {getCategoryIcon(category)}
                      <CardTitle className="text-xl">
                        {t.categories[category]}
                      </CardTitle>
                    </div>
                    <CardDescription>
                      {
                        skills.filter((skill) =>
                          skill.categories.includes(category)
                        ).length
                      }{" "}
                      {t.skillsCount}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {skills
                        .filter((skill) => skill.categories.includes(category))
                        .map((skill, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700"
                          >
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium text-slate-900 dark:text-white text-lg">
                                {skill.name}
                              </span>
                              <Badge
                                variant="outline"
                                className={`${
                                  skill.level >= 90
                                    ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
                                    : skill.level >= 70
                                    ? "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400"
                                    : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                                }`}
                              >
                                {getLevelLabel(skill.level, language)}
                              </Badge>
                            </div>
                            <div className="relative pt-1">
                              <div className="flex mb-2 items-center justify-between">
                                <div>
                                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-600 dark:text-slate-400">
                                    {skill.level}%
                                  </span>
                                </div>
                              </div>
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-slate-200 dark:bg-slate-700">
                                <div
                                  style={{ width: `${skill.level}%` }}
                                  className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${getLevelColor(
                                    skill.level
                                  )}`}
                                ></div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-sm py-1.5 px-3 hover:bg-primary hover:text-white transition-colors cursor-default"
              >
                {skill.name}
              </Badge>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
