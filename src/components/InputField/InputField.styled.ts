import React from 'react';
import styled from 'styled-components';

export interface InputFieldProps {
  value?: string
  name?: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  type?: string
  required?: boolean
}

export const InputField = styled.input<InputFieldProps>`
  max-width: 500px;
  width: 100%;
  height: 30px;
  font-size: 18px;
  margin: 5px 0;
`;
