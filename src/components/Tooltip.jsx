import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: hsl(230deg 80% 90%);
    margin: 0;
    font-family: sans-serif;
  }
`;

const TooltipWrapper = styled.div`
  position: relative;
  width: 160px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  text-align: center;
  color: black;

  box-shadow: 0px 0px 16px hsl(0deg 0% 0% / 0.5);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;

    background: inherit;
    width: 24px;
    height: 24px;

    transform: translateY(-100%);
    clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
  }
`;

export default function Tooltip() {
  return (
    <>
      <GlobalStyles />
      <TooltipWrapper>Lorem ipsum dolor hello</TooltipWrapper>
    </>
  );
}
