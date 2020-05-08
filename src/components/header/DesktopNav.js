import React from "react";
import { AnchorLink as Link } from "gatsby-plugin-anchor-links";
import styled, { css } from "styled-components";
import { Squash as Hamburger } from "hamburger-react";

import NavLinks from "./NavLinks";
import { Container } from "components/elements";
import { useMenuContext } from "state/menu";
import { useScroll } from "hooks";

const DesktopNavbar = () => {
  const { isMenuOpen, toggleMenu } = useMenuContext();
  const { isScrolled } = useScroll();
  return (
    <DesktopNav isScrolled={isScrolled}>
      <Wrapper>
        <Link to="/" className="logo">
          Logo
        </Link>
        <NavLinks />
        <Hamburger toggled={isMenuOpen} toggle={toggleMenu} duration={0} />
      </Wrapper>
    </DesktopNav>
  );
};

export default DesktopNavbar;

const Wrapper = styled(Container)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

const DesktopNav = styled.nav`
  /* display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center; */

  background: var(--bg1);
  transition: all 150ms linear;

  ${props =>
    props.isScrolled &&
    css`
      background: var(--bgNav);
      box-shadow: var(--navBoxShadow);
    `}

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  /* padding: 0 60px; */
  z-index: 2;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    /* padding: 0 30px; */
  }

  .logo {
    flex: 2;
    color: var(--text);
    font-size: 32px;
  }

  .nav-links {
    @media screen and (max-width: 768px) {
      display: none;
    }
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
