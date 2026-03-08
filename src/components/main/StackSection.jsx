import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function StackSection({ id }) {
  const [activeTab, setActiveTab] = useState('frontend');

  const techData = {
    frontend: {
      label: "Frontend",
      title: "Frontend Development",
      items: ["React", "Tailwind CSS", "Bootstrap", "JavaScript", "HTML5/CSS3"]
    },
    backend: {
      label: "Backend",
      title: "Backend Development",
      items: ["Node.js", "Python", "Java", "MySQL", "JDBC", "C", "C++"]
    },
    tools: {
      label: "Tools",
      title: "Developer Tools",
      items: ["Git", "GitHub", "VS Code", "Intellij IDEA", "Arduino IDE", "Figma", "Vercel"]
    }
  };

  const categories = Object.keys(techData);

  return (
    <section id={id} className="w-full flex flex-col items-center pt-32 md:pt-40 px-4 md:px-8">
      {/* Small Section Badge */}
      <div className='flex justify-center mb-8'>
        <span className='inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg border border-gray-200 font-body'>
          Skills
        </span>
      </div>

      <div className="w-full max-w-[800px] p-6 md:p-10 shadow-sm border border-gray-200/50 rounded-[2rem] bg-white">
        <h1 className="font-body text-3xl md:text-5xl font-bold text-gray-900 text-center mb-8 tracking-tight">
          Tech Stack
        </h1>

        {/* Tab Switcher (The Paging Logic) */}
        <div className="flex justify-center gap-1 mb-12 p-1 bg-gray-50 rounded-2xl border border-gray-100 w-fit mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative px-6 py-2 rounded-xl text-xs md:text-sm font-body font-bold uppercase tracking-widest transition-colors cursor-pointer ${
                activeTab === cat ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {/* Animated background pill */}
              {activeTab === cat && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-white border border-gray-200 shadow-sm rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{techData[cat].label}</span>
            </button>
          ))}
        </div>

        {/* Display Area */}
        <div className="min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h2 className="font-body text-lg md:text-xl font-bold text-gray-900 mb-6">
                {techData[activeTab].title}
              </h2>
              
              <div className="flex flex-wrap gap-3">
                {techData[activeTab].items.map((item, index) => (
                  <motion.span 
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="font-mono px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-xl border border-gray-200 hover:bg-gray-200 hover:text-gray-900 transition-colors cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default StackSection;