import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const useHomePage = () => {
  const pathname = usePathname();
  const [isHomePage, setIsHomePage] = useState(true);
  useEffect(() => {
    if (pathname !== "/") {
      setIsHomePage(false);
    }
  }, [pathname, isHomePage]);
  return isHomePage;
};

export default useHomePage;
