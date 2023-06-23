import React from "react";
interface SkillCardProps {
  title: string;
}
const SkillCard: React.FC<SkillCardProps> = ({ title }) => {
  return (
    <div className="border border-gray">
      <div className="text-white font-semibold w-full p-2 border border-gray">{title}</div>
      <ul className="flex flex-wrap text-gray gap-2 p-2 border border-gray">
        <li>TypeScript</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>Swift</li>
      </ul>
    </div>
  );
};

export default SkillCard;
