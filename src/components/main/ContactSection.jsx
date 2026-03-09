import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ContactSection({ id }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  // Updated to track 'idle', 'loading', 'success', or 'error'
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Prepare data for the API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        ...formData,
        access_key: "2f66deb0-455d-41e7-a946-99008fb14c9c"
      })
    });

    const result = await response.json();

    if (result.success) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Return to idle after 5 seconds to allow for new messages
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      console.error("Submission failed", result);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  // Animation Variants (Exact same as your provided code)
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut", 
        staggerChildren: 0.15 
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
      <motion.h1
        variants={itemVariants}
        className="font-body text-4xl md:text-6xl font-bold text-slate-200 mb-6 w-full max-w-150 text-center md:text-left"      
      >
        *Contact Form
      </motion.h1>

      <motion.div 
        variants={itemVariants}
        className="w-full max-w-150 p-6 md:p-8 border border-slate-100 rounded-3xl bg-slate-50"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
              disabled={status === 'loading' || status === 'success'}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl font-body text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all duration-200 disabled:opacity-50"
              placeholder="John Doe"
            />
          </motion.div>

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
              disabled={status === 'loading' || status === 'success'}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl font-body text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all duration-200 disabled:opacity-50"
              placeholder="john_doe@email.com"
            />
          </motion.div>

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
              disabled={status === 'loading' || status === 'success'}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl font-body text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all duration-200 disabled:opacity-50"
              placeholder="Your message here..."
            ></textarea>
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={status === 'idle' ? { y: -4 } : {}}
            whileTap={status === 'idle' ? { scale: 0.98 } : {}}
            transition={{ duration: 0.2 }}
            type="submit"
            disabled={status !== 'idle'}
            className={`w-full px-4 py-3 ${status === 'success' ? 'bg-green-600' : status === 'error' ? 'bg-red-500' : 'bg-blue-600 hover:bg-blue-700'} text-white font-body font-bold rounded-xl cursor-pointer disabled:cursor-not-allowed`}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={status}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {status === 'idle' && 'Send Message'}
                {status === 'loading' && 'Sending...'}
                {status === 'success' && 'Message Sent! ✓'}
                {status === 'error' && 'Error! Try again.'}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </form>
      </motion.div>
    </motion.section>
  );
}

export default ContactSection;