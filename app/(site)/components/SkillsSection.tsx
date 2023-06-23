import SkillCard from "@/app/components/cards/SkillCard";
import React from "react";

const SkillsSection = () => {
  return (
    <div className="flex">
      <div className="w-5/12 hidden md:block">SkillsSection</div>
      <div className="flex-1 flex items-start gap-4">
        <div>
          <SkillCard title="languages" />
        </div>
        <div className="flex flex-col gap-2">
          <SkillCard title="Databases" />
          <SkillCard title="Other" />
        </div>
        <div className="flex flex-col gap-2">
          <SkillCard title="Tools" />
          <SkillCard title="Frameworks" />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
