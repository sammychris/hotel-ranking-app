import React from 'react';
import styled from 'styled-components';

export interface LayoutProp {
  children: React.ReactNode | string
}

export const Layout = styled.div`
  max-width: 1230px;
  width: 90%;
  margin: 80px auto;
`;
