import React from 'react';
import styled from 'styled-components';

export interface FieldLabelProps {
    children: React.ReactNode | string
}

export const FieldLabel = styled.label`
  font-size: 18px;
  margin: 5px 0;
  display: block;
`;
