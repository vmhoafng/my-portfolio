import React from "react";
import {
  AiOutlineCopyrightCircle,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import Logo from "../Logo";
const DesktopFooter = () => {
  return (
    <div
      className="
        hidden 
        lg:flex 
        lg:flex-col 
        lg:px-44
        justify-between
        items-center
        gap-12
        text-gray"
    >
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col gap-4">
          <div className="flex gap-6">
            <Logo />
            <span>mhoang.developer@gmail.com</span>
          </div>
          <span className="text-white">Front-end developer</span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-2xl text-white">Media</div>
          <ul className="flex gap-2 items-center justify-between">
            <li>
              <AiFillGithub size={24} />
            </li>
            <li>
              <AiFillFacebook size={24}/>
            </li>
            <li>
              <FaTelegram size={22}/>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-2 text-gray">
        <AiOutlineCopyrightCircle />
        <span>Copyright 2023. Made by vmhoafng. Reference from Elias</span>
      </div>
    </div>
  );
};

export default DesktopFooter;
