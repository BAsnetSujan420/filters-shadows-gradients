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
  background-image: linear-gradient(
    90deg,
    deeppink 0%,
    deeppink 9.99%,
    red 10%,
    red 19.99%,
    coral 20%,
    coral 29.99%,
    gold 30%,
    gold 39.99%,
    white 40%
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
