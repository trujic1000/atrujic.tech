import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Container, Heading, Skew } from "components/elements";
import { StyledLink } from "components/buttonLink";

const ABOUT_IMAGE_QUERY = graphql`
  query aboutImageQuery {
    aboutImage: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(maxWidth: 405, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const About = () => {
  const { aboutImage } = useStaticQuery(ABOUT_IMAGE_QUERY);
  return (
    <Section id="about-me">
      <Skew />
      <Heading>About Me</Heading>
      <Wrapper>
        <div className="flex_item flex_item--left">
          <p>
            I’m Aleksandar, a self-taught <strong>front-end </strong> developer
            from Bosnia and Herzegovina.{" "}
          </p>
          <p>
            Besides being a developer, I am also a student athlete, majoring in
            <strong> Computer Science</strong> and playing football/soccer for{" "}
            <a
              href="https://www.moval.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="mvc"
            >
              Missouri Valley College
            </a>
          </p>
          <p>
            The technologies I work with are JavaScript, HTML and CSS with a
            focus on the frameworks like <strong>React.js</strong>, Next.js,
            Gatsby, Node and Express.
          </p>
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume"
          >
            Resume
          </Link>
        </div>
        <div className="flex_item flex_item--right">
          <Img
            fluid={aboutImage.childImageSharp.fluid}
            alt="Aleksandar Trujic"
            imgStyle={{
              objectFit: "contain",
              filter: "saturate(var(--saturation))",
              transition: "all 150ms linear",
            }}
            style={{ maxHeight: "40vh" }}
          />
        </div>
      </Wrapper>
    </Section>
  );
};

export default About;

const Section = styled.section`
  position: relative;
  padding: 120px 0 280px;

  ${media.lessThan("medium")`
    padding: 80px 0 200px;
  `}
`;

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  padding: 0 10px;

  .flex_item {
    flex: 1;
  }

  p {
    font-size: 1.15rem;
    line-height: 1.5;
    margin: 15px 0;
    padding-right: 6.5rem;
  }

  a.mvc {
    color: var(--text);
  }

  ${media.lessThan("medium")`
    flex-direction: column;

    .flex_item--right {
      width: 100%;
      margin-top: 4rem;
    }
    
    p {
      font-size: .9rem;
      padding-right: 0;
    }
  `}
`;

const Link = styled(StyledLink).attrs({
  as: "a",
})`
  margin-top: 2rem;
  text-decoration: none;

  ${media.lessThan("medium")`
  margin-top: 1rem;
  `}
`;
