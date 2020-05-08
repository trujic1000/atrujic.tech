import React from "react";
import styled from "styled-components";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
};

export default Navbar;
