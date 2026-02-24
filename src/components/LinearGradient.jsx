import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  width: 500px;
  height: 100vh;
  display: grid;
  place-content: center;
  gap: 2rem;
`;
const Box = styled.div`
  width: 200px;
  height: 200px;
  border: 3px solid black;
`;

const BoxOne = styled(Box)`
  background-image: linear-gradient(deeppink, 20%, gold);
`;
const BoxTwo = styled(Box)`
  background-image: linear-gradient(deeppink, 80%, gold);
`;

function LinearGradient() {
  return (
    <Wrapper>
      <BoxOne></BoxOne>
      <BoxTwo></BoxTwo>
    </Wrapper>
  );
}

export default LinearGradient;
