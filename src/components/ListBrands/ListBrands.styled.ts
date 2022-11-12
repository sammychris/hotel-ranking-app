import React from 'react';
import styled from 'styled-components';
import { brandFieldsProps } from '../../reducers';

export interface ListBrandProps {
  brands: Array<brandFieldsProps>
  onEditBrand: Function
  onDeleteBrand: Function
}


export const Message = styled.div`
  margin-top: 200px;
  text-align: center;
`;