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
  background-image: conic-gradient(
    from 90deg at 50% 100%,
    hsl(220deg 80% 55%) 50%,
    hsl(220deg 90% 75%) 62.5%,
    hsl(220deg 100% 85%) 75%,
    hsl(220deg 80% 75%) 87.5%,
    hsl(220deg 80% 55%) 100%
  );
`;

const Knob = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 6px solid hsl(0deg 0% 60%);
  background-image: conic-gradient(
    hsl(0deg 0% 90%),
    hsl(0deg 0% 100%),
    hsl(0deg 0% 30%),
    hsl(0deg 0% 80%),
    hsl(0deg 0% 50%),
    hsl(0deg 0% 90%),
    hsl(0deg 0% 100%),
    hsl(0deg 0% 30%),
    hsl(0deg 0% 80%),
    hsl(0deg 0% 50%),
    hsl(0deg 0% 90%)
  );
`;

const PieChart = styled.div`
  height: 200px;
  border: 3px solid black;
  border-radius: 50%;
  background-image: conic-gradient(
    deeppink 0%,
    deeppink 33.3%,
    gold 33.4%,
    gold 66.6%,
    slateblue 66.7%,
    slateblue 100%
  );
`;

function LinearGradient() {
  return (
    <Wrapper>
      <Box></Box>
      <Knob></Knob>
      <PieChart />
    </Wrapper>
  );
}

export default LinearGradient;
