import Navigation from "../components/navigation/Navigation";
import AboutsSection from "./components/AboutsSection";
import ContacsSection from "./components/ContacsSection";
import HomeSection from "./components/HomeSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
export default function Home() {
  return (
    <div className="min-h-full bg-background">
      <Navigation>
        <HomeSection href="projects" label="projects">
          <ProjectsSection />
        </HomeSection>
        <HomeSection href="skills" label="skills">
          <SkillsSection />
        </HomeSection>
        <HomeSection href="about" label="about-me">
          <AboutsSection />
        </HomeSection>
        <HomeSection href="contacts" label="contacts">
          <ContacsSection />
        </HomeSection>
      </Navigation>
    </div>
  );
}
