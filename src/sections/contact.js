import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import {
  FaGithubSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

import { Container, Heading, Skew } from "components/elements";
import contactImage from "images/contact.svg";

const Contact = () => {
  return (
    <Section id="contact">
      <Skew />
      <Heading>Get In Touch</Heading>
      <Wrapper className="contact__wrapper">
        <div className="contact__info">
          <h2>
            Status: <strong>Available</strong>
          </h2>
          <span>
            I am currently available and looking for new opportunities.
          </span>
          <p>
            Whether you have a project I can help you on, a question, or just
            want to say hi, shoot me an e-mail or reach out through social media
            and I’ll get back to you as soon as possible.
          </p>
          <a
            href="mailto:info@atrujic.tech"
            rel="noopener noreferrer"
            className="contact__email"
          >
            <strong>info@atrujic.tech</strong>
          </a>
          <div className="contact__social">
            <a
              href="https://github.com/trujic1000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare />
            </a>
            <a
              href="https://www.linkedin.com/in/trujic1000/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/trujic1000/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://www.instagram.com/trujic1000/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare />
            </a>
          </div>
        </div>
        <div className="contact__illustration">
          <img src={contactImage} alt="contact" />
        </div>
      </Wrapper>
    </Section>
  );
};

export default Contact;

export const Section = styled.section`
  position: relative;
  padding: 7.5rem 0 17.5rem;

  ${media.lessThan("medium")`
    padding: 5rem 0 12rem;
  `}
`;

const Wrapper = styled(Container)`
  display: flex;
  padding: 0 10px;

  .contact__info,
  .contact__illustration {
    flex: 0 1 50%;
  }

  .contact__info {
    padding-right: 6rem;

    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      strong {
        font-weight: bold;
      }
    }

    span {
      display: block;
      margin-bottom: 2rem;
    }

    p {
      margin-bottom: 2rem;
    }

    .contact__social {
      margin-top: 2rem;
      a {
        svg {
          width: 40px;
          height: 40px;
          margin-right: 5px;
        }
      }
    }
  }

  .contact__illustration {
    text-align: center;
    img {
      width: 80%;
    }
  }

  ${media.lessThan("medium")`
    flex-direction: column;
    font-size: .9rem;

    .contact__info {
      margin-bottom: 5rem;
      padding-right: 0;

      h2 {
        font-size: 1.5rem;
      }
    } 
  `}
`;
