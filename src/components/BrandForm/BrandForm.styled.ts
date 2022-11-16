import React from 'react';
import styled from 'styled-components';
import { brandFieldsProps } from '../../reducers';

export interface BookFormProps {
    brandFields: brandFieldsProps
    onBrandChange: React.ChangeEventHandler<HTMLInputElement>
    onSubmit(event: React.MouseEvent<HTMLButtonElement>): void
    onChangeView: Function
}

export const BookForm = styled.div`
    background: whitesmoke;
    padding: 20px;
    position: relative;
`;

export const FormContainer = styled.div`
    max-width: 545px;
  width: 90%;
  margin: 80px auto;
`;