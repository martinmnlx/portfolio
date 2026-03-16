import { motion } from 'framer-motion';

function StackSection({ id }) {
  // Modular data structure for easier maintenance
  const techCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Tailwind CSS", "Bootstrap", "JavaScript", "HTML5/CSS3", "Vite"]
    },
    {
      title: "Backend Development / Database",
      skills: ["Node.js", "Python", "Java", "MySQL", "JDBC", "C", "C++"]
    },
    {
      title: "Developer Tools",
      skills: ["Git", "GitHub", "VS Code", "Intellij IDEA", "Arduino IDE", "Figma", "Vercel"]
    }
  ];

  // Shared animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      id={id} 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="w-full flex flex-col items-center pt-32 md:pt-48 px-4 md:px-8 bg-white dark:bg-black"
    >
      <motion.h1 
        variants={itemVariants}
        className="font-body text-4xl md:text-6xl font-bold text-slate-200 dark:text-slate-800 text-center mb-6 text-center md:text-left w-full max-w-200"
      >
        *Tech Stack
      </motion.h1>
      <div className="w-full max-w-200">
        <div className="flex flex-col gap-6">
          {techCategories.map((cat, index) => (
            <motion.div 
              key={cat.title}
              variants={itemVariants}
              whileHover={{ x: 2 }} // Subtle "nudge" effect on hover
              className="p-6 rounded-2xl border border-slate-100 dark:border-slate-900 bg-slate-50 dark:bg-slate-950 hover:border-slate-200 dark:hover:border-slate-800"
            >
              <h2 className="font-mono text-xs md:text-sm font-semibold text-slate-400 dark:text-slate-600 tracking-widest uppercase mb-4">
                {cat.title}
              </h2>
              
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="font-mono px-3 py-1.5 bg-white dark:bg-black text-slate-800 dark:text-slate-200 text-xs md:text-sm font-medium rounded-xl border border-slate-200 dark:border-slate-800 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default StackSection;