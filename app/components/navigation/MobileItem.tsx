"use client";
import { Menu } from "@headlessui/react";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import clsx from "clsx";
interface MobileItemProps {
  href: string;
  label: string;
  icon: any;
  active?: boolean;
  isHomePage?: boolean;
}
const MobileItem: React.FC<MobileItemProps> = ({
  href,
  label,
  icon: Icon,
  active,
  isHomePage,
}) => {
  return (
    <Menu.Item as="li">
      {isHomePage ? (
        ({ close }) => (
          <ScrollLink
            className={clsx(
              `flex items-center space-x-1 cursor-pointer text-4xl hover:text-white`,
              active ? "text-white" : "text-gray"
            )}
            to={href}
            smooth={true}
            offset={-112}
            onClick={close}
          >
            <Icon className="text-primary " />
            <span>{label}</span>
          </ScrollLink>
        )
      ) : (
        <Link
          className={clsx(
            `flex items-center space-x-1 cursor-pointer text-4xl hover:text-white`,
            active ? "text-white" : "text-gray"
          )}
          href={`/${href}`}
        >
          <Icon className="text-primary " />
          <span>{label}</span>
        </Link>
      )}
    </Menu.Item>
  );
};

export default MobileItem;
