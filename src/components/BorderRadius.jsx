import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 300px;
  height: 150px;
  background-image: linear-gradient(red, green);
  border-radius: 10%;
  border-radius: 10% 10% 10% 10% / 10% 10% 10% 10%;
  border-radius: 37% 63% 8% 92% / 73% 41% 59% 27%;
  border-radius: 50% 50% 68% 32% / 84% 62% 38% 16%;
  border-radius: 5000px 5000px 1000px 1000px;
`;

function BorderRadius() {
  return <Box />;
}

export default BorderRadius;
