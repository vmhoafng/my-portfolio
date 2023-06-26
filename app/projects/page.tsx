"use client";

import React from "react";
import Container from "../components/Container";
import ProjectCard from "../components/cards/ProjectCard";
import ProjectsSection from "../components/sections/Projects";
import Section from "../components/sections/Section";
const page = () => {
  return (
    <Container title="projects" description="List of my projects">
      <Section label="complete-apps">
        <ProjectsSection>
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
          <ProjectCard
            title={"Music Player"}
            languages={["HTML", "CSS", "JavaScript"]}
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
        </ProjectsSection>
      </Section>
      <Section label="small-projects">
        <ProjectsSection>
          <ProjectCard
            title={"Messenger-Clone"}
            languages={["ReactJS", "Tailwind", "NextJS"]}
            description={"lorem ipsum dolor sit amet, consectetur adip"}
            buttonContent="Go to"
          />
          <ProjectCard
            title={"Landing Page"}
            languages={["ReactJS", "Tailwind"]}
            description={"lorem ipsum dolor sit amet, consectetur adip"}
            buttonContent="Go to"
          />
          <ProjectCard
            title={"Music Player"}
            languages={["HTML", "CSS", "JavaScript"]}
            description={"lorem ipsum dolor sit amet, consectetur adip"}
            buttonContent="Go to"
          />
          <ProjectCard
            title={"Music Player"}
            languages={["HTML", "CSS", "JavaScript"]}
            description={"lorem ipsum dolor sit amet, consectetur adip"}
            buttonContent="Go to"
          />
          <ProjectCard
            title={"Music Player"}
            languages={["HTML", "CSS", "JavaScript"]}
            description={"lorem ipsum dolor sit amet, consectetur adip"}
            buttonContent="Go to"
          />
        </ProjectsSection>
      </Section>
    </Container>
  );
};

export default page;
