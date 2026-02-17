import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 16px 64px;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  outline-offset: 4px;
  cursor: pointer;

  background: linear-gradient(to top, hsl(260deg 80% 40%), hsl(260deg 80% 50%));

  transition: filter 600ms;

  &:hover,
  &:focus {
    transition: filter 250ms;
    filter: brightness(110%) hue-rotate(60deg);
  }
`;

const Star = styled.span`
  display: inline-block;
  font-size: 2rem;
  margin: 4px;
`;

const Rotated = styled(Star)`
  filter: hue-rotate(var(--hue, 0deg));
  transition: filter 400ms;
`;

export default function HueRotation() {
  const [hue, setHue] = useState(0);

  const handleClick = () => {
    setHue((prev) => (prev + 60) % 360);
  };

  return (
    <div>
      <p>
        <Star role="img" aria-label="star">
          ⭐
        </Star>
        <Rotated style={{ '--hue': `${hue}deg` }} role="img" aria-label="star">
          ⭐
        </Rotated>
        <Rotated style={{ '--hue': `${hue}deg` }} role="img" aria-label="star">
          ⭐
        </Rotated>
      </p>
      <Button onClick={handleClick}>Rotate hue</Button>
    </div>
  );
}
