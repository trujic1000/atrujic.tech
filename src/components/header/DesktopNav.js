import React from "react";
import styled, { css } from "styled-components";
import media from "styled-media-query";
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
    <Nav isScrolled={isScrolled}>
      <div className="logo-wrap">
        <Link to="home" className="logo">
          <Icon name={theme === "dark" ? "logo-light" : "logo-dark"} />
        </Link>
      </div>
      <NavLinks theme={theme} toggleTheme={toggleTheme} />
      <Hamburger toggled={isMenuOpen} toggle={toggleMenu} duration={0} />
    </Nav>
  );
};

export default DesktopNavbar;

const Nav = styled.nav`
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
      background: var(--bg2);
      box-shadow: var(--navBoxShadow);
    `}

  .logo-wrap {
    flex: 1;
  }

  .hamburger-react {
    display: none;
    z-index: 99;
    & > div > div {
      background: var(--text) !important;
    }
  }

  ${media.lessThan("medium")`
    justify-content: space-between;
    padding: 0 30px;

    .nav-links {
      display: none;
    }

    .hamburger-react {
      display: block;
    }
  `}
`;
