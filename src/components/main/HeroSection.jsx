function HeroSection({ id }) {
  const links = [
    { label: 'GitHub', url: '#', icon: '🐙' },
    { label: 'LinkedIn', url: '#', icon: '💼' },
    { label: 'Resume', url: '#', icon: '📄' }
  ];

  return (
    <>
      <section id={id} className='w-full flex flex-col justify-center items-center pt-[6rem] md:pt-[12rem] pb-[4rem] md:pb-[8rem] px-[1rem] md:px-[2rem]'>
        <div className='flex justify-center mb-[2rem]'>
        </div>
        <h1 className='text-[2.5rem] md:text-[4rem] lg:text-[8rem] font-body font-bold text-center'>
          Martin Manalo
        </h1>
        <h2 className='text-[1rem] md:text-[1.5rem] font-body font-semibold text-gray-500 text-center mb-[2rem] md:mb-[6rem]'>
          Sophomore, Computer Science <span className="font-normal">at</span> De La Salle University
        </h2>
        
        <div className='flex flex-col sm:flex-row gap-[1rem] md:gap-[1.5rem] flex-wrap justify-center'>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className='flex items-center justify-center gap-[0.5rem] px-[1.5rem] md:px-[2rem] py-[0.75rem] md:py-[0.875rem] bg-gray-900 text-white font-body font-semibold rounded-[0.8rem] hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap'
            >
              <span className='text-lg'>{link.icon}</span>
              <span className='text-sm md:text-base'>{link.label}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

export default HeroSection;