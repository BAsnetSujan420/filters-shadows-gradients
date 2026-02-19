import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: hsl(220deg 75% 90%);
    overflow: hidden;
  }
`;

const Box = styled.div`
  --blur: 8px;
  --spread: calc(var(--blur) * -1);
  --offset: 12px;

  width: 200px;
  max-width: 100%;
  border-radius: 8px;
  background: white;
  padding: 16px 20px;
  display: grid;
  place-content: center;
  font-size: 2rem;
  color: black;
  box-shadow: 0px var(--offset) var(--blur) var(--spread) hsl(0deg 0% 0% / 0.2);
`;

export default function OneSideShadows() {
  return (
    <>
      <GlobalStyles />
      <Box>Hello</Box>
    </>
  );
}
