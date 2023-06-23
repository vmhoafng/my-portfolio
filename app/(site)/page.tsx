import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import AboutsSection from "./components/AboutsSection";
import ContactsSection from "./components/ContactsSection";
import HomeSection from "./components/HomeSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
export default function Home() {
  return (
    <div className="bg-background">
      <Navigation />
      <main className="lg:px-44 px-4 pt-28">
        <HomeSection href="projects" label="projects">
          <ProjectsSection />
        </HomeSection>
        <HomeSection href="about" label="about-me">
          <AboutsSection />
        </HomeSection>
        <HomeSection href="skills" label="skills">
          <SkillsSection />
        </HomeSection>
        <HomeSection href="contacts" label="contacts">
          <ContactsSection />
        </HomeSection>
      </main>
      <Footer/>
    </div>
  );
}
