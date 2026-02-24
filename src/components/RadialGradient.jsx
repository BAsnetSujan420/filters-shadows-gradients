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
  background-image: radial-gradient(
    circle at 50% 100%,
    white 0%,
    yellow 10%,
    gold 20%,
    coral 30%,

    skyblue
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
