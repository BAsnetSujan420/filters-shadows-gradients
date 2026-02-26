import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  clip-path: ellipse(200px 160px at 50% 50%);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
function ClippingShapes() {
  return (
    <Wrapper>
      <Image src="https://courses.joshwcomeau.com/cfj-mats/architecture-joel-filipe.jpg" />
    </Wrapper>
  );
}

export default ClippingShapes;
