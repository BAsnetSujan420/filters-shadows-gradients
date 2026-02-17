import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const Gradient = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: linear-gradient(deeppink, red, coral, gold, white);
`;

export default function BlurredGlow() {
  return (
    <Wrapper>
      <Gradient />
    </Wrapper>
  );
}
