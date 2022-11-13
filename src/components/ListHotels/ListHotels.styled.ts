import React from 'react';
import styled from 'styled-components';
import { brandFieldsProps, hotelFieldsProps } from '../../reducers';

export interface ListHotelProps {
    filteredHotels: Array<hotelFieldsProps>
    brands: Array<brandFieldsProps>
    onViewHotel: Function
}


export const Message = styled.div`
  margin-top: 200px;
  text-align: center;
`;