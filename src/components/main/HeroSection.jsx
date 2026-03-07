import { Github, Linkedin, ArrowRight } from 'lucide-react';

function HeroSection({ id }) {
  const links = [
    { label: 'GitHub', url: 'https://github.com/martinmnlx', Icon: Github },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/martin-d-manalo/', Icon: Linkedin },
  ];

  return (
    <section 
      id={id} 
      className='w-full flex flex-col justify-center items-center pt-24 md:pt-48 pb-16 px-4 md:px-8 bg-white'
    >
      
      <h1 className='text-5xl md:text-9xl font-body font-bold text-center mb-4 text-slate-800'>
        Martin Manalo
      </h1>

      {/* Role & University */}
      <h2 className='text-sm md:text-[1.25rem] font-mono font-medium text-slate-600 text-center mb-8 md:mb-16'>
        Software Engineer & UX/UI Designer <br className="md:hidden" />
        <span className="hidden md:inline"> • </span> 
        CS Sophomore at De La Salle University
      </h2>
      
      {/* Social Links: Clean slate aesthetic */}
      <div className='flex flex-row gap-3 md:gap-4 flex-wrap justify-center mb-10'>
        {links.map((link) => {
          const { Icon } = link;
          return (
            <a
              key={link.label}
              href={link.url}
              target="_blank" 
              rel="noreferrer"
              className='flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-900 font-body font-medium rounded-xl border border-slate-200 hover:bg-slate-100 transition-all duration-200 whitespace-nowrap'
            >
              <Icon size={16} strokeWidth={2} />
              <span className='text-sm md:text-base'>{link.label}</span>
            </a>
          );
        })}
      </div>
      
      {/* Professional CTA */}
      <div className='group flex flex-col md:flex-row items-center gap-2 font-body text-sm md:text-base text-slate-600'>
        <p>Interested in collaborating on a project?</p>
        <a 
          href="#contact" 
          className='flex items-center gap-1.5 text-blue-600 font-semibold hover:gap-3 transition-all duration-300'
        >
          Get in touch <ArrowRight size={18} />
        </a>
      </div>

    </section>
  );
}

export default HeroSection;