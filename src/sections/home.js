import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import Particles from "react-particles-js";
import ScrollLink from "components/scrollLink";
import Icon from "components/icon";

import { Container } from "components/elements";
import ButtonLink from "components/buttonLink";

const params = {
  particles: {
    number: {
      value: 15,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#333",
    },
    shape: {
      type: "polygon",
      polygon: {
        nb_sides: 6,
      },
    },
    opacity: {
      value: 0.2,
      anim: {
        enable: false,
      },
    },
    size: {
      value: 51.29459670609772,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        size_min: 40,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "remove",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

const Home = () => {
  return (
    <Section id="home">
      <Background params={params} />
      <Wrapper className="home_wrapper">
        <h1 className="home__heading">
          Hey, I'm Aleksandar!
          <br />
          <span>
            A <strong>Front-End</strong> Developer.
          </span>
        </h1>
        <div className="home__button-wrapper">
          <ButtonLink to="portfolio">Portfolio</ButtonLink>
          <ButtonLink to="contact" className="outline">
            Get In Touch
          </ButtonLink>
        </div>
      </Wrapper>
      <Link to="about-me">
        <Icon name="arrow-down" size={18} />
      </Link>
    </Section>
  );
};

export default Home;

const Background = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  svg {
    fill: var(--text);
  }
`;

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  margin-top: -11rem;

  .home__heading {
    font-size: 2rem;
    margin-bottom: 2rem;
    line-height: 1.5;
    span {
      font-size: 3rem;
    }
  }

  ${media.lessThan("medium")`
    .home__heading {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      span {
        font-size: 2.5rem;
      }
    }
  `}

  ${media.lessThan("550px")`
    .home__heading {
      font-size: 1rem;
      margin-bottom: 1rem;
      span {
        font-size: 2rem;
      }
    }
  `}

  ${media.lessThan("small")`
    .home__heading {
      font-size: 1rem;
      span {
        font-size: 1.5rem;
      }
    }
  `}
`;

const Link = styled(ScrollLink)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, -50%);
`;
