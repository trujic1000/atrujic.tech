import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Heading, Skew } from "components/elements";
import Project from "components/project";
import { Section } from "./about";

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
              fluid(maxWidth: 1900) {
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
      <Skew />
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
          <Project
            key={project._id}
            title={project.title}
            description={project.description}
            tags={tags}
            sourceUrl={project.sourceUrl}
            githubUrl={project.githubUrl}
            image={project.image}
          />
        );
      })}
    </Section>
  );
};

export default Portfolio;
