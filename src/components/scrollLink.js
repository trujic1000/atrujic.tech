import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const StyledLink = styled(Link)`
  cursor: pointer;
`;

const ScrollLink = ({ to, className, onClick, offset = 0, children }) => (
  <StyledLink
    to={to}
    className={className}
    spy={true}
    smooth={true}
    offset={offset}
    onClick={onClick}
  >
    {children}
  </StyledLink>
);

export default ScrollLink;
