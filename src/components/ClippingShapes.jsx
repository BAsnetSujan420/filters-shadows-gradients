import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  clip-path: circle(160px at 200px 200px);
  transition: clip-path 400ms;
  will-change: transform;

  ${Wrapper}:hover &,
  ${Wrapper}:focus & {
    clip-path: circle(200px at 200px 200px);
    transition: clip-path 200ms;
  }
`;
function ClippingShapes() {
  return (
    <Wrapper>
      <Image src="https://courses.joshwcomeau.com/cfj-mats/architecture-joel-filipe.jpg" />
    </Wrapper>
  );
}

export default ClippingShapes;
