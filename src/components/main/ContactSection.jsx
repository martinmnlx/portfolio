import { useState } from 'react';

function ContactSection({ id }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section id={id} className="w-full pt-[8rem] md:pt-[10rem] flex flex-col items-center px-[1rem] md:px-[2rem]">
      <div className='flex justify-center mb-[2rem]'>
        <span className='inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-[0.5rem] border border-gray-200 font-body'>
          Contact
        </span>
      </div>
      <div className="w-full max-w-[500px] p-[1.5rem] md:p-[2rem] shadow-sm border border-gray-200/50 rounded-[1.5rem] bg-white">
        <h1 className="font-body text-3xl md:text-5xl font-bold text-gray-900 mb-[1.5rem] text-center">
          Get In Touch
        </h1>
        <p className="font-body text-gray-600 mb-[2rem] text-center">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[1.5rem]">
          <div>
            <label htmlFor="name" className="font-body text-gray-700 font-semibold block mb-[0.5rem]">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-[0.8rem] font-body text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition-all duration-200"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="font-body text-gray-700 font-semibold block mb-[0.5rem]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-[0.8rem] font-body text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition-all duration-200"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="font-body text-gray-700 font-semibold block mb-[0.5rem]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-[0.8rem] font-body text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent resize-none transition-all duration-200"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 bg-gray-900 text-white font-body font-semibold rounded-[0.8rem] hover:bg-gray-800 transition-colors duration-200"
          >
            {submitted ? 'Message Sent! ✓' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
