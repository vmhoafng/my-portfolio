"use client";
import useRoutes from "@/app/hook/useRoutes";
import React, { useEffect, useRef, useState } from "react";
import DesktopItem from "./DesktopItem";
import useHomePage from "@/app/hook/useHomePage";
import Logo from "../Logo";
import LanguagesButton from "./LanguagesButton";
const DesktopNavigation = () => {
  const routes = useRoutes();
  const isHomePage = useHomePage();
  return (
    <nav className="hidden lg:fixed lg:top-0 lg:flex lg:w-full lg:px-44 lg:py-8 z-50 bg-background">
      <div className="flex-1">
        <Logo />
      </div>
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
        <LanguagesButton />
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
