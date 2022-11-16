import React, {FC} from 'react';
import Button from '../Button';
import FieldLabel from '../FieldLabel';
import InputField from '../InputField';
import * as S from './BrandForm.styled';


const BrandForm: FC<S.BookFormProps> = ({brandFields, onBrandChange, onSubmit, onChangeView}) => {
  return (
    <S.FormContainer>
      <S.BookForm>
        <Button cls="danger" position="right" size="small" onClick={() => onChangeView('brands')}>close</Button>
        <FieldLabel>Enter brand</FieldLabel>
        <InputField onChange={onBrandChange} value={brandFields.name} name='name'/>
        <div>
          <Button onClick={onSubmit}>Save</Button>
        </div>
      </S.BookForm>
    </S.FormContainer>
  );
}


export default BrandForm;
