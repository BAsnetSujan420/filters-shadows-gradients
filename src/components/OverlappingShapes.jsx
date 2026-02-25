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
