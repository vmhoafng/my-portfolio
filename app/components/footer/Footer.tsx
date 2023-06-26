import React from "react";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  return (
    <div className="bg-background">
      <hr className="block h-[1px] border-t-[1px] border-gray" />
      <div className="py-8">
        <MobileFooter />
        <DesktopFooter />
      </div>
    </div>
  );
};

export default Footer;
