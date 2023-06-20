"use client";
import useRoutes from "@/app/hook/useRoutes";
import { Menu, Transition } from "@headlessui/react";
import React from "react";
import MobileItem from "./MobileItem";
import useHomePage from "@/app/hook/useHomePage";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../Logo";

const MobileNavigation = () => {
  const routes = useRoutes();
  const isHomePage = useHomePage();

  return (
    <nav className="lg:hidden w-full px-4 pt-4 pb-2 flex items-start fixed bg-background z-50">
      <Logo />
      <Menu as="div" className="">
        <Transition
          className="fixed h-screen w-full bg-background top-0 left-0 px-4 pt-4 pb-2 origin-top overflow-hidden"
          enter=" origin-top duration-500 ease-out"
          enterFrom="transform h-1/2 w-full opacity-0"
          enterTo="transform h-screen w-full opacity-100"
          leave="duration-300 ease-in"
          leaveFrom="transform h-screen w-full opacity-100"
          leaveTo="transform h-0 w-full opacity-0"
        >
          <Menu.Items
            as="div"
            className="flex flex-col h-screen w-full bg-background"
          >
            <div className="flex items-center">
              <Logo />
              <Menu.Button title="close" as="button" className="">
                <AiOutlineClose className="text-white" size={24} />
              </Menu.Button>
            </div>
            <ul className="flex flex-col flex-1 gap-8 pt-10">
              {routes.map((route) => (
                <MobileItem
                  key={route.label}
                  href={route.href}
                  label={route.label}
                  icon={route.icon}
                  active={route.active}
                  isHomePage={isHomePage}
                />
              ))}
            </ul>
          </Menu.Items>
        </Transition>
        <Menu.Button title="menu" as="button" className="">
          <AiOutlineMenu className="text-white" size={24} />
        </Menu.Button>
      </Menu>
    </nav>
  );
};

export default MobileNavigation;
