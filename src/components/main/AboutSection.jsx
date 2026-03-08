import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import selfImage from '../../assets/images/self.jpg';

function AboutSection({ id }) {
  const [showFacts, setShowFacts] = useState(false);

  const funFacts = [
    "I enjoy playing basketball and going to the gym.",
    "I like watching sports (NBA, UAAP/NCAA) and diving into the numbers behind the game.",
    "I have twos dogs - Dixie (Lhaso Apso-Maltese, 1 y/o) and Chippy (Shih Tzu-Jack Russell, 10 y/o).",
    "I used to do NBA content and graphic design on Instagram back in highschool.",
    "I love watching comic book movies and shows, especially the Marvel Cinematic Universe.",
    "I play different genres of video games, but here are some of my recents: NBA 2K26, Spider-Man 2, Valorant, R.E.P.O, Peak, Schedule I, Roblox.",
    "I like watching Valorant e-sports tournaments, and my favorite teams are Paper Rex and Sentinels."
  ];

  // Animation variants for the whole section entry
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      id={id} 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="w-full flex flex-col items-center pt-32 md:pt-48 px-4 md:px-8 bg-white"
    >
      {/* Category Badge
      <motion.div variants={itemVariants} className='flex justify-center mb-8'>
        <span className='inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg border border-gray-200 font-body'>
          About
        </span>
      </motion.div>
      */}

      <motion.h1
        variants={itemVariants}
        className="font-body text-4xl md:text-6xl font-bold text-slate-100 mb-6 w-full max-w-225 text-center md:text-left"      
      >
        *About Me
      </motion.h1>

      <motion.div 
        variants={itemVariants}
        className="w-full max-w-225 flex flex-col md:flex-row gap-8 p-6 md:p-8 border border-slate-100 rounded-3xl bg-slate-50"
      >
        <motion.div 
          className="shrink-0"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <img 
            src={selfImage}
            alt="Martin Manalo"
            className="w-full h-64 md:w-80 md:h-80 rounded-2xl border border-gray-200/50 object-cover mx-auto md:mx-0"
          />
        </motion.div>

        <div className="flex-1">
          <h2 className="font-mono text-xs md:text-sm font-semibold text-slate-400 tracking-widest uppercase">
            Get to know me
          </h2>
          <p className="font-body text-base md:text-lg text-slate-800 leading-relaxed mt-2">
            Hey, I'm Martin, a sophomore CS student at De La Salle University, based in Taguig City, Metro Manila. 
            I'm passionate about designing elegant and intuitive user interfaces, and building full-stack applications.
            I'm strongly interested in frontend development and UI/UX design, in which I'm eager to dive into more research and projects.
            I'd like to further explore web and mobile development to create apps that make people's lives easier.
          </p>

          <div className="mt-6">
            <button 
              onClick={() => setShowFacts(!showFacts)}
              className="flex items-center gap-2 group focus:outline-none cursor-pointer"
            >
              <h2 className="font-mono text-xs md:text-sm font-semibold text-slate-400 tracking-widest uppercase group-hover:text-slate-600 transition-colors">
                Fun Facts
              </h2>
              <motion.div
                animate={{ rotate: showFacts ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={14} className="text-slate-400 group-hover:text-slate-600" />
              </motion.div>
            </button>

            <AnimatePresence>
              {showFacts && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="font-body text-sm md:text-base text-slate-600 leading-relaxed mt-4 space-y-3 overflow-hidden"
                >
                  {funFacts.map((fact, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex gap-4"
                    >
                      <span className="text-slate-400 shrink-0">•</span>
                      {fact}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default AboutSection;