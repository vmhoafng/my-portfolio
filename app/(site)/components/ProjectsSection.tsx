import React from "react";
import ProjectCard from "@/app/components/cards/ProjectCard";
const ProjectsSection = () => {
  return (
    <div className="flex lg:flex-nowrap flex-wrap items-start justify-between gap-2 lg:gap-4">
      <ProjectCard
        title={"Messenger-Clone"}
        languages={["ReactJS", "Tailwind", "NextJS"]}
        description={"lorem ipsum dolor sit amet, consectetur adip"}
        image={""}
        buttonContent="Go to"
      />
      <ProjectCard
        title={"Landing Page"}
        languages={["ReactJS", "Tailwind"]}
        description={"lorem ipsum dolor sit amet, consectetur adip"}
        image={""}
        buttonContent="Go to"
      />
      <ProjectCard
        title={"Music Player"}
        languages={["HTML", "CSS", "JavaScript"]}
        description={"lorem ipsum dolor sit amet, consectetur adip"}
        image={""}
        buttonContent="Go to"
      />
    </div>
  );
};

export default ProjectsSection;
