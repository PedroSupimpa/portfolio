import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageProvider";
import ProjectCard from "../projects/ProjectCard";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface ProjectsSectionProps {
  id?: string;
  language?: "en" | "pt-br";
}

const ProjectsSection = ({
  id = "projects",
  language: propLanguage,
}: ProjectsSectionProps) => {
  let language = propLanguage || "en";
  try {
    const languageContext = useLanguage();
    if (languageContext?.language) {
      language = languageContext.language;
    }
  } catch (error) {
    // If useLanguage fails, we'll use the prop language or default to "en"
    console.log("Using prop language or default", error);
  }
  const [filter, setFilter] = useState<string>("all");

  const translations = {
    en: {
      title: "Projects",
      subtitle: "Check out some of my recent work",
      all: "All",
      web: "Web",
      mobile: "Mobile",
      other: "Other",
      viewMore: "View More Projects",
    },
    "pt-br": {
      title: "Projetos",
      subtitle: "Confira alguns dos meus trabalhos recentes",
      all: "Todos",
      web: "Web",
      mobile: "Mobile",
      other: "Outros",
      viewMore: "Ver Mais Projetos",
    },
  };

  const t = translations[language as keyof typeof translations];

  // Mock projects data
  const projects = [
    {
      id: 1,
      title:
        language === "en" ? "E-commerce Platform" : "Plataforma de E-commerce",
      description:
        language === "en"
          ? "A full-featured e-commerce platform with product management, cart, and checkout."
          : "Uma plataforma de e-commerce completa com gerenciamento de produtos, carrinho e checkout.",
      detailedDescription:
        language === "en"
          ? "This e-commerce platform was built using React, Node.js, and MongoDB. It features user authentication, product management, shopping cart functionality, payment processing with Stripe, and order tracking. The UI was designed with a focus on user experience and mobile responsiveness."
          : "Esta plataforma de e-commerce foi construída usando React, Node.js e MongoDB. Possui autenticação de usuário, gerenciamento de produtos, funcionalidade de carrinho de compras, processamento de pagamentos com Stripe e rastreamento de pedidos. A interface foi projetada com foco na experiência do usuário e responsividade móvel.",
      thumbnail:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      liveUrl: "https://example.com/ecommerce",
      githubUrl: "https://github.com/username/ecommerce",
    },
    {
      id: 2,
      title:
        language === "en"
          ? "Task Management App"
          : "Aplicativo de Gerenciamento de Tarefas",
      description:
        language === "en"
          ? "A mobile app for managing tasks with reminders and categories."
          : "Um aplicativo móvel para gerenciar tarefas com lembretes e categorias.",
      detailedDescription:
        language === "en"
          ? "This task management app was developed using React Native and Firebase. It allows users to create, edit, and delete tasks, set reminders, categorize tasks, and track progress. The app features a clean and intuitive interface with dark mode support."
          : "Este aplicativo de gerenciamento de tarefas foi desenvolvido usando React Native e Firebase. Permite aos usuários criar, editar e excluir tarefas, definir lembretes, categorizar tarefas e acompanhar o progresso. O aplicativo possui uma interface limpa e intuitiva com suporte ao modo escuro.",
      thumbnail:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=600&q=80",
      tags: ["React Native", "Firebase", "Mobile"],
      category: "mobile",
      liveUrl: "https://example.com/taskapp",
      githubUrl: "https://github.com/username/taskapp",
    },
    {
      id: 3,
      title: language === "en" ? "Weather Dashboard" : "Painel de Clima",
      description:
        language === "en"
          ? "A web application that displays weather information for any location."
          : "Uma aplicação web que exibe informações meteorológicas para qualquer localização.",
      detailedDescription:
        language === "en"
          ? "This weather dashboard uses the OpenWeatherMap API to fetch and display current weather conditions and forecasts for any location. Built with React and styled with Tailwind CSS, it features a responsive design, search functionality, and visualization of weather data using charts."
          : "Este painel meteorológico usa a API OpenWeatherMap para buscar e exibir condições meteorológicas atuais e previsões para qualquer localização. Construído com React e estilizado com Tailwind CSS, possui design responsivo, funcionalidade de pesquisa e visualização de dados meteorológicos usando gráficos.",
      thumbnail:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&q=80",
      tags: ["React", "Tailwind CSS", "API Integration"],
      category: "web",
      liveUrl: "https://example.com/weather",
      githubUrl: "https://github.com/username/weather",
    },
    {
      id: 4,
      title: language === "en" ? "Portfolio Website" : "Site de Portfólio",
      description:
        language === "en"
          ? "A personal portfolio website showcasing projects and skills."
          : "Um site de portfólio pessoal mostrando projetos e habilidades.",
      detailedDescription:
        language === "en"
          ? "This portfolio website was built using React, Vite, and Tailwind CSS. It features a responsive design, smooth animations with Framer Motion, and multi-language support with i18n. The site includes sections for showcasing projects, skills, and contact information."
          : "Este site de portfólio foi construído usando React, Vite e Tailwind CSS. Possui design responsivo, animações suaves com Framer Motion e suporte a múltiplos idiomas com i18n. O site inclui seções para mostrar projetos, habilidades e informações de contato.",
      thumbnail:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&q=80",
      tags: ["React", "Tailwind CSS", "Framer Motion", "i18n"],
      category: "web",
      liveUrl: "https://example.com/portfolio",
      githubUrl: "https://github.com/username/portfolio",
    },
    {
      id: 5,
      title:
        language === "en"
          ? "Data Visualization Tool"
          : "Ferramenta de Visualização de Dados",
      description:
        language === "en"
          ? "A tool for visualizing complex datasets with interactive charts."
          : "Uma ferramenta para visualizar conjuntos de dados complexos com gráficos interativos.",
      detailedDescription:
        language === "en"
          ? "This data visualization tool was built using D3.js and React. It allows users to upload CSV or JSON data and create interactive visualizations such as bar charts, line graphs, pie charts, and scatter plots. The tool includes features for filtering, sorting, and exporting visualizations."
          : "Esta ferramenta de visualização de dados foi construída usando D3.js e React. Permite aos usuários carregar dados CSV ou JSON e criar visualizações interativas como gráficos de barras, gráficos de linha, gráficos de pizza e gráficos de dispersão. A ferramenta inclui recursos para filtrar, classificar e exportar visualizações.",
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      tags: ["React", "D3.js", "Data Visualization"],
      category: "other",
      liveUrl: "https://example.com/datavis",
      githubUrl: "https://github.com/username/datavis",
    },
    {
      id: 6,
      title:
        language === "en"
          ? "Fitness Tracking App"
          : "Aplicativo de Rastreamento de Fitness",
      description:
        language === "en"
          ? "A mobile app for tracking workouts, nutrition, and fitness goals."
          : "Um aplicativo móvel para rastrear treinos, nutrição e metas de condicionamento físico.",
      detailedDescription:
        language === "en"
          ? "This fitness tracking app was developed using Flutter and Firebase. It allows users to track workouts, log meals, set fitness goals, and monitor progress over time. The app includes features such as workout plans, calorie counting, and progress charts."
          : "Este aplicativo de rastreamento de fitness foi desenvolvido usando Flutter e Firebase. Permite aos usuários rastrear treinos, registrar refeições, definir metas de condicionamento físico e monitorar o progresso ao longo do tempo. O aplicativo inclui recursos como planos de treino, contagem de calorias e gráficos de progresso.",
      thumbnail:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
      tags: ["Flutter", "Firebase", "Mobile"],
      category: "mobile",
      liveUrl: "https://example.com/fitness",
      githubUrl: "https://github.com/username/fitness",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id={id}
      className="py-20 px-4 md:px-8 bg-slate-50 dark:bg-slate-900 min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            {t.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setFilter("all")}>
                {t.all}
              </TabsTrigger>
              <TabsTrigger value="web" onClick={() => setFilter("web")}>
                {t.web}
              </TabsTrigger>
              <TabsTrigger value="mobile" onClick={() => setFilter("mobile")}>
                {t.mobile}
              </TabsTrigger>
              <TabsTrigger value="other" onClick={() => setFilter("other")}>
                {t.other}
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (project.id % 3) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    detailedDescription={project.detailedDescription}
                    thumbnail={project.thumbnail}
                    tags={project.tags}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                    language={language as "en" | "pt-br"}
                  />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (project.id % 3) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    detailedDescription={project.detailedDescription}
                    thumbnail={project.thumbnail}
                    tags={project.tags}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                    language={language as "en" | "pt-br"}
                  />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (project.id % 3) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    detailedDescription={project.detailedDescription}
                    thumbnail={project.thumbnail}
                    tags={project.tags}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                    language={language as "en" | "pt-br"}
                  />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="other" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (project.id % 3) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    detailedDescription={project.detailedDescription}
                    thumbnail={project.thumbnail}
                    tags={project.tags}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                    language={language as "en" | "pt-br"}
                  />
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            {t.viewMore}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
