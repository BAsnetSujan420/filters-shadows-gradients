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
  box-shadow: 0.5px 1px 1px hsl(220deg 60% 50% / 0.7);
`;

const ThirdBox = styled(Box)`
  width: 150px;
  height: 150px;
  box-shadow: 0.5px 1px 1px hsl(220deg 60% 50% / 0.7);
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
