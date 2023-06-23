"use client";
import { useRouter } from "next/navigation";
import React from "react";
interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  href?: string;
  children?: React.ReactNode;
  isLink?: boolean;
}
const Button: React.FC<ButtonProps> = ({ type, href, children, isLink }) => {
  const router = useRouter();
  const handleClick = () => {
    if (!isLink) {
      router.push(`/${href}`);
      return;
    }
  };
  return (
    <button
      type={type}
      className=" 
         flex 
         justify-center 
         items-center
         gap-3
         px-4 
         py-2
         w-fit 
         text-white
         outline 
         outline-2 
         outline-primary
         transition
         ease-linear
         duration-300
         bg-background
         hover:bg-primary/20
         "
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
