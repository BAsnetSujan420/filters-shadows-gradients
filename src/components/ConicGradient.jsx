import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  width: 500px;
  height: 100vh;
  display: grid;
  place-content: center;
`;
const Box = styled.div`
  width: 200px;
  height: 200px;
  border: 3px solid black;
  background-image: conic-gradient(
    from 90deg at 50% 100%,
    hsl(220deg 80% 55%) 50%,
    hsl(220deg 90% 75%) 62.5%,
    hsl(220deg 100% 85%) 75%,
    hsl(220deg 80% 75%) 87.5%,
    hsl(220deg 80% 55%) 100%
  );
`;

function LinearGradient() {
  return (
    <Wrapper>
      <Box></Box>
    </Wrapper>
  );
}

export default LinearGradient;
