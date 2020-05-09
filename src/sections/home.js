import React from "react";
import styled from "styled-components";
import Particles from "react-particles-js";
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
    <Intro>
      <Background params={params} />
      <Wrapper>
        <h1>
          Hey, I'm Aleksandar!
          <br />
          <span>
            A <strong>Front-End</strong> Developer.
          </span>
        </h1>
        <div className="button-wrap">
          <ButtonLink to="portfolio">Portfolio</ButtonLink>
          <ButtonLink to="portfolio" className="outline">
            Get In Touch
          </ButtonLink>
        </div>
      </Wrapper>
    </Intro>
  );
};

export default Home;

const Background = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
`;

const Intro = styled.section`
  min-height: 75vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
    span {
      font-size: 4rem;
      strong {
        font-weight: 500;
      }
    }
  }
`;
