import React from "react";
import { motion } from "framer-motion";
import { Calendar, Code2, Coffee, PenTool, User2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    {
      icon: <Calendar className="h-5 w-5 text-dev-purple" />,
      value: "3",
      label: "Years Experience",
    },
    {
      icon: <Coffee className="h-5 w-5 text-dev-purple" />,
      value: "∞",
      label: "Coffee Consumed",
    },
  ];

  return (
    <section id="about" className="py-20 bg-dev-blue">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>

            <div className="space-y-4 text-gray-300">
              <p>
                Hi, I'm Pedro Souza, a Full-Stack Developer with over 2 years of
                experience. Currently enrolled in Systems Analysis and
                Development, I specialize in React and Node.js, developing
                interactive, high-performance solutions.
              </p>
              <p>
                My passion for continuous learning drives me to improve my
                skills and embrace new technologies, ensuring that I deliver
                innovative and efficient solutions in every project.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 my-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="p-2 bg-dev-purple/10 rounded-lg mr-3">
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-dev-purple hover:bg-dev-darkPurple text-white"
                asChild
              >
                <a href="#contact">Let's Work Together</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-10"
          >
            <div className="bg-card rounded-xl overflow-hidden border border-gray-800 shadow-lg">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <User2 className="h-6 w-6 text-dev-purple mr-2" />
                  Professional Journey
                </h3>

                <div className="space-y-8">
                  <div className="relative pl-8 border-l border-gray-700">
                    <div className="absolute w-4 h-4 bg-dev-purple rounded-full -left-2 top-0"></div>
                    <h4 className="text-lg font-bold mb-1">
                      Full-Stack Developer - Araucárias
                    </h4>
                    <p className="text-dev-purple text-sm mb-2">
                      Sep 2024 - Present
                    </p>
                    <p className="text-gray-300 text-sm">
                      Responsible for architecting and developing an
                      institutional application integrating AI tools tailored
                      for universities and companies. Handling full autonomy in
                      both back-end and front-end, including multiple API
                      integrations.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l border-gray-700">
                    <div className="absolute w-4 h-4 bg-dev-purple rounded-full -left-2 top-0"></div>
                    <h4 className="text-lg font-bold mb-1">
                      Full-Stack Developer - MarjoSports
                    </h4>
                    <p className="text-dev-purple text-sm mb-2">
                      Nov 2023 - Sep 2024
                    </p>
                    <p className="text-gray-300 text-sm">
                      Developed and integrated new features for a betting
                      platform using Node.js, MongoDB, and Angular. Managed
                      external API integrations and improved overall system
                      performance.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l border-gray-700">
                    <div className="absolute w-4 h-4 bg-dev-purple rounded-full -left-2 top-0"></div>
                    <h4 className="text-lg font-bold mb-1">
                      Software Development Intern - Orion
                    </h4>
                    <p className="text-dev-purple text-sm mb-2">
                      Mar 2023 - May 2024
                    </p>
                    <p className="text-gray-300 text-sm">
                      Focused on front-end development with TypeScript and
                      React.js to enhance user experience, including developing
                      real-time dashboards and unit testing with Jest.
                    </p>
                  </div>

                  <div className="relative pl-8">
                    <div className="absolute w-4 h-4 bg-dev-purple rounded-full -left-2 top-0"></div>
                    <h4 className="text-lg font-bold mb-1">
                      Electrician Technician - Voltech (Framingham, MA, EUA)
                    </h4>
                    <p className="text-dev-purple text-sm mb-2">2020 - 2022</p>
                    <p className="text-gray-300 text-sm">
                      Assisted in project planning, equipment installation, and
                      maintenance of electrical systems for residential and
                      commercial properties, while coordinating team efforts and
                      client communications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-dev-purple/10 p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Zap className="h-5 w-5 text-dev-purple mr-2" />
                  Core Values
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <PenTool className="h-5 w-5 text-dev-purple mr-2 mt-0.5" />
                    <p className="text-sm text-gray-300">
                      <span className="font-bold text-white">
                        Craftsmanship:
                      </span>{" "}
                      I believe in writing clean, maintainable code.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <PenTool className="h-5 w-5 text-dev-purple mr-2 mt-0.5" />
                    <p className="text-sm text-gray-300">
                      <span className="font-bold text-white">
                        User-Centric:
                      </span>{" "}
                      I focus on creating intuitive and impactful user
                      experiences.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <PenTool className="h-5 w-5 text-dev-purple mr-2 mt-0.5" />
                    <p className="text-sm text-gray-300">
                      <span className="font-bold text-white">
                        Continuous Learning:
                      </span>{" "}
                      Committed to constantly evolving and mastering new
                      technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
