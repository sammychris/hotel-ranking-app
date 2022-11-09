import React from 'react';
import styled from 'styled-components';

export interface ContentWrapperProps {
    children: React.ReactNode | string,
}

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 50px 0;
  justify-content: center;
`;
