import NavBar from "../components/NavBar";
import HeroSection from "../components/main/HeroSection";
import AboutSection from "../components/main/AboutSection";
import StackSection from "../components/main/StackSection";
import ProjectsSection from "../components/main/ProjectsSection";
import ContactSection from "../components/main/ContactSection";
import Footer from "../components/Footer";
import type { Dispatch, SetStateAction } from "react";

type MainPageProps = {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
};

function MainPage({ dark, setDark }: MainPageProps) {
  return (
    <>
      <div className="flex flex-col items-center px-4 bg-white dark:bg-black">
        <NavBar dark={dark} setDark={setDark} />

        <HeroSection id="hero" />
        <AboutSection id="about" />
        <StackSection id="stack" />
        <ProjectsSection id="projects" />
        <ContactSection id="contact" />
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
