import { useMemo } from "react";
import { usePathname } from "next/navigation";
import {
  AiFillHome,
  AiFillProject,
  AiFillMail,
  AiFillInfoCircle,
  AiFillCode,
} from "react-icons/ai";
const useRoutes = () => {
  const pathname = usePathname();
  const routes = useMemo(() => {
    return [
      {
        label: "home",
        href: "#",
        icon: AiFillHome,
        active: pathname === "/",
      },
      {
        label: "projects",
        href: "projects",
        icon: AiFillProject,
        active: pathname === "/projects",
      },
      {
        label: "about-me",
        href: "about",
        icon: AiFillInfoCircle,
        active: pathname === "/about",
      },
      {
        label: "contacts",
        href: "contacts",
        icon: AiFillMail,
        active: pathname === "/contacts",
      },
    ];
  }, [pathname]);

  return routes;
};

export default useRoutes;
