import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section py-20 md:py-32 bg-white dark:bg-dark"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              className="w-full md:w-1/3"
              variants={itemVariants}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-lg transform rotate-6"></div>
                <img 
                  src="img.jpg" 
                  alt="Profile" 
                  className="relative z-10 rounded-lg shadow-lg w-full"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-2/3"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary dark:text-primary-light">
                Full Stack Developer & Data Scientist
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate web developer and data enthusiast with a knack for building modern, responsive web applications and intelligent AI-powered tools. With a strong foundation in both frontend and backend technologies, I craft seamless digital experiences that combine smart design with functional depth.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Beyond web development, I actively explore Data Science and Analytics—designing machine learning models, building insightful Power BI dashboards, and even creating lightweight AI agents using Python and LLMs. Whether it’s cleaning messy datasets, deploying dashboards, or experimenting with AI workflows, I love solving real-world problems with clean, efficient code.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Always learning, always building — I aim to blend creativity with technology to deliver impactful, data-driven solutions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-full transition-colors shadow-md hover:shadow-lg"
                >
                  Contact Me
                </a>
                <a 
                  href="https://github.com/Utkarsh-152/Resume/blob/main/Utkarsh-Tripathi-Data-Science-resume.pdf" 
                  className="inline-block bg-transparent border-2 border-primary text-primary dark:text-primary-light font-medium py-2 px-6 rounded-full transition-colors hover:bg-primary/10"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
