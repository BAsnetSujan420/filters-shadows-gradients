import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  background-color: hsl(220deg 100% 80%);
  min-width: 500px;
  min-height: 100vh;
`;

const Box = styled.div`
  border-radius: 8px;
  background: white;
  display: grid;
  place-content: center;
`;

const FirstBox = styled(Box)`
  width: 50px;
  height: 50px;

  box-shadow: 0.5px 1px 1px hsl(220deg 60% 50% / 0.7);
`;

const SecondBox = styled(Box)`
  width: 100px;
  height: 100px;
  box-shadow:
    1px 2px 2px hsl(220deg 60% 50% / 0.333),
    2px 4px 4px hsl(220deg 60% 50% / 0.333),
    3px 6px 6px hsl(220deg 60% 50% / 0.333);
`;

const ThirdBox = styled(Box)`
  width: 150px;
  height: 150px;
  box-shadow:
    1px 2px 2px hsl(220deg 60% 50% / 0.2),
    2px 4px 4px hsl(220deg 60% 50% / 0.2),
    4px 8px 8px hsl(220deg 60% 50% / 0.2),
    8px 16px 16px hsl(220deg 60% 50% / 0.2),
    16px 32px 32px hsl(220deg 60% 50% / 0.2);
`;

export default function ShadowDesign() {
  return (
    <Wrapper>
      <FirstBox />
      <SecondBox />
      <ThirdBox />
    </Wrapper>
  );
}
