import React from "react";
import styled from "styled-components";
import { useMenuContext } from "state/menu";
import Link from "components/scrollLink";
import Icon from "components/Icon";

const DesktopNavLinks = ({ theme, toggleTheme }) => {
  const { closeMenu } = useMenuContext();

  return (
    <NavLinksWrapper className="nav-links">
      <li>
        <NavLink to="about-me" className="link" onClick={closeMenu}>
          About Me
        </NavLink>
      </li>
      <li>
        <NavLink to="portfolio" className="link" onClick={closeMenu}>
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink to="contact" className="link" onClick={closeMenu}>
          Contact
        </NavLink>
      </li>
      <li>
        <button onClick={toggleTheme}>
          <Icon size={18} name={theme === "dark" ? "day" : "night"} />
        </button>
      </li>
    </NavLinksWrapper>
  );
};

export default DesktopNavLinks;

const NavLinksWrapper = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  li:not(:last-child) {
    margin-right: 26px;
  }

  li:last-child {
    position: absolute;
    right: 60px;
  }

  button {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    li {
      padding: 12px;
      margin: 0 !important;
    }

    li:last-child {
      padding: 0;
      right: initial;
      left: 50%;
      bottom: 60px;
      transform: translate(-70%);
    }
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  color: white;
  text-decoration: none;
  text-transform: capitalize;
  color: var(--text);
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    background: var(--text);
    transition: width 150ms linear;
  }
  &:hover::before {
    width: 100%;
  }
`;
