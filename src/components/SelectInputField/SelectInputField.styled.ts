import React from 'react';
import styled from 'styled-components';
import { brandFieldsProps } from '../../reducers';

export interface SelectInputFieldsProps {
  onChange: React.ChangeEventHandler<HTMLSelectElement> & Function
  value: string | number
  name: string
  options: Array<brandFieldsProps> | string[]
}

export const Select = styled.select`
  max-width: 500px;
  width: 100%;
  height: 30px;
  font-size: 18px;
  margin: 5px 0;
`;
