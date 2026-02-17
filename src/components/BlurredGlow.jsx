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

const GradientCircle = styled(Gradient)`
  filter: drop-shadow(0px 0px 25px hsl(0deg 0% 0% / 0.3));
`;
const GlowEffect = styled(Gradient)`
  position: absolute;
  filter: blur(40px);
  transform: scale(1.3) translateX(10%) rotate(30deg);
`;

export default function BlurredGlow() {
  return (
    <Wrapper>
      <GlowEffect />

      <GradientCircle />
    </Wrapper>
  );
}
