import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Define types for our data
interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  skills: string[];
  type: 'fulltime' | 'parttime' | 'internship' | 'freelance';
}

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // State to track active filter
  const [filter, setFilter] = useState<'all' | 'fulltime' | 'parttime' | 'internship' | 'freelance'>('all');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Sample data - replace with your actual information
  const experienceData: ExperienceItem[] = [
    {
      title: "Python Backend Developer",
      company: "Syncella Enterprises Pvt. Ltd.",
      location: "Remote",
      duration: "Feb 2025 - May 2025",
      description: [
        "Developed a backend system of a react native app using Python and Flask.",
        "Created a jtw and bcrypt authentication system.",
        "Made a Recommendation system for user recommendations using cosine similarity.",
        "Created API and performed CRUD operations.",
        "Created Database tables in PostgreSQL and managed data."
      ],
      skills: ["Python", "Transformers", "Flask", "SQL"],
      type: "internship"
    },
    // {
    //   title: "Frontend Developer",
    //   company: "WebTech Innovations",
    //   location: "Bangalore, India",
    //   duration: "Jan 2023 - Apr 2023",
    //   description: [
    //     "Designed and developed responsive web applications using React and TypeScript.",
    //     "Implemented state management using Redux and Context API.",
    //     "Collaborated with UI/UX designers to implement pixel-perfect designs.",
    //     "Optimized application performance resulting in 40% faster load times."
    //   ],
    //   skills: ["React", "TypeScript", "Redux", "HTML/CSS", "JavaScript"],
    //   type: "internship"
    // },
    {
      title: "Freelance Web Developer",
      company: "Self-employed",
      location: "Remote",
      duration: "Mar 2025",
      description: [
        "Developed a Portfolio website for a client.",
        "Created projects and skills showcase.",
        "Implemented responsive designs and ensured cross-browser compatibility.",
        "Managed client relationships and delivered projects within deadlines."
      ],
      skills: ["JavaScript", "React", "Node.js", "Three.Js"],
      type: "freelance"
    },
    // {
    //   title: "Research Assistant",
    //   company: "University Research Lab",
    //   location: "Vellore, India",
    //   duration: "Aug 2022 - Dec 2022",
    //   description: [
    //     "Assisted in research on machine learning applications in healthcare.",
    //     "Collected and analyzed data using statistical methods.",
    //     "Implemented algorithms to process medical imaging data.",
    //     "Co-authored a research paper published in a peer-reviewed journal."
    //   ],
    //   skills: ["Python", "Research Methodology", "Data Analysis", "Scientific Writing"],
    //   type: "parttime"
    // }
  ];

  // Filter experience items based on selected filter
  const filteredExperience = filter === 'all'
    ? experienceData
    : experienceData.filter(item => item.type === filter);

  // Function to get type label
  const getTypeLabel = (type: 'fulltime' | 'parttime' | 'internship' | 'freelance') => {
    switch(type) {
      case 'fulltime': return 'Full-time';
      case 'parttime': return 'Part-time';
      case 'internship': return 'Internship';
      case 'freelance': return 'Freelance';
      default: return type;
    }
  };

  // Function to get type color
  const getTypeColor = (type: 'fulltime' | 'parttime' | 'internship' | 'freelance') => {
    switch(type) {
      case 'fulltime': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'parttime': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'internship': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'freelance': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section py-20 md:py-32 bg-white dark:bg-dark"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-2 md:gap-4">
          {[
            { id: 'all', label: 'All' },
            { id: 'fulltime', label: 'Full-time' },
            { id: 'parttime', label: 'Part-time' },
            { id: 'internship', label: 'Internships' },
            { id: 'freelance', label: 'Freelance' }
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => setFilter(option.id as any)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                filter === option.id
                  ? 'bg-teal text-white shadow-md'
                  : 'bg-white dark:bg-dark hover:bg-gray-100 dark:hover:bg-dark-light text-gray-700 dark:text-gray-300'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>

            {/* Experience Items */}
            {filteredExperience.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-12 md:ml-0 md:mr-auto' : 'md:pl-12 md:ml-auto md:mr-0'
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-0 md:left-auto md:right-0 ${
                  index % 2 === 0 ? 'md:-right-4' : 'md:-left-4'
                } top-0 w-8 h-8 rounded-full bg-teal dark:bg-teal-light shadow-md flex items-center justify-center z-10`}>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>

                {/* Content Card */}
                <div className="ml-12 md:ml-0 bg-white dark:bg-dark-dark rounded-xl p-6 shadow-md text-left">
                  {/* Type Badge */}
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-3 ${getTypeColor(item.type)}`}>
                    {getTypeLabel(item.type)}
                  </span>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>

                  <div className="flex flex-col mb-3">
                    <p className="text-teal dark:text-teal-light font-medium">{item.company}</p>
                    <div className="flex items-center mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{item.duration}</span>
                  </div>

                  <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                    {item.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-teal/10 text-teal dark:bg-teal-light/20 dark:text-teal-light"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
