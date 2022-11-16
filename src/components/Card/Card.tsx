import React, {FC} from 'react';
import { Rate } from 'antd';
import * as S from './Card.styled';
import Typography from '../Typography';

const Card: FC<S.CardProps> = ({hotel, brands, onViewHotel}) => {
  const brand = brands.find(b => b.id === hotel.brandId);

  return (
    <S.Card onClick={() => onViewHotel(hotel)}>
      <S.HotelImage style={{backgroundImage: 'url(https://th.bing.com/th/id/OIP.0vUoFeFRl_RD9_o33r0b2wHaHa?pid=ImgDet&rs=1)'}}>
      </S.HotelImage>
      <Typography variant='h5' style={{padding: 5}}>{hotel?.name}</Typography>
      {/* <Typography variant='p' style={{padding: 5}}>{hotel?.city}, {hotel?.country}</Typography>
      <Typography variant='p' style={{padding: 5}}>{hotel?.address}</Typography>  */}
      <Typography variant='p' style={{padding: 5}}>Brand: {brand?.name}</Typography>
      <Rate allowHalf disabled defaultValue={Number(hotel?.rating)/2} />
    </S.Card>
  );
}

export default Card;
