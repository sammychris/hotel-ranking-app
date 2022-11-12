import React, {FC} from 'react';
import Button from '../Button';
import * as S from './BrandItem.styled';

const BrandItem: FC<S.BrandItemProps> = ({id, name, onEditBrand, onDeleteBrand}) => {
  return (
    <S.Item>
      <S.Span>id-{id}</S.Span><S.Span>{name}</S.Span>
      <div>
        <Button cls="primary" onClick={() => onEditBrand({id,name})}>Edit</Button>
        <Button cls="danger" onClick={() => onDeleteBrand({id})}>Delete</Button>
      </div>
    </S.Item>
  )
}


export default BrandItem;
