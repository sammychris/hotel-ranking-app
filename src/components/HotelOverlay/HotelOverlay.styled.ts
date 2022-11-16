import styled from 'styled-components';
import { brandFieldsProps, hotelFieldsProps } from '../../reducers';

export interface HotelOverlayProps {
  hotelFields: hotelFieldsProps
  brands: Array<brandFieldsProps>
  onChangeView: Function
  onEditHotel: Function
  onDeleteHotel: Function
}

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgb(0 0 0 / 42%); 
  z-index: 1;
`;

export const HotelContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HotelOverlay = styled.div`
  padding: 32px 16px;
  background: #fff;
  position: relative;
  z-index: 3;
  max-height: 50vh;
  overflow: auto;
  display: flex;
  padding: 0;
  align-items: center;
  padding: 20px;
  border-radius: 3px;
  @media (max-width: 720px) {
    max-height: unset;
    display: block;
  }
`;

export const Details = styled.div`
    margin: 0 50px;
    width: 300px;
    @media (max-width: 720px) {
      margin:0;
      margin-top: 10px;
    }
`;

export const Image = styled.img`
    display: block;
    width: 350px;
    height: 300px;
    background-size: contain;
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 720px) {
      margin-top: 15px;
    }
`;



