import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const projects = [
    
    {
      "title": "AI Agent for X(Twitter) with Gemini and MCP",
      "description": "An AI agent that uses Google Gemini and MCP to automatically generate and post tweets with contextual awareness and real-time interaction.",
      "techStack": ["Google Gemini 2.0", "Model Context Protocol (MCP)", "Node.js", "Server-Sent Events (SSE)"],
      "githubUrl": "https://github.com/Utkarsh-152/AI-Agent-for-X-posts",
      "image": "https://images.unsplash.com/photo-1690233662564-f599cc764cca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8WCUyMHR3aXR0ZXJ8ZW58MHx8MHx8fDI%3D"      
    },
    {
      "title": "Diabetes Prediction Model",
      "description": "An end to end machine learning model to predict diabetes using XGBoost alogrithm, Deployment Link is in the github repository README.md file and check-out if you are diabetic or not.",
      "techStack": ["Scikit-Learn", "Machine Learning", "FastApi", "Python", "UV"],
      "githubUrl": "https://github.com/Utkarsh-152/Diabetes-Prediction-Model",
      "image": "https://images.unsplash.com/photo-1624454002429-40ed87a5ec04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"      
    },
    {
      "title": "Revenue Insights In Hospitality Domain",
      "description": "A Power BI Hospitality Revenue Analytics Dashboard analyzing RevPAR, ADR, and occupancy rates to optimize revenue strategies.",
      "techStack": ["Power BI", "Excel", "Data Visualization"],
      "githubUrl": "https://github.com/Utkarsh-152/Revenue-Insights-in-Hospitality-Domain",
      "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "title": "Loan Approval Prediction Model",
      "description": "A machine learning-based Loan Approval Prediction System with Flask, MySQL, and Scikit-learn, achieving 97.4% accuracy.",
      "techStack": ["Flask", "MySQL", "Scikit-learn", "Bootstrap"],
      "githubUrl": "https://utkarsh-152-loan-approval-prediction.onrender.com/",
      "image": "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "title": "Employee Turnover Analytics",
      "description": "EDA and visualization of employee turnover drivers, including satisfaction levels, evaluation scores, and workload.",
      "techStack": ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
      "githubUrl": "https://github.com/Utkarsh-152/Employee-Turnover-Prediction-and-Retention-Strategy",
      "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "title": "Zomato Restraunts Data Insights",
      "description": "A Power BI Responsive Dashboard, it provides insights into restaurant distribution, country-wise comparisons, and detailed restaurant analysis.",
      "techStack": ["Power BI", "Data Visualization"],
      "githubUrl": "https://github.com/Utkarsh-152/Zomato-Power-BI-Dashboard",
      "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "title": "AI-Powered Image Enhancer",
      "description": "A modern web application that enhances image quality using AI technology. Built with React and powered by the PicWish API.",
      "techStack": ["Node.js", "ReactJS", "PICWishAPI", "AscernityUI"],
      "githubUrl": "https://github.com/Utkarsh-152/AIPoweredImageEnhacer",
      "image": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "title": "Employee Management System",
      "description": "A employee management system with CRUD operations, built using ReactJS and Node.js",
      "techStack": ["JavaScript", "React", "Vite", "Node.js"],
      "githubUrl": "https://employee-management-system-f9ue.vercel.app/",
      "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section py-20 md:py-32 bg-secondary-light dark:bg-dark-dark"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card-3d bg-white dark:bg-dark rounded-xl overflow-hidden shadow-lg"
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="card-3d-content h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary dark:bg-primary-dark/20 dark:text-primary-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-6 pb-6 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary dark:text-primary-light hover:underline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
