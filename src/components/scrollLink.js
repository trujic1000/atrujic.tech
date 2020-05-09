import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const StyledLink = styled(Link)`
  cursor: pointer;
`;

const ScrollLink = ({ to, className, onClick, children }) => (
  <StyledLink
    to={to}
    className={className}
    spy={true}
    smooth={true}
    onClick={onClick}
  >
    {children}
  </StyledLink>
);

export default ScrollLink;
