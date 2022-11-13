import React, {FC} from 'react';
import * as S from './ListHotels.styled';
import ContentWrapper from '../ContentWrapper';
import Card from '../Card';
import Typography from '../Typography';

const ListHotels: FC<S.ListHotelProps> = ({filteredHotels, brands, onViewHotel}) => {
  if(!filteredHotels.length) { 
    return (
      <S.Message>
        <Typography variant='h4'>Not listed yet!</Typography>
        click the plus icon on the header to list hotel
      </S.Message>
    )
  }
  return (
    <ContentWrapper>
      {
        filteredHotels.map((hotel, i) => (
          <Card
            key={i}
            hotel={hotel}
            brands={brands}
            onViewHotel={onViewHotel}
          />)
        )
      }
    </ContentWrapper>
  );
}


export default ListHotels;
