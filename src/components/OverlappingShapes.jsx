import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    --blue-bg: hsl(230deg 40% 20%);
    --blue-darker: hsl(230deg 40% 24%);
    --blue-dark: hsl(230deg 40% 28%);
  }
  body {
  background: var(--blue-bg)
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(
      calc(180deg - 20deg),
      transparent 0,
      transparent 49.99%,
      var(--blue-dark) 50%,
      var(--blue-dark) 100%
    ),
    linear-gradient(
      calc(180deg + 20deg),
      transparent 0,
      transparent 49.99%,
      var(--blue-darker) 50%,
      var(--blue-darker) 100%
    );

  background:
    radial-gradient(
      circle at 100% 120%,
      var(--blue-dark) 0,
      var(--blue-dark) 49.99%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle at 20% 100%,
      var(--blue-darker) 0,
      var(--blue-darker) 49.99%,
      transparent 50%,
      transparent 100%
    );
`;

function OverlappingShapes() {
  return (
    <>
      <GlobalStyle />
      <Background />
    </>
  );
}

export default OverlappingShapes;
