
import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Globe,
  Code,
  Cpu,
  Server,
  PaintBucket,
  LayoutGrid,
  Cog,
  Shield,
  TrendingUp,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend",
      icon: <Globe className="h-6 w-6 text-dev-purple" />,
      skills: [
        "React & Redux",
        "Next.js",
        "TypeScript",
        "Vue.js",
        "Angular",
        "HTML/CSS",
      ],
    },
    {
      id: "backend",
      title: "Backend",
      icon: <Server className="h-6 w-6 text-dev-purple" />,
      skills: [
        "Node.js",
        "Express",
        "Django",
        "Flask",
        "Spring Boot",
        "GraphQL",
      ],
    },
    {
      id: "databases",
      title: "Databases",
      icon: <Database className="h-6 w-6 text-dev-purple" />,
      skills: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Firebase",
        "Supabase",
      ],
    },
    {
      id: "devops",
      title: "DevOps",
      icon: <Cog className="h-6 w-6 text-dev-purple" />,
      skills: [
        "Docker",
        "Kubernetes",
        "AWS",
        "CI/CD",
        "Terraform",
        "Monitoring",
      ],
    },
    {
      id: "mobile",
      title: "Mobile",
      icon: <LayoutGrid className="h-6 w-6 text-dev-purple" />,
      skills: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Mobile UI/UX",
        "PWA",
      ],
    },
    {
      id: "tools",
      title: "Tools & Others",
      icon: <Cpu className="h-6 w-6 text-dev-purple" />,
      skills: [
        "Git/GitHub",
        "Jira",
        "Figma",
        "Webpack",
        "Jest",
        "Cypress",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My toolkit of languages, frameworks, and technologies that I've
            mastered to create efficient and innovative solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-dev-purple/10 border border-gray-800 hover:border-dev-purple/50"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 p-2 bg-dev-purple/10 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(139, 92, 246, 0.2)"  
                    }}
                    transition={{ duration: 0.2 }}
                    className="skill-item text-sm"
                  >
                    <Code className="h-4 w-4 text-dev-purple" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-card rounded-xl p-6 shadow-lg border border-gray-800 flex flex-col items-center text-center">
            <Shield className="h-12 w-12 text-dev-purple mb-4" />
            <h3 className="text-xl font-bold mb-2">Best Practices</h3>
            <p className="text-gray-300 text-sm">
              I prioritize clean code, performance optimization, and security in
              all my projects.
            </p>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-lg border border-gray-800 flex flex-col items-center text-center">
            <PaintBucket className="h-12 w-12 text-dev-purple mb-4" />
            <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
            <p className="text-gray-300 text-sm">
              Creating intuitive, accessible, and visually appealing user
              interfaces is a passion of mine.
            </p>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-lg border border-gray-800 flex flex-col items-center text-center">
            <TrendingUp className="h-12 w-12 text-dev-purple mb-4" />
            <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
            <p className="text-gray-300 text-sm">
              I'm committed to staying current with emerging technologies and
              best practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
