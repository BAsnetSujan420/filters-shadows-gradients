import React from 'react';
import styled from 'styled-components';

const TriangleWrapper = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;

  &:hover span,
  &:focus span {
    clip-path: polygon(0% 0%, 100% 50%, 100% 50%, 0% 100%);
  }
`;

const Triangle = styled.span`
  display: block;
  width: 80px;
  height: 80px;
  background-color: deeppink;

  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);

  transition: clip-path 250ms;
  will-change: clip-path;
`;

export default function TriangleButton() {
  return (
    <TriangleWrapper>
      <Triangle />
    </TriangleWrapper>
  );
}
