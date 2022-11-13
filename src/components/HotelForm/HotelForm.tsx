import React, {FC } from 'react';
import Button from '../Button';
import FieldLabel from '../FieldLabel';
import InputField from '../InputField';
import SelectInputField from '../SelectInputField';
import * as S from './HotelForm.styled';


const HotelForm: FC<S.HotelFormProps> = ({hotelFields, brands, onHotelChange, onSubmit, onChangeView}) => {
  return (
    <S.HotelForm>
      <FieldLabel>Name:</FieldLabel>
      <InputField onChange={onHotelChange} value={hotelFields.name} name='name'/>
      <FieldLabel>City:</FieldLabel>
      <InputField onChange={onHotelChange} value={hotelFields.city} name='city' />
      <FieldLabel>Country:</FieldLabel>
      <InputField onChange={onHotelChange} value={hotelFields.country} name='country'/>
      <FieldLabel>Address:</FieldLabel>
      <InputField onChange={onHotelChange} value={hotelFields.address} name='address'/>
      <FieldLabel>Rating:</FieldLabel>
      <SelectInputField
        onChange={onHotelChange}
        value={hotelFields.rating}
        options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
        name='rating'
      />
      <FieldLabel>Brand:</FieldLabel>
      <SelectInputField onChange={onHotelChange} value={hotelFields.brandId} options={brands} name='brandId'/>
      <Button cls="danger" position="right" size="small" onClick={() => onChangeView('default')}>close</Button>
      <div>
        <Button onClick={onSubmit}>Save</Button>
      </div>
    </S.HotelForm>
  );
}


export default HotelForm;
