"use client";
import React from "react";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
const Navigation = () => {
  return (
    <div className="relative">
      <MobileNavigation />
      <DesktopNavigation />
    </div>
  );
};

export default Navigation;
