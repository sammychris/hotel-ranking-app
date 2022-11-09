import React, { FC } from 'react';
import * as S from './ContentWrapper.styled';

const ContentWrapper: FC<S.ContentWrapperProps> = ({children}) => {
  return (
    <S.ContentWrapper>
      {children}
    </S.ContentWrapper>
  );
}

export default ContentWrapper;


