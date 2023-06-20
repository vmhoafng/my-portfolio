"use client";
import React from "react";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
const Navigation = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <MobileNavigation />
      <DesktopNavigation />
      <main className="lg:px-44 px-4 py-28">{children}</main>
    </div>
  );
};

export default Navigation;
