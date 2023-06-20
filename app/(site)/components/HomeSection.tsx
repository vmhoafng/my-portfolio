import clsx from "clsx";
import { TbArrowMoveRight } from "react-icons/tb";
import React from "react";
import Link from "next/link";
interface HomeSectionProps {
  href: string;
  label: string;
  children: React.ReactNode;
}
const HomeSection: React.FC<HomeSectionProps> = ({ href, label, children }) => {
  return (
    <div id={href} className="pb-28">
      <div className="flex items-center pb-12">
        <div
          className={clsx(
            `flex items-center gap-5`,
            href === "projects" && "w-9/12",
            href === "skills" && "w-3/12",
            href === "about" && "w-4/12",
            href === "contacts" && "w-2/12"
          )}
        >
          <h2 className="text-3xl text-white space-x-1">
            <span className="text-primary">#</span>
            <span>{label}</span>
          </h2>
          <span className="flex-1 h-0.5 bg-primary" />
        </div>
        {label === "projects" && (
          <Link
            href="/projects"
            className="flex flex-1 items-center justify-end text-white space-x-1"
          >
            <span>view all</span>
            <TbArrowMoveRight size={32} />
          </Link>
        )}
      </div>
      {children}
    </div>
  );
};

export default HomeSection;
