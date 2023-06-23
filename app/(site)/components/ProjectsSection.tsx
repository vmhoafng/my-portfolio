import React from "react";
import ProjectCard from "@/app/components/cards/ProjectCard";
import Button from "@/app/components/Button";
import { TbArrowMoveRight } from "react-icons/tb";
const ProjectsSection = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex lg:flex-nowrap flex-wrap items-start justify-center gap-4">
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
      <div className="lg:hidden">
        <Button type="button" href="projects">
          view all <TbArrowMoveRight />
        </Button>
      </div>
    </div>
  );
};

export default ProjectsSection;
