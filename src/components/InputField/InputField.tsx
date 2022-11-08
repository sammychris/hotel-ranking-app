import React, { FC } from 'react';
import * as S from './InputField.styled';


const InputField: FC<S.InputFieldProps> = ({value, name, onChange, placeholder, type, required}) => {
  return (
    <S.InputField value={value} name={name} onChange={onChange} placeholder={placeholder} type={type} required={required} />
  );
}


export default InputField;


