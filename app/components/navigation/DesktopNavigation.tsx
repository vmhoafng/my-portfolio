"use client";
import useRoutes from "@/app/hook/useRoutes";
import React, { useEffect, useState } from "react";
import DesktopItem from "./DesktopItem";
import useHomePage from "@/app/hook/useHomePage";
import Logo from "../Logo";
import { FaAngleDown } from "react-icons/fa";
import { Menu } from "@headlessui/react";
const DesktopNavigation = () => {
  const routes = useRoutes();
  const isHomePage = useHomePage();
  return (
    <nav className="hidden lg:fixed lg:top-0 lg:flex lg:w-full lg:px-44 lg:py-8 lg:bg-background z-50 ">
      <Logo />
      <ul role="list" className="flex items-center justify-between gap-x-8">
        {routes.map((route) => (
          <DesktopItem
            key={route.label}
            href={route.href}
            label={route.label}
            icon={route.icon}
            active={route.active}
            isHomePage={isHomePage}
          />
        ))}
        <li className="text-gray font-semibold cursor-pointer">
          <Menu>
            <Menu.Button className="flex gap-1 items-center">
              <span>EN</span>
              <FaAngleDown className="" size={18} />
            </Menu.Button>
          </Menu>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
