import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 700px;
  height: 700px;
  background-image: linear-gradient(red, green);
  border-radius: 10%;
  border-radius: 10% 10% 10% 10% / 10% 10% 10% 10%;
  border-radius: 37% 63% 8% 92% / 73% 41% 59% 27%;
  border-radius: 50% 50% 68% 32% / 84% 62% 38% 16%;
`;

function BorderRadius() {
  return <Box />;
}

export default BorderRadius;
