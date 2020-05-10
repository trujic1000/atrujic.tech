import React from "react";
import styled from "styled-components";

import { useMenuContext } from "state/menu";
import { useScrollFreeze } from "hooks";
import NavLinks from "./NavLinks";

const MobileNavbar = ({ theme, toggleTheme }) => {
  const { isMenuOpen } = useMenuContext();
  useScrollFreeze(isMenuOpen);
  return (
    <>
      {isMenuOpen && (
        <MobileNav>
          <NavLinks theme={theme} toggleTheme={toggleTheme} />
        </MobileNav>
      )}
    </>
  );
};

export default MobileNavbar;

const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: var(--bgNav);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transition: background 150ms linear;
`;
