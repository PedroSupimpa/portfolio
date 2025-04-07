
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Code2, Coffee, PenTool, User2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    {
      icon: <Calendar className="h-5 w-5 text-dev-purple" />,
      value: "5+",
      label: "Years Experience",
    },
    {
      icon: <Code2 className="h-5 w-5 text-dev-purple" />,
      value: "50+",
      label: "Projects Completed",
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
                I'm a passionate software developer with a focus on creating
                beautiful, functional, and user-friendly applications. With over
                5 years of experience in the industry, I've worked on a wide
                range of projects from small startups to large enterprises.
              </p>
              <p>
                My journey in software development began when I built my first
                website at the age of 15. Since then, I've continuously expanded
                my knowledge and skills, staying current with emerging technologies
                and best practices.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating
                intuitive user experiences. My goal is always to build products
                that not only meet but exceed client expectations and deliver
                real value to users.
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
                    <h4 className="text-lg font-bold mb-1">Senior Software Developer</h4>
                    <p className="text-dev-purple text-sm mb-2">2021 - Present</p>
                    <p className="text-gray-300 text-sm">
                      Leading development of enterprise applications, mentoring junior developers, and implementing best practices.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l border-gray-700">
                    <div className="absolute w-4 h-4 bg-dev-purple rounded-full -left-2 top-0"></div>
                    <h4 className="text-lg font-bold mb-1">Frontend Developer</h4>
                    <p className="text-dev-purple text-sm mb-2">2019 - 2021</p>
                    <p className="text-gray-300 text-sm">
                      Built responsive web applications using React, Vue, and modern frontend technologies.
                    </p>
                  </div>
                  
                  <div className="relative pl-8">
                    <div className="absolute w-4 h-4 bg-dev-purple rounded-full -left-2 top-0"></div>
                    <h4 className="text-lg font-bold mb-1">Junior Web Developer</h4>
                    <p className="text-dev-purple text-sm mb-2">2017 - 2019</p>
                    <p className="text-gray-300 text-sm">
                      Started my professional career working on websites and small web applications.
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
                      <span className="font-bold text-white">Craftsmanship:</span> I believe in writing clean, maintainable, and well-tested code.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <PenTool className="h-5 w-5 text-dev-purple mr-2 mt-0.5" />
                    <p className="text-sm text-gray-300">
                      <span className="font-bold text-white">User-Centric:</span> I focus on creating intuitive interfaces and meaningful user experiences.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <PenTool className="h-5 w-5 text-dev-purple mr-2 mt-0.5" />
                    <p className="text-sm text-gray-300">
                      <span className="font-bold text-white">Continuous Learning:</span> I'm dedicated to growing my skills and knowledge every day.
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
