import { Github, Linkedin } from 'lucide-react';

function HeroSection({ id }) {
  const links = [
    { label: 'GitHub', url: 'https://github.com/martinmnlx', Icon: Github },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/martin-d-manalo/', Icon: Linkedin },
  ];

  return (
    <>
      <section id={id} className='w-full flex flex-col justify-center items-center pt-24 md:pt-48 pb-4 md:pb-16 px-4 md:px-8'>
        <h1 className='text-5xl md:text-9xl font-body font-bold text-center mb-4'>
          Martin Manalo
        </h1>
        <h2 className='text-[1rem] md:text-[1.5rem] font-body font-semibold text-gray-500 text-center mb-8 md:mb-24'>
          Sophomore, Computer Science <span className="font-normal">at</span> De La Salle University
        </h2>
        
        <div className='flex flex-row gap-4 md:gap-4 flex-wrap justify-center'>
          {links.map((link) => {
            const { Icon } = link;
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank" 
                rel="noreferrer"
                className='flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white font-body font-semibold rounded-[0.8rem] hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap'
              >
                <Icon size={16} strokeWidth={2} />
                <span className='text-sm md:text-base'>{link.label}</span>
              </a>
            );
        })}
        </div>
      </section>
    </>
  )
}

export default HeroSection;