import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import Abouts from "../components/sections/Abouts";
import Contacts from "../components/sections/Contacts";
import HomeSection from "../components/sections/Section";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import ProjectCard from "../components/cards/ProjectCard";
import SkillCard from "../components/cards/SkillCard";
export default function Home() {
  return (
    <div className="bg-background">
      <Navigation />
      <main className="lg:px-44 px-4 pt-28">
        <HomeSection href="projects" label="projects">
          <Projects>
            <ProjectCard
              title={"Messenger-Clone"}
              languages={["ReactJS", "Tailwind", "NextJS"]}
              description={"lorem ipsum dolor sit amet, consectetur adip"}
              image={""}
              buttonContent="Go to"
              hasImage
            />
            <ProjectCard
              title={"Landing Page"}
              languages={["ReactJS", "Tailwind"]}
              description={"lorem ipsum dolor sit amet, consectetur adip"}
              image={""}
              buttonContent="Go to"
              hasImage
            />
            <ProjectCard
              title={"Music Player"}
              languages={["HTML", "CSS", "JavaScript"]}
              description={"lorem ipsum dolor sit amet, consectetur adip"}
              image={""}
              buttonContent="Go to"
              hasImage
            />
          </Projects>
        </HomeSection>
        <HomeSection href="about" label="about-me">
          <Abouts />
        </HomeSection>
        <HomeSection href="skills" label="skills">
          <Skills>
            <SkillCard title="languages" />
            <SkillCard title="Databases" />
            <SkillCard title="Other" />
            <SkillCard title="Tools" />
            <SkillCard title="Frameworks" />
          </Skills>
        </HomeSection>
        <HomeSection href="contacts" label="contacts">
          <Contacts />
        </HomeSection>
      </main>
      <Footer />
    </div>
  );
}
