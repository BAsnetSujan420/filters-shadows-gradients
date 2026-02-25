import React from 'react';

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    --dark-gold: hsl(34deg 90% 45%);
    --gold: hsl(44deg 80% 70%);
    --light-gold: hsl(44deg 100% 85%);
  }
`;

const Wrapper = styled.div`
  position: relative;
  height: 325px;
  width: 550px;
  display: flex;
  justify-content: center;
  margin: auto;
  background-color: var(--gold);
  border-radius: 8px;
`;

const Image = styled.img``;

function TrophyDisplay() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Image
          alt="gold trophy"
          src="https://courses.joshwcomeau.com/cfj-mats/gold-trophy.png"
        />
      </Wrapper>
    </>
  );
}

export default TrophyDisplay;
