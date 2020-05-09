import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useTheme } from "hooks";

const Navbar = () => {
  const [theme, toggleTheme] = useTheme();
  return (
    <>
      <DesktopNav theme={theme} toggleTheme={toggleTheme} />
      <MobileNav theme={theme} toggleTheme={toggleTheme} />
    </>
  );
};

export default Navbar;
