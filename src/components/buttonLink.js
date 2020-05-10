import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "react-scroll";

const ButtonLink = ({ to, className, onClick, children }) => (
  <StyledLink to={to} className={className} smooth={true} onClick={onClick}>
    {children}
  </StyledLink>
);

export default ButtonLink;

export const StyledLink = styled(Link)`
  position: relative;
  display: inline-block;
  background-color: var(--text);
  color: var(--bg1);
  outline: none;
  border: 1px solid var(--text);
  border-radius: 10rem;
  padding: 0.7rem 2rem;
  margin-right: 2rem;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12), 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  transition: transform 150ms ease-out;

  &.outline {
    color: var(--text);
    background: transparent;
  }

  &:hover {
    transform: translateY(-3px);
  }

  ${media.lessThan("medium")`
    padding: .5rem 1rem;
    margin-right: 1rem;
    font-size: .8rem;
  `}
`;
