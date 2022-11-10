import React, { FC } from 'react';
import * as S from './FieldLabel.styled';


const FieldLabel: FC<S.FieldLabelProps> = ({children}) => {
  return (
    <S.FieldLabel>{children}</S.FieldLabel>
  );
}


export default FieldLabel;

