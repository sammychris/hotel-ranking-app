import { getItem, saveItem } from '../utils/storage';
import { createSlice } from '@reduxjs/toolkit';

export type hotelFieldsProps = {
  id: string
  name: string
  city: string
  country: string
  address: string
  rating: string
  brandId: string
}

export type brandFieldsProps = {
  id: string
  name: string
}

const reducerSlice = createSlice({
  name: 'reducer',
  initialState: {
    hotels: getItem('hotels'),
    brands: getItem('brands'),
    view: 'default',
    filterByBrands: [],
    hotelFields: {
      id: '',
      name: '',
      city: '',
      country: '',
      address: '',
      rating: '',
      brandId: '',
    },
    brandFields: {
      id: '',
      name: '',
    },
  },
  reducers: {
    setHotels: (state, action) => {
      state.hotels = action.payload;
      saveItem('hotels', action.payload);
    },
    setBrands: (state, action) => {
      state.brands = action.payload;
      saveItem('brands', action.payload);
    },
    setHotelFields: (state, action) => {
      state.hotelFields = action.payload;
    },
    setBrandFields: (state, action) => {
      state.brandFields = action.payload;
    },
    setView: (state, action) => {
      state.view = action.payload;
    },
    setFilterByBrands: (state, action) => {
      state.filterByBrands = action.payload;
    },
  },
});

export const {
  setHotels,
  setBrands,
  setHotelFields,
  setBrandFields,
  setView,
  setFilterByBrands
} = reducerSlice.actions;

export default reducerSlice.reducer;
