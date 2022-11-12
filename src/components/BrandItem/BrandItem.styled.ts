import React from 'react';
import styled from 'styled-components';

export interface BrandItemProps {
    id: string
    name: string
    onEditBrand: Function
    onDeleteBrand: Function
}

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 0 10px;
  border-color: #cfcfcf;
  border-width: 0.1em 0;
  border-style: solid;
  &:hover {
    box-shadow: 1px 3px 1px 1px #f5f5f5;
    z-index: 1;
    border-width: 1px;
  }
`;

export const Span = styled.span`
  color: cadetblue;
  font-size: 16px;
  font-weight: 600;
`;

export const Message = styled.div`
  margin-top: 20px;
  text-align: center;
`;