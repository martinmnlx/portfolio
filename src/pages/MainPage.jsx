import NavBar from "../components/NavBar";
import HeroSection from '../components/main/HeroSection';
import AboutSection from '../components/main/AboutSection';
import StackSection from "../components/main/StackSection";

function MainPage() {
  return (
    <>
      <div className='flex flex-col items-center mb-[4rem]'>
        <NavBar />
        
        <HeroSection id="hero"/>
        <AboutSection id="about"/>
        <StackSection id="stack"/>
      </div>
    </>
  )
}

export default MainPage;