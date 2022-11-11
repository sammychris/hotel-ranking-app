import React, { FC } from 'react';
import * as S from './Typography.styled';


const Typography: FC<S.TypographyProps> = ({variant, style, children}) => {
  return (
    <S.Typography variant={variant} style={style}>
      {children}
    </S.Typography>
  );
}


export default Typography;

