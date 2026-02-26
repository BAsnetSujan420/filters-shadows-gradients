import React from 'react';
import styled, { keyframes } from 'styled-components';

const unfurl = keyframes`
  from {
    transform: translateY(-10px);
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 0%,
      0% 0%
    );
  }

  to {
    transform: translateY(0px);
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 100%,
      0% 100%
    );
  }
`;

const Highlighted = styled.p`
  background: hsl(50deg 100% 70%);
  padding: 12px 24px;
  font-size: 1.25rem;
  font-weight: bold;
  width: -moz-fit-content;
  width: fit-content;
  border-radius: 4px;
  color: black;
  animation: ${unfurl} 1000ms;
`;

function DropInText() {
  return <Highlighted>The World's Best Keyboard</Highlighted>;
}

export default DropInText;
