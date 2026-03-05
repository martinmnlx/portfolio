function HeroSection({ id }) {
  return (
    <>
      <section id={id} className='flex flex-col justify-center items-center pt-[12rem]'>
        <h1 className='text-[8rem] font-body font-bold'>
          Martin Manalo
        </h1>
        <h2 className='text-[1.5rem] font-body font-semibold text-gray-500'>
          Sophomore, Computer Science <span className="font-normal">at</span> De La Salle University
        </h2>
      </section>
    </>
  )
}

export default HeroSection;