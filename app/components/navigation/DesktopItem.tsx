"use client";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import clsx from "clsx";

interface DesktopItemProps {
  href: string;
  label: string;
  icon: any;
  active?: boolean;
  isHomePage?: boolean;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
  href,
  label,
  icon: Icon,
  active,
  isHomePage,
}) => {
  return (
    <li key={href}>
      {isHomePage ? (
        <ScrollLink
          className={clsx(
            `
          flex 
          items-center 
          space-x-1 
          cursor-pointer 
          hover:text-white 
          duration-300`,
            active ? "text-white" : "text-gray"
          )}
          to={href}
          smooth={true}
          offset={-112}
        >
          <Icon className="text-primary " />
          <span>{label}</span>
        </ScrollLink>
      ) : (
        <Link
          className={clsx(
            `
            flex 
            items-center 
            space-x-1 
            cursor-pointer 
            hover:text-white 
            duration-300`,
            active ? "text-white" : "text-gray"
          )}
          href={`/${href}`}
        >
          <Icon className="text-primary " />
          <span>{label}</span>
        </Link>
      )}
    </li>
  );
};

export default DesktopItem;
