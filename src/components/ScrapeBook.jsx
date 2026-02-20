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
`;

const Card = styled.div`
  padding: 16px;
  background: white;
`;

const Photo = styled.img``;

const Sticker = styled.div`
  font-size: 5rem;
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
