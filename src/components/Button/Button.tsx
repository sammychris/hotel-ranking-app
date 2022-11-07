import React, {FC} from 'react';
import * as S from './Button.styled';



const Button: FC<S.ButtonProps> = ({ children, onClick, cls, size, position, type, style }) => {
  return (
    <S.Button onClick={onClick} size={size} position={position} cls={cls} style={style}>
      {children}
    </S.Button>
  );
}


export default Button;

