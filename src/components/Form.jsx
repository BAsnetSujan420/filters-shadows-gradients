import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background-color: hsl(210deg, 55%, 92%);
    font-family: sans-serif;
  }
`;

const StyledForm = styled.form`
  background-color: white;
  padding: 32px;
  border-radius: 8px;

  transform: translateY(0px);
  filter: drop-shadow(1px 2px 4px hsl(0deg 0% 0% / 0.2));
  transition:
    filter 300ms,
    transform 300ms;
  will-change: transform;

  &:focus-within {
    transform: translateY(-4px);
    filter: drop-shadow(2px 4px 16px hsl(0deg 0% 0% / 0.2));
  }
`;

const Row = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
`;

const Input = styled.input`
  padding: 4px 8px;
  font-size: 1rem;
  background-color: white;
  color: black;
`;

const Button = styled.button`
  display: block;
  width: 50%;
  padding: 4px 0;
  margin: 32px auto 0;
  font-size: 1rem;
`;

export default function Form() {
  return (
    <>
      <GlobalStyles />

      <StyledForm>
        <Row>
          <Label htmlFor="full-name">Name:</Label>
          <Input id="full-name" type="text" placeholder="Jane Doe" />
        </Row>

        <Row>
          <Label htmlFor="email">Email Address:</Label>
          <Input id="email" type="email" placeholder="jane@domain.com" />
        </Row>

        <Button>Submit</Button>
      </StyledForm>
    </>
  );
}
