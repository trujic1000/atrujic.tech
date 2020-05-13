import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <span>© {new Date().getFullYear()} Aleksandar Trujic </span>
      <span>
        Built with{" "}
        <a
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Gatsby</strong>
        </a>
      </span>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 60px;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
