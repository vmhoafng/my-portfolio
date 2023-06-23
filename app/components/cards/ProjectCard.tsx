import Image from "next/image";
import React from "react";
import Button from "../Button";
import { BiRightArrow } from "react-icons/bi";
interface ProjectCardProps {
  title: string;
  languages: Array<string>;
  description: string;
  image: string;
  href?: string;
  buttonContent?: string;
  isLink?: boolean;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  languages,
  description,
  image,
  href,
  buttonContent,
  isLink,
}) => {
  return (
    <div
      className="
        flex 
        flex-col 
        border-gray 
        border"
    >
      <div className="h-64 relative bg-gray">
        <Image
          alt="project-image"
          src={image || "/images/placeholder.webp"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className=" border-gray border object-cover"
        />
      </div>
      <ul
        className="
        border-gray 
          border 
          text-gray 
          flex 
          gap-2 
          p-2 
          flex-wrap"
      >
        {languages.map((item, id) => (
          <li key={id}> {item}</li>
        ))}
      </ul>
      <div
        className="
          border-gray 
          border 
          flex 
          flex-col 
          gap-4 
          p-4"
      >
        <div className="text-2xl text-white">{title}</div>
        <div className="text-gray">{description}</div>
        <div>
          <Button type="button" href={href} isLink={isLink}>
            {buttonContent} <BiRightArrow />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
