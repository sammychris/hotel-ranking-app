import React, { FC } from 'react';
import { brandFieldsProps } from '../../reducers';
import * as S from './SelectInputField.styled';


const SelectInputField: FC<S.SelectInputFieldsProps> = ({onChange, value, name, options}) => {
  return (
    <S.Select value={value} name={name} onChange={onChange}>
      <option value=''>none</option>
      {
        options?.map((item, i) => {
          if(typeof(item) === 'string') return <option key={i} value={item}>{item}</option>;
          return <option key={i} value={item.id}>{item.name}</option>
        })
      }
    </S.Select>
  );
}


export default SelectInputField;

