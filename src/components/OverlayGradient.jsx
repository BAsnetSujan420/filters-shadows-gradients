import React from 'react';
import styled from 'styled-components';

const Figure = styled.figure`
  margin: 0;
  position: relative;
  width: min-content;
`;
const Photo = styled.img`
  display: block;
  width: 300px;
  height: 200px;
  object-fit: cover;
`;
const Caption = styled.figcaption`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: black;
`;

function OverlayGradient() {
  return (
    <Figure>
      <Photo
        alt="Two upside-down dog heads"
        src="https://courses.joshwcomeau.com/cfj-mats/upside-down-dogs.jpg"
      />
      <Caption>“Dogs From Above”</Caption>
    </Figure>
  );
}

export default OverlayGradient;
