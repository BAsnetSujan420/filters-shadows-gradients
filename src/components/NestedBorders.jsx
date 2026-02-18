import React from 'react';
import styled from 'styled-components';

const Card = styled.article`
  --outer-radius: 24px;
  --padding: 8px;
  border-radius: var(--outer-radius);
  padding: var(--padding);
  width: min-content;
  background: white;
  color: black;
  text-align: center;

  h2 {
    margin-bottom: 0;
  }
`;

const Avatar = styled.img`
  border-radius: calc(var(--outer-radius) - var(--padding));
  display: block;
  width: 250px;
`;

export default function NestedBorders() {
  return (
    <Card>
      <Avatar
        alt="Dog avatar"
        src="https://courses.joshwcomeau.com/cfj-mats/article-image-spot.jpg"
      />
      <h2>Spot</h2>
      <p>
        Perennial Good Boy. Parlimentary candidate, district 22. Dog park YIMBY.
      </p>
    </Card>
  );
}
