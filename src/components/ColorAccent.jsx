import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 400px;
  padding: 24px;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 1rem;
`;

const Input = styled.input`
  width: 18px;
  height: 18px;
`;

const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  background: hsl(260deg 80% 50%);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 200ms ease;

  &:hover {
    background: hsl(260deg 80% 40%);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export default function FormControls() {
  const [selected, setSelected] = useState('option1');
  const [checked, setChecked] = useState({
    featureA: false,
    featureB: false,
  });

  return (
    <Wrapper>
      {/* Radio Group */}
      <FieldGroup>
        <strong>Choose an option:</strong>
        <Label>
          <Input
            type="radio"
            name="options"
            value="option1"
            checked={selected === 'option1'}
            onChange={() => setSelected('option1')}
          />
          Option 1
        </Label>
        <Label>
          <Input
            type="radio"
            name="options"
            value="option2"
            checked={selected === 'option2'}
            onChange={() => setSelected('option2')}
          />
          Option 2
        </Label>
      </FieldGroup>

      {/* Checkbox Group */}
      <FieldGroup>
        <strong>Select features:</strong>
        <Label>
          <Input
            type="checkbox"
            checked={checked.featureA}
            onChange={(e) =>
              setChecked((prev) => ({
                ...prev,
                featureA: e.target.checked,
              }))
            }
          />
          Feature A
        </Label>
        <Label>
          <Input
            type="checkbox"
            checked={checked.featureB}
            onChange={(e) =>
              setChecked((prev) => ({
                ...prev,
                featureB: e.target.checked,
              }))
            }
          />
          Feature B
        </Label>
      </FieldGroup>

      <Button onClick={() => console.log({ selected, checked })}>Submit</Button>
    </Wrapper>
  );
}
