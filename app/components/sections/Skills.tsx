"use client";
import SkillCard from "@/app/components/cards/SkillCard";
import useHomePage from "@/app/hook/useHomePage";
import clsx from "clsx";
import React from "react";
interface SkillsProps {
  children: React.ReactNode;
}
const Skills: React.FC<SkillsProps> = ({ children }) => {
  const isHomePage = useHomePage();
  return (
    <div className="flex">
      {isHomePage && <div className="w-5/12 hidden md:block">Skills</div>}
      <div
        className={clsx(
          `
              flex-1 
              grid 
              gap-4
              grid-cols-2`,
          isHomePage ? "sm:grid-cols-3" : "md:grid-cols-5 sm:grid-cols-3"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Skills;
