function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: '#', icon: '🐙' },
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'Twitter', url: '#', icon: '𝕏' },
    { name: 'Email', url: 'mailto:contact@example.com', icon: '✉️' }
  ];

  const navLinks = [
    { name: 'About', url: '#about' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' }
  ];

  return (
    <footer className="mt-[4rem] w-full border-t border-gray-200/50 bg-white">
      <div className="flex flex-col items-center px-[1rem] md:px-[2rem] py-[2rem] md:py-[3rem] gap-[1.5rem] md:gap-[2rem]">
        <div className="flex gap-[1rem] md:gap-[1.5rem]">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="text-xl md:text-2xl hover:scale-110 transition-transform duration-200"
              aria-label={link.name}
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-[1rem] md:gap-[2rem] font-body text-gray-600 text-sm md:text-base">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="hover:text-gray-900 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#"
          className="px-4 py-2 bg-gray-900 text-white font-body font-semibold rounded-[0.8rem] hover:bg-gray-800 transition-colors duration-200"
        >
          Download Resume
        </a>

        <p className="font-body text-gray-500 text-xs md:text-sm text-center">
          © {currentYear} Martin Manalo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
