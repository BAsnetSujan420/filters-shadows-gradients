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
  border-radius: 10000px 10000px 1000px 1000px;
  background-image: conic-gradient(
    from 90deg at 50% 100%,
    var(--dark-gold) 50%,
    var(--gold) 62.5%,
    var(--light-gold) 75%,
    var(--gold) 87.5%,
    var(--dark-gold) 100%
  );
`;

const Image = styled.img`
  transform-origin: center bottom;
  transform: scale(1.4) translateY(16px);
`;

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
