import React, { FC } from 'react';
import * as S from './Layout.styled';

const Layout: FC<S.LayoutProp> = ({children}) => {
  return (
    <S.Layout>
      {children}
    </S.Layout>
  );
}

export default Layout;


