import React, { useState, useEffect, useRef, FormEvent } from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import FilterBrands from '../components/FilterBrands';
import HotelForm from '../components/HotelForm';
import BrandForm from '../components/BrandForm';
import HotelOverlay from '../components/HotelOverlay';
import ListHotels from '../components/ListHotels';
import { useDispatch, useSelector } from 'react-redux';
import {
  setView,
  setHotels,
  setHotelFields,
  setBrands,
  setBrandFields,
  setFilterByBrands,
  hotelFieldsProps,
  brandFieldsProps
} from '../reducers';
import ListBrands from '../components/ListBrands';
import { RootState } from '../store/store';



function App() {
  const dispatch = useDispatch();
  const {
    view,
    hotels,
    brands,
    hotelFields,
    brandFields,
    filterByBrands
  } = useSelector((state: RootState) => state.hotel);

  const [showAddNew, setShowAddNew] = useState(false);
  const addNewRef = useRef<HTMLAnchorElement>(null!);
  const showAddNewRef = useRef<HTMLUListElement>(null!);


  useEffect(() => {
    document.addEventListener('keydown', handleKeys, true);
    document.addEventListener('click', handleClicks, true);
    return () => {
      document.removeEventListener('keydown', handleKeys, true);
      document.removeEventListener('click', handleClicks, true);
    };
  });


  const handleKeys = (e: { key: string; }): void => {
    if (e.key === 'Escape') {
      setShowAddNew(false);
    }
  };


  const handleClicks = (e: Event): void => {
    let account: boolean, addNew = false;
    if (addNewRef.current.contains(e.target as HTMLAnchorElement)) {
      account = false;
      addNew = !showAddNew;
    } else if (showAddNewRef.current) {
      account = false;
      addNew = showAddNewRef.current.contains(e.target as HTMLUListElement);
    }
    setShowAddNew(addNew);
  };


  const onHotelChange = (e: FormEvent<HTMLInputElement|HTMLSelectElement>) => dispatch(setHotelFields({...hotelFields, [e.currentTarget.name]: e.currentTarget.value}));
  const onBrandChange = (e: FormEvent<HTMLInputElement>) => dispatch(setBrandFields({...brandFields, [e.currentTarget.name]: e.currentTarget.value}));


  const onSubmitBrand = () => {
    if (!validStr(brandFields.name)) return alert('Brand cannot be empty!');

    const brandIndex = brands.findIndex((brand: brandFieldsProps) => brand.id === brandFields.id);

    if (isDuplicateBrand(brandIndex)) return window.alert('Duplicate brand not allowed!');
    if (isNewItem(brandIndex)) {
      createBrand();
      window.alert('You\'ve successfully added a new Brand!');
    }
    else {
      updateBrand(brandIndex);
      window.alert('You\'ve successfully updated a brand!');
    }
    onChangeView('brands')
  };


  const onSubmitHotel = () => {
    if (!validStr(hotelFields.name)) return alert('Name cannot be empty');
    if (!validStr(hotelFields.city)) return alert('City cannot be empty');
    if (!validStr(hotelFields.country)) return alert('Country cannot be empty');
    if (!validStr(hotelFields.address)) return alert('Address cannot be empty');
    if (!validStr(hotelFields.rating)) return alert('Rating cannot be empty');
    if (!validStr(hotelFields.brandId)) return alert('Brand must be created first!');

    const hotelIndex = hotels.findIndex((hotel: hotelFieldsProps) => hotel.id === hotelFields.id);
    if (isNewItem(hotelIndex)) {
      createHotel();
      window.alert('You\'ve successfully create a new hotel!');
    }
    else {
      updateHotel(hotelIndex);
      window.alert('You\'ve successfully updated a brand!');
    }
    onChangeView('default');
  };


  const isDuplicateBrand = (index: number) =>  brands[index]?.name.toLowerCase() === brandFields?.name.toLowerCase().trim();
  

  // check if the item doesn't exists!
  const isNewItem = (index: number) => index === -1;


  const createBrand = () => { // add a new brand!
    const lastItem = brands[brands.length - 1];
    const id = `${lastItem? lastItem.id + 1: 0}`; // generation unique id
    const newBrands = [ ...brands, { id, name: brandFields.name.trim() } ];
    dispatch(setBrands(newBrands));
  }


  const updateBrand = (findByIndex: number) => { // update a brand...
    const newBrands = JSON.parse(JSON.stringify(brands));
    newBrands[findByIndex].name = brandFields.name.trim();
    dispatch(setBrands(newBrands));
  }


  const createHotel = () => { // add a new hotel!
    const {name, city, country, address, rating, brandId } = hotelFields;
    const lastItem = hotels[hotels.length - 1];
    const id = `${lastItem? lastItem.id + 1: 0}`;  // generation unique id
    const newHotels = [ ...hotels, { id, name, city, country, address, rating, brandId } ];
    dispatch(setHotels(newHotels));
  }


  const updateHotel = (findByIndex: number) => { // upate a hotel!
    const newHotels = JSON.parse(JSON.stringify(hotels));
    newHotels[findByIndex].name = hotelFields.name.trim();
    newHotels[findByIndex].brandId = hotelFields.brandId.trim();
    newHotels[findByIndex].city = hotelFields.city.trim();
    newHotels[findByIndex].country = hotelFields.country.trim();
    newHotels[findByIndex].address = hotelFields.address.trim();
    newHotels[findByIndex].rating = hotelFields.rating.trim();
    dispatch(setHotels(newHotels));
  }


  const onChangeView = (view: string) => {
    dispatch(setView(view));
    if(view === 'hotelDetails' || view === 'hotelFields' || view === 'brandDetails' || view === 'brandFields') return;
    dispatch(setBrandFields({ id: '', name: '' }))
    dispatch(setHotelFields({
      id: '',
      name: '',
      city: '',
      country: '',
      address: '',
      rating: '',
      image: '',
      brandId: '',
    }))
  }


  const onDeleteBrand = (item: brandFieldsProps) => {
    if(!window.confirm('Are you sure you want to delete this?')) return;
    const filterData = brands.filter((brand: brandFieldsProps) => brand.id !== item.id);
    dispatch(setBrands(filterData));
  }


  const onDeleteHotel = (item: hotelFieldsProps) => {
    if(!window.confirm('Are you sure you want to delete this?')) return;
    const filterData = hotels.filter((hotel: hotelFieldsProps) => hotel.id !== item.id);
    dispatch(setHotels(filterData));
  }


  const onViewHotel = (values: hotelFieldsProps) => {
    dispatch(setHotelFields({...values}))
    onChangeView('hotelDetails')
  }


  const onEditHotel = (item:hotelFieldsProps) => {
    dispatch(setHotelFields({ ...item }))
    onChangeView('hotelFields');
  }


  const onEditBrand = (item:hotelFieldsProps) => {
    dispatch(setBrandFields({ ...item }))
    onChangeView('brandFields');
  }


  const validStr = (str: string) =>  str?.toLowerCase()?.trim();


  const onFilterChange = async (values:  string[]) => dispatch(setFilterByBrands(values));

  
  const filterElements = (hotels: hotelFieldsProps[], filters: string[]) => {
    const newHotels = [...hotels];
    const brand = (id: string) => brands.find((item: brandFieldsProps) => item.id === id);
    
    if (filters?.length) return newHotels.filter((hotel) => filters.includes(brand(hotel.brandId)?.name)).sort((a, b) => Number(b.rating) - Number(a.rating));
    return newHotels.sort((a: hotelFieldsProps, b: hotelFieldsProps) => Number(b.rating) - Number(a.rating));
  }


  const filteredHotels = filterElements(hotels, filterByBrands);


  return (
    <div className="App">
      <Header addNewRef={addNewRef} showAddNew={showAddNew} showAddNewRef={showAddNewRef} onChangeView={onChangeView} />
      <Layout>
        {view === 'default'? (<>
          <FilterBrands brands={brands} onFilterChange={onFilterChange} />
          <ListHotels filteredHotels={filteredHotels} brands={brands} onViewHotel={onViewHotel} />
        </>):
          view === 'hotelFields'? (
            <HotelForm
              hotelFields={hotelFields}
              brands={brands}
              onHotelChange={onHotelChange}
              onSubmit={onSubmitHotel}
              onChangeView={onChangeView}
            />
          ):
            view === 'brandFields'? (
              <BrandForm 
                brandFields={brandFields}
                onBrandChange={onBrandChange}
                onSubmit={onSubmitBrand}
                onChangeView={onChangeView}
              />
            ): 
              view === 'hotelDetails'?(
                <HotelOverlay hotelFields={hotelFields} brands={brands} onChangeView={onChangeView} onEditHotel={onEditHotel} onDeleteHotel={onDeleteHotel}/>
              ):
                view === 'brands'? (
                  <ListBrands brands={brands} onEditBrand={onEditBrand} onDeleteBrand={onDeleteBrand} />
                ): ''
        }
      </Layout>
    </div>
  );
}

export default App;
