import React from "react";
import styled, { css } from "styled-components";
import { Squash as Hamburger } from "hamburger-react";

import NavLinks from "./NavLinks";
import Link from "components/scrollLink";
import { useMenuContext } from "state/menu";
import { useScroll } from "hooks";
import Icon from "components/icon";

const DesktopNavbar = ({ theme, toggleTheme }) => {
  const { isMenuOpen, toggleMenu } = useMenuContext();
  const { isScrolled } = useScroll();
  return (
    <DesktopNav isScrolled={isScrolled}>
      <div className="logo-wrap">
        <Link to="home" className="logo">
          <Icon name={theme === "dark" ? "logo-light" : "logo-dark"} />
        </Link>
      </div>
      <NavLinks theme={theme} toggleTheme={toggleTheme} />
      <Hamburger toggled={isMenuOpen} toggle={toggleMenu} duration={0} />
    </DesktopNav>
  );
};

export default DesktopNavbar;

const DesktopNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  padding: 0 60px;
  z-index: 2;

  ${props =>
    props.isScrolled &&
    css`
      background: var(--bgNav);
      box-shadow: var(--navBoxShadow);
    `}

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 0 30px;

    .nav-links {
      display: none;
    }
  }

  .logo-wrap {
    flex: 1;
  }

  .hamburger-react {
    display: none;
    z-index: 99;
    & > div > div {
      background: var(--text) !important;
    }
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;
