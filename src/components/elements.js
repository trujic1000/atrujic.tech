import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  width: 1140px;
  max-width: 90%;
  margin: 0 auto;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 7.5rem;

  ${media.lessThan("medium")`
      font-size: 2.5rem;
      margin-bottom: 4rem;
  `}
`;

export const Skew = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--bg2);
  z-index: -1;
  transform: skewY(-3deg);
  transform-origin: top left;
`;
