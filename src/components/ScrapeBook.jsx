import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: white;
    display: grid;
    place-content: center
    }
`;

const Wrapper = styled.article`
  background: peachpuff;
  padding: 64px;
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: inset 1px 2px 4px hsl(0deg 0% 0% / 0.3);
  border-radius: 1px;
`;

const Card = styled.div`
  padding: 16px;
  background: white;
  box-shadow: 1px 2px 4px hsl(0deg 0% 0% / 0.3);
  position: relative;
  border-radius: 1px;
`;

const Photo = styled.img`
  width: 100%;
  display: block;
  border-radius: 1px;
`;

const Sticker = styled.div`
  font-size: 5rem;
  position: absolute;
  top: 0;
  left: 0;
  line-height: 5rem;
  transform: translate(-40%, -40%);
  filter: drop-shadow(1px 2px 6px hsl(0deg 0% 0% / 0.5));
`;

export default function SimpleCard() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Card>
          <Photo
            alt="A girl sits on a boulder overlooking a mountain"
            src="https://courses.joshwcomeau.com/cfj-mats/girl-mountain.jpg"
          />
          <Sticker role="img" aria-label="heart sticker">
            💖
          </Sticker>
        </Card>
      </Wrapper>
    </>
  );
}
