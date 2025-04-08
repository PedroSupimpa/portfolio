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
    githubUrl: "#",
    liveUrl: "https://beta.sportickets.com.br/",
  },
  {
    id: 2,
    title: "Wheel of Prizes",
    description:
      "An web application where the user can create a wheel of prizes and share it with friends.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Vite", "React", "NestJs", "Postgre"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "IUCAI",
    description:
      "Web application developed for the University Institute of São Tomé and Príncipe to promote the institution and its courses.",
    image: "https://zzzbeck.github.io/iucai.png",
    tags: ["Nextjs", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "https://www.iucai.info/pt",
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
              className="project-card"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-dev-purple/10 text-dev-lightPurple text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between">
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
                  <Button
                    size="sm"
                    className="bg-dev-purple hover:bg-dev-darkPurple flex items-center gap-1"
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
            <a href="#" target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
