"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "SporTickets",
    description:
      "A full-stack platform for buying and selling tickets for sports events, featuring user authentication and payment processing.",
    image: "https://lucasharosa.github.io/imagens/sporticket.png",
    tags: ["Next.js", "NestJs", "Postgre", "Redis", "MercadoPago", "Heroku"],
    liveUrl: "https://beta.sportickets.com.br/",
    isRealProject: true,
  },
  {
    id: 2,
    title: "Custom Wheels",
    description: (
      <>
        Custom Wheels is a simplified version of a real-world project originally
        developed for a client. It was created in collaboration with{" "}
        <a
          href="https://github.com/zzzbeck"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dev-purple hover:underline"
        >
          @zzzBeck
        </a>
      </>
    ),
    image:
      "https://media.istockphoto.com/id/2090799539/video/spinning-fortune-wheel-animation-on-red-background-4k-loopable-3d-animation.jpg?s=640x640&k=20&c=ouTdD3UuT9XWCsd4-fVR8E1mbM1GzMt-Eyjco427VpA=",
    tags: ["Vite", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/PedroSupimpa/custom-wheels",
    liveUrl: "https://custom-wheels.vercel.app/",
  },
  {
    id: 3,
    title: "IUCAI",
    description:
      "Web application developed for the University Institute of São Tomé and Príncipe to promote the institution and its courses.",
    image: "https://zzzbeck.github.io/iucai.png",
    tags: ["Nextjs", "Tailwind CSS"],
    liveUrl: "https://www.iucai.info/pt",
    isRealProject: true,
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-dev-blue">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills and expertise in
            building innovative solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="project-card flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 items-center">
                  {project.title}
                  {project.isRealProject && (
                    <Badge className="ml-2 bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30">
                      Real Project
                    </Badge>
                  )}
                </h3>

                <div className="mb-4 min-h-[60px]">
                  {project.description ? (
                    <p className="text-gray-300 text-sm line-clamp-3">
                      {project.description}
                    </p>
                  ) : (
                    <p className="text-gray-500 text-sm italic">
                      No description available
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-5 min-h-[40px]">
                  {project.tags && project.tags.length > 0 ? (
                    project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-dev-purple/10 text-dev-lightPurple text-xs h-6 px-2"
                      >
                        {tag}
                      </Badge>
                    ))
                  ) : (
                    <Badge
                      variant="outline"
                      className="text-gray-500 text-xs h-6 px-2"
                    >
                      No tags
                    </Badge>
                  )}
                </div>

                <div className="mt-auto flex gap-2">
                  {project.githubUrl ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-1"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  ) : (
                    <div className="flex-1"></div>
                  )}

                  {project.liveUrl ? (
                    <Button
                      size="sm"
                      className="bg-dev-purple hover:bg-dev-darkPurple flex items-center gap-1 ml-auto"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  ) : (
                    <div className="flex-1"></div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-dev-purple text-dev-purple hover:bg-dev-purple hover:text-white"
            asChild
          >
            <a target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
