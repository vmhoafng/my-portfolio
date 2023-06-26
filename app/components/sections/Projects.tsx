"use client"
import React from "react";
import Button from "@/app/components/Button";
import { TbArrowMoveRight } from "react-icons/tb";
import useHomePage from "@/app/hook/useHomePage";
interface ProjectsSectionProps {
  children: React.ReactNode;
}
const ProjectsSection: React.FC<ProjectsSectionProps> = ({ children }) => {
  const isHomePage = useHomePage();
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {children}
      </div>
      {isHomePage && (
        <div className="lg:hidden font-medium">
          <Button type="button" href="projects">
            view all <TbArrowMoveRight />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
