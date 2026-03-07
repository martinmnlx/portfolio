import { Github, Linkedin, MessageCircle } from 'lucide-react';

function HeroSection({ id }) {
  const links = [
    { label: 'GitHub', url: 'https://github.com/martinmnlx', Icon: Github },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/martin-d-manalo/', Icon: Linkedin },
  ];

  return (
    <>
      <section id={id} className='w-full flex flex-col justify-center items-center pt-24 md:pt-48 pb-4 md:pb-16 px-4 md:px-8'>
        <h1 className='text-4xl md:text-9xl font-body font-bold text-center mb-4'>
          Martin Manalo
        </h1>
        <h2 className='text-sm md:text-[1.5rem] font-mono font-medium text-gray-500 text-center mb-8 md:mb-24'>
          Software Engineer | UX/UI Designer<br></br>Sophomore CS at De La Salle Univ.
        </h2>
        
        <div className='flex flex-row gap-4 md:gap-4 flex-wrap justify-center mb-4'>
          {links.map((link) => {
            const { Icon } = link;
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank" 
                rel="noreferrer"
                className='flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-900 text-white font-body font-medium  rounded-xl hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap'
              >
                <Icon size={14} strokeWidth={2} />
                <span className='text-sm md:text-base'>{link.label}</span>
              </a>
            );
        })}
        </div>
        
        <div className='flex flex-row font-body text-sm text-gray-800 font-medium gap-2'>
          <h2>Need something done?</h2> <a href="#contact" className='flex flex-row justify-center items-center gap-1 text-gray-800 font-semibold hover:underline'><MessageCircle size={14} strokeWidth={2} />Let's talk!</a>
        </div>
      </section>
    </>
  )
}

export default HeroSection;