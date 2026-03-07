import NavBar from "../components/NavBar";
import HeroSection from '../components/main/HeroSection';
import AboutSection from '../components/main/AboutSection';
import EducationSection from '../components/main/EducationSection';
import StackSection from "../components/main/StackSection";
import ProjectsSection from "../components/main/ProjectsSection";
import ContactSection from "../components/main/ContactSection";
import Footer from "../components/Footer";

function MainPage() {
  return (
    <>
      <div className='flex flex-col items-center px-6'>
        <NavBar />
        
        <HeroSection id="hero"/>
        <AboutSection id="about"/>
        <EducationSection id="education"/>
        <StackSection id="stack"/>
        {/* <ProjectsSection id="projects"/> */}
        <ContactSection id="contact"/>
      </div>
      <Footer />
    </>
  )
}

export default MainPage;