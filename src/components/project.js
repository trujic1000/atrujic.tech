import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import Img from "gatsby-image";

import Icon from "components/icon";
import { Container } from "components/elements";

const Project = ({ title, description, tags, sourceUrl, githubUrl, image }) => {
  return (
    <ProjectItem className="project">
      <h2 className="project__title">{title}</h2>
      <Wrapper className="project__wrapper">
        <div className="project__description">
          <p>{description}</p>
          <span>
            <strong>{tags}</strong>
          </span>
          <div className="project__links">
            <a href={sourceUrl} className="source-link">
              <Icon name="source" />
            </a>
            {githubUrl && (
              <a href={sourceUrl} className="github-link">
                <Icon name="github" />
              </a>
            )}
          </div>
        </div>
        <div className="project__image">
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
            <Img
              fluid={image.asset.fluid}
              alt="project"
              imgStyle={{ borderRadius: 10 }}
            />
          </a>
        </div>
      </Wrapper>
    </ProjectItem>
  );
};

export default Project;

const ProjectItem = styled.div`
  margin: 5rem 0 10rem 0;

  &:nth-child(odd) {
    .project__description {
      order: 2;
    }

    .project__description {
      padding-right: 0;
      padding-left: 6rem;
    }
  }

  h2 {
    text-align: center;
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 3rem;
  }

  .project__description,
  .project__image {
    flex: 0 1 50%;
  }

  .project__description {
    padding-right: 6rem;
    p {
      margin-bottom: 1rem;
    }

    span {
      display: block;
      margin-bottom: 1.5rem;
    }

    .project__links {
      display: flex;
      align-items: center;

      a {
        margin-right: 15px;

        svg {
          transition: fill 150ms linear;
          fill: var(--text);
        }
      }
    }
  }

  .project__image {
    border-radius: 10px;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
  }

  ${media.lessThan("medium")`
  margin: 5rem 0;
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .project__image {
      margin-bottom: 1.5rem;
    }

    .project__description {
      font-size: .9rem;
      a {
        svg {
        width: 30px;
        height: 30px;
        }
      }
      a.github-link {
        svg {
          width: 24px;
          height: 24px;
        }
      }
    }

    .project__description,
    .project__image {
      flex: 0 1 100%;
    }

    .project__description,
    .project__image {
     padding: 0;
    }

    &:nth-child(odd) {
      .project__description {
        padding: 0;
      }
   }

    &:nth-child(even) {
      .project__description {
        order: 2;
      }
   }
  `}
`;

const Wrapper = styled(Container)`
  display: flex;
  padding: 0 10px;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`;
