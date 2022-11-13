import React, { FC } from 'react';
import { Pagination, Select, Spin } from 'antd';
import { brandFieldsProps } from '../../reducers';

export interface FilterBrandProps {
  brands: Array<brandFieldsProps>
  onFilterChange: Function
}

const FilterBrands: FC<FilterBrandProps> = ({brands, onFilterChange}) => {
  return(
    <div className="filter">
      <p>Filter by brand</p>
      <Select
        mode="multiple"
        allowClear
        style={{ width: '100%' }}
        placeholder="Please select"
        onChange={(value) => onFilterChange(value)}
        options={brands.map(brand => ({value: brand.name, label: brand.name}))}
      />
    </div>
  )
}

export default FilterBrands;