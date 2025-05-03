import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Define types for our data
interface Education {
  degree: string;
  institution: string;
  duration: string;
  description: string;
  gpa?: string;
}

interface Course {
  name: string;
  provider: string;
  date: string;
  description: string;
  skills?: string[];
}

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  credentialLink?: string;
}

interface ExtraCurricular {
  title: string;
  organization: string;
  date: string;
  description: string;
}

interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

const Credentials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // State to track active tab
  const [activeTab, setActiveTab] = useState<'education' | 'courses' | 'certificates' | 'extracurricular' | 'achievements'>('education');

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
  const educationData: Education[] = [
    {
      degree: "Bachelor of Science",
      institution: "Maa Saraswati Sita Degree College",
      duration: "2022 - 2025",
      description: "Focused on core principles of mathematics and physics, with strong foundations in analytical thinking, problem-solving, and a growing interest in data science, machine learning, and web devlopment.",
      gpa: "7/10"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Dwarka Prasad Public Schoo;, Prayagraj",
      duration: "2020 - 2022",
      description: "Completed with distinction in Mathematics, Physics, and Chemistry.",
      gpa: "80%"
    },
    {
      degree: "Secondary Education",
      institution: "Army Public School, Prayagraj",
      duration: "2018 - 2020",
      description: "Completed with Social Science, Science, Standard Mathematics, English, Hindi and Computer Science.",
      gpa: "70%"
    }
  ];

  const coursesData: Course[] = [

    {
      name: "Masters in Data Scientist, in collaboration with IBM",
      provider: "Simplilearn",
      date: "2024-2025",
      description: "Learned statistical analysis, data visualization, machine learning, SQL, Power BI, GenAI and more.",
      skills: ["Python", "Pandas", "Power BI", "Statistical Analysis, scikit-learn, SQL, Power BI"]
    }
  ];

  const certificatesData: Certificate[] = [
    {
      name: "Python for Data Science",
      issuer: "IBM",
      date: "2024",
      credentialLink: "https://courses.skillsnet.simplilearn.com/certificates/b02056cc0a6c4a91b11753e613294d40"
    },
    {
      name: "SQL Certification Course",
      issuer: "Simplilearn",
      date: "2024",
      credentialLink: "https://github.com/Utkarsh-152/Resume/blob/main/Certificates/SQL.pdf"
    },
    {
      name: "Machine Learning Using Python",
      issuer: "Simplilearn",
      date: "2024",
      credentialLink: "https://github.com/Utkarsh-152/Resume/blob/main/Certificates/Machine%20Learning%20using%20Python.pdf"
    },
    {
      name: "Deep Learning for beginners",
      issuer: "Simplilearn",
      date: "2024",
      credentialLink: ""
    },
    {
      name: "PL-300 Microsoft Power BI certification training",
      issuer: "Simplilearn",
      date: "2024",
      credentialLink: "https://github.com/Utkarsh-152/Resume/blob/main/Certificates/PowerBI%20certificate.pdf"
    },
    {
      name: "Data Science with Python",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialLink: "https://github.com/Utkarsh-152/Resume/blob/main/Certificates/Data%20Science%20with%20python.pdf"
    }
  ];

  const extraCurricularData: ExtraCurricular[] = [
    {
      title: "BCG Data Science Job Simulation",
      organization: "Forage",
      date: "2024",
      description: "Performed customer churn analysis using Python, achieving 85% accuracy with random forest, and delivered actionable insights via visualizations and executive summary"
    },
    {
      title: "Tata Data Visualisation: Empowering Business with Effective Insights",
      organization: "Forage",
      date: "2024",
      description: "Created data visualizations to aid executive decisions and prepared questions for client leadership meetings."
    },
    {
      title: "Hackathon Participant",
      organization: "HackQuest2025",
      date: "2025",
      description: "Participated in a hackathon and submitted our application."
    }
  ];

  const achievementsData: Achievement[] = [
    {
      title: "1st Place - Cogitation Summit - Playwell",
      issuer: "IIT Roorkee Cognizance Techfest 2025",
      date: "2025",
      description: "Won first place for giving solution to gamify mental health."
    },
    {
      title: "4th Place - Flutterflow Innovators Hackathon 2025",
      issuer: "IIIT Allahabad",
      date: "2025",
      description: "Submitted our application SheVior for female safety and secured 4th place."
    }
  ];

  // Render the appropriate content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'education':
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-dark-dark rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.degree}</h3>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-teal dark:text-teal-light font-medium">{item.institution}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.duration}</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{item.description}</p>
                {item.gpa && (
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">GPA/Score: {item.gpa}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        );

      case 'courses':
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {coursesData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-dark-dark rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.name}</h3>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-teal dark:text-teal-light font-medium">{item.provider}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.date}</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3">{item.description}</p>
                {item.skills && (
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-teal/10 text-teal dark:bg-teal-light/20 dark:text-teal-light"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        );

      case 'certificates':
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {certificatesData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-dark-dark rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.name}</h3>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-teal dark:text-teal-light font-medium">{item.issuer}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.date}</p>
                </div>
                {item.credentialLink && (
                  <a
                    href={item.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal dark:text-teal-light hover:underline mt-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Credential
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        );

      case 'extracurricular':
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {extraCurricularData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-dark-dark rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-teal dark:text-teal-light font-medium">{item.organization}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.date}</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        );

      case 'achievements':
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {achievementsData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-dark-dark rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-teal dark:text-teal-light font-medium">{item.issuer}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.date}</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      id="credentials"
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
          Credentials & Achievements
        </motion.h2>

        {/* Mini Navbar */}
        <div className="flex flex-wrap justify-center mb-12 gap-2 md:gap-4">
          {[
            { id: 'education', label: 'Education' },
            { id: 'courses', label: 'Courses' },
            { id: 'certificates', label: 'Certificates' },
            { id: 'extracurricular', label: 'Extra-Curricular' },
            { id: 'achievements', label: 'Achievements' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-teal text-white shadow-md'
                  : 'bg-white dark:bg-dark hover:bg-gray-100 dark:hover:bg-dark-light text-gray-700 dark:text-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default Credentials;
