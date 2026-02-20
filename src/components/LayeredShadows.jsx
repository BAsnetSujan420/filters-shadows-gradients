import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: hsl(285deg 90% 90%);
  width: 500px;
  height: 500px;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  background-color: white;
`;

const TraditionalBox = styled(Box)`
  box-shadow: 0 6px 6px hsl(0deg 0% 0% / 0.3);
`;
const LayeredBox = styled(Box)`
  box-shadow:
    0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075),
    0 16px 16px hsl(0deg 0% 0% / 0.075);
`;

function LayeredShadows() {
  return (
    <Wrapper>
      <TraditionalBox />
      <LayeredBox />
    </Wrapper>
  );
}

export default LayeredShadows;
