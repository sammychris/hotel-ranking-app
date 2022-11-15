import React from 'react';
import styled from 'styled-components';
import { brandFieldsProps, hotelFieldsProps } from '../../reducers';

export interface CardProps {
  hotel: hotelFieldsProps
  brands: Array<brandFieldsProps>
  onViewHotel: Function
}


export const Card = styled.div`
  padding: 14px;
  height: 510px;
  margin: 40px 0;
  &:hover {
    box-shadow: 0px 2px 5px 0px #c7c7c7;
  }
  position: relative;
  cursor: pointer;
`;


export const ProductImg = styled.div`
  display: block;
  width: 350px;
  height: 300px;
  background-size: contain;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div`
  background: #fffefe;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0.3;
`;

