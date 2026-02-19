import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: hsl(220deg 75% 90%);
    overflow: hidden;
  }
`;

const Card = styled.article`
  position: relative;
  width: 200px;
  max-width: 100%;
  height: 250px;
  background: white;
  border-radius: 4px;
  padding: 32px;
  text-align: center;

  box-shadow: 2px 4px 8px hsl(0deg 0% 0% / 0.25);

  h2 {
    font-size: 1rem;
  }
`;

const Decoration = styled.div`
  position: absolute;
  border: 4px solid white;
  border-radius: 50%;
`;

const DecorationOne = styled(Decoration)`
  top: 0;
  right: 0;
  width: 80px;
  height: 80px;
  background: hotpink;
  transform: translate(50%, -50%);
`;

const DecorationTwo = styled(Decoration)`
  top: 50px;
  right: -70px;
  width: 50px;
  height: 50px;
  background: dodgerblue;
`;

export default function DropShadowCard() {
  return (
    <>
      <GlobalStyles />
      <Card>
        <h2>Hi!</h2>
        <DecorationOne />
        <DecorationTwo />
      </Card>
    </>
  );
}
