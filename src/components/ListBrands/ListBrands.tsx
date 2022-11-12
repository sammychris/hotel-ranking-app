import React, {FC} from 'react';
import * as S from './ListBrands.styled';
import BrandItem from '../BrandItem';
import Typography from '../Typography';


const ListBrands: FC<S.ListBrandProps> = ({brands, onEditBrand, onDeleteBrand}) => {
  if(!brands.length) { 
    return (
      <S.Message>
        <Typography variant='h4'>No brand yet!</Typography>
        click the plus icon on the header to list hotel
      </S.Message>
    )
  }
  return (
    <>{
      brands.map((item, index) => {
        const {id, name} = item; 
        return (<BrandItem key={index} id={id} name={name} onEditBrand={onEditBrand} onDeleteBrand={onDeleteBrand} />)
      })
    }</> 
  )
}


export default ListBrands;
