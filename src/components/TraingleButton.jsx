import React from 'react';
import styled from 'styled-components';

const TriangleWrapper = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
`;

const Triangle = styled.span`
  display: block;
  width: 80px;
  height: 80px;
  background-color: deeppink;
`;

export default function TriangleButton() {
  return (
    <TriangleWrapper>
      <Triangle />
    </TriangleWrapper>
  );
}
