import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ContactSection({ id }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.15 // Stagger the form fields
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
      className="w-full pt-32 md:pt-48 pb-16 flex flex-col items-center px-4 md:px-8 bg-white"
    >
      {/* Category Badge 
      <motion.div variants={itemVariants} className='flex justify-center mb-8'>
        <span className='inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg border border-gray-200 font-body'>
          Contact
        </span>
      </motion.div>
      */}

      <motion.h1
        variants={itemVariants}
        className="font-body text-4xl md:text-6xl font-bold text-slate-100 mb-6 w-full max-w-150 text-center md:text-left"      
      >
        *Contact Form
      </motion.h1>

      <motion.div 
        variants={itemVariants}
        className="w-full max-w-150 p-6 md:p-8 border border-slate-100 rounded-3xl bg-slate-50"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Animated Input Group: Name */}
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="font-mono text-xs md:text-sm font-semibold text-slate-400 tracking-widest uppercase block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-slate-200 rounded-xl font-body text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all duration-200"
              placeholder="John Doe"
            />
          </motion.div>

          {/* Animated Input Group: Email */}
          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="font-mono text-xs md:text-sm font-semibold text-slate-400 tracking-widest uppercase block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-slate-200 rounded-xl font-body text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all duration-200"
              placeholder="john_doe@email.com"
            />
          </motion.div>

          {/* Animated Input Group: Message */}
          <motion.div variants={itemVariants}>
            <label htmlFor="message" className="font-mono text-xs md:text-sm font-semibold text-slate-400 tracking-widest uppercase block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl font-body text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all duration-200"
              placeholder="Your message here..."
            ></textarea>
          </motion.div>

          {/* Submit Button with Hover/Tap Motion */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            type="submit"
            disabled={submitted}
            className={`w-full px-4 py-4 ${submitted ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'} text-white font-body font-bold rounded-xl transition-colors duration-300 cursor-pointer`}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={submitted ? "sent" : "idle"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {submitted ? 'Message Sent! ✓' : 'Send Message'}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </form>
      </motion.div>
    </motion.section>
  );
}

export default ContactSection;