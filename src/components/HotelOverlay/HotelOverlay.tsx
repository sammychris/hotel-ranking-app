import React, { FC } from 'react';
import Button from '../Button';
import { Rate } from 'antd';
import * as S from './HotelOverlay.styled';
import Typography from '../Typography';

const HotelOverlay: FC<S.HotelOverlayProps> = ({hotelFields, brands, onChangeView, onEditHotel, onDeleteHotel}) =>  {
  const brand = brands.find(b => b.id == hotelFields.brandId);
  return (
    <S.HotelContainer>
      <S.HotelOverlay>
        <Button cls="danger" position="right" size="small" onClick={() => onChangeView('default')}>close</Button>
        <S.ProductImages>
          <div>
            <S.Image src='https://th.bing.com/th/id/OIP.0vUoFeFRl_RD9_o33r0b2wHaHa?pid=ImgDet&rs=1' />
          </div>
        </S.ProductImages>
        <S.ProductDetails>
          
          <Typography variant='h3'>{hotelFields.name}</Typography>
          <Typography variant='h4' style={{ marginBottom: 10 }}>{brand?.name}</Typography>
          <Typography variant='h4'>{hotelFields.country}</Typography>
          <Typography variant='h4' style={{ marginBottom: 10 }}>{hotelFields.city}</Typography>
          <Typography variant='p'>{hotelFields.address}</Typography>

          <div style={{ marginBottom: 20 }}>
            <Rate allowHalf disabled defaultValue={Number(hotelFields.rating)/2} />
          </div>

          <div>
            <Button cls="primary" onClick={() => onEditHotel(hotelFields)}>Edit</Button>
            <Button cls="danger" onClick={() => onDeleteHotel(hotelFields)}>Delete</Button>
          </div>

        </S.ProductDetails>
      </S.HotelOverlay>
      <S.Overlay />
    </S.HotelContainer>
  );
}

export default HotelOverlay;

