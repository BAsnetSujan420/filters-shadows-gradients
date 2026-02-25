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
  height: 50%;
  color: white;
  display: flex;
  align-items: flex-end;
  text-shadow: 0px 0px 3px hsl(0deg 0% 0% / 0.5);
  padding: 16px;
  background: linear-gradient(
    to bottom,
    hsla(0, 0%, 0%, 0) 0%,
    hsla(0, 0%, 0%, 0.011) 10.8%,
    hsla(0, 0%, 0%, 0.041) 20.6%,
    hsla(0, 0%, 0%, 0.088) 29.5%,
    hsla(0, 0%, 0%, 0.149) 37.5%,
    hsla(0, 0%, 0%, 0.22) 44.8%,
    hsla(0, 0%, 0%, 0.299) 51.5%,
    hsla(0, 0%, 0%, 0.383) 57.6%,
    hsla(0, 0%, 0%, 0.467) 63.3%,
    hsla(0, 0%, 0%, 0.551) 68.7%,
    hsla(0, 0%, 0%, 0.63) 73.9%,
    hsla(0, 0%, 0%, 0.701) 78.9%,
    hsla(0, 0%, 0%, 0.762) 83.9%,
    hsla(0, 0%, 0%, 0.809) 89.1%,
    hsla(0, 0%, 0%, 0.839) 94.4%,
    hsla(0, 0%, 0%, 0.85) 100%
  );
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
