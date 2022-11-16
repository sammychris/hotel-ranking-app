import React from 'react';
import styled from 'styled-components';
import { brandFieldsProps, hotelFieldsProps } from '../../reducers';

export interface HotelFormProps {
  hotelFields: hotelFieldsProps
  brands: Array<brandFieldsProps>,
  onSubmit(event: React.MouseEvent<HTMLButtonElement>): void;
  onHotelChange: React.ChangeEventHandler<HTMLInputElement|HTMLSelectElement>
  onChangeView: Function
}

export const HotelForm = styled.div`
  background: whitesmoke;
  padding: 20px;
  position: relative;
`;


export const FormContainer = styled.div`
max-width: 545px;
  width: 90%;
  margin: 80px auto;
`;
