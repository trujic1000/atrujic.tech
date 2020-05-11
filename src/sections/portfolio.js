import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Container, Heading } from "components/elements";
import { StyledLink } from "components/buttonLink";
import Icon from "components/icon";

const PROJECTS_QUERY = graphql`
  query projectsQuery {
    allSanityProject {
      edges {
        node {
          _id
          title
          description
          tags {
            title
          }
          image {
            asset {
              fluid(maxWidth: 1200) {
                ...GatsbySanityImageFluid
              }
            }
          }
          sourceUrl
          githubUrl
        }
      }
    }
  }
`;

const Portfolio = () => {
  const { allSanityProject } = useStaticQuery(PROJECTS_QUERY);
  return (
    <Section id="portfolio">
      <Heading>Portfolio</Heading>
      {allSanityProject.edges.map(({ node: project }) => {
        // Put tags into a single variable
        let tags = "";
        project.tags.forEach(tag => {
          tags += tag.title + " - ";
        });
        // Get rid of the last " - ";
        tags = tags.substr(0, tags.length - 3);
        return (
          <ProjectItem key={project._id}>
            <h2>{project.title}</h2>
            <Wrapper>
              <div className="grid_item project-description">
                <p>{project.description}</p>
                <span>
                  <strong>{tags}</strong>
                </span>
                <div className="links">
                  <a href={project.sourceUrl}>
                    <Icon name="source" />
                  </a>
                  {project.githubUrl && (
                    <a href={project.sourceUrl}>
                      <Icon name="github" />
                    </a>
                  )}
                </div>
              </div>
              <div className="grid_item project-img-wrap">
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img fluid={project.image.asset.fluid} alt="project" />
                </a>
              </div>
            </Wrapper>
          </ProjectItem>
        );
      })}
    </Section>
  );
};

export default Portfolio;

const Section = styled.section`
  position: relative;
  padding: 120px 0 280px;

  ${media.lessThan("medium")`
    padding: 80px 0 200px;
  `}
`;

const Wrapper = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;
  padding: 0 10px;
`;

const ProjectItem = styled.div`
  margin: 5rem 0 10rem 0;

  &:nth-child(odd) {
    .project-description {
      order: 2;
    }
  }

  h2 {
    text-align: center;
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 3rem;
  }

  .project-description {
    p,
    span {
      margin-bottom: 1.5rem;
    }

    span {
      display: block;
    }

    .links {
      display: flex;
      align-items: center;

      a {
        margin-right: 15px;
      }
    }
  }
`;
