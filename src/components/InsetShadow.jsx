import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  --radius: 16px;
  --padding: 8px;
  background-color: hsl(230deg 80% 90%);
  padding: var(--padding);
  border-radius: var(--radius);
  box-shadow: inset 2px 2px 8px hsl(0deg 0% 0% / 0.33);
  overflow: hidden;
`;

const Box = styled.div`
  width: 200px;
  max-width: 90vw;
  border-radius: calc(var(--radius) - var(--padding));
  background: white;
  padding: 16px 20px;
  display: grid;
  place-content: center;
  font-size: 2rem;
  color: black;
  box-shadow: 2px 2px 8px hsl(0deg 0% 0% / 0.33);
`;

function InsetShadow() {
  return (
    <Wrapper>
      <Box>Moat!</Box>
    </Wrapper>
  );
}

export default InsetShadow;
