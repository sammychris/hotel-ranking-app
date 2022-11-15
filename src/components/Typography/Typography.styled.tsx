import React, { FC } from 'react';
import styled from 'styled-components';

type TypographyTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

export interface TypographyProps {
  variant: TypographyTypes
  children: string | React.ReactNode
  style?: React.CSSProperties
}



export const Typography: FC<TypographyProps> = ({variant, children, style}) => {
  const Component = styled(variant)<{ variant: TypographyTypes }>`
    font-size: 18px;
    ${props => props.variant === 'h1' && 'font-size: 42px; font-weight: 400;'}
    ${props => props.variant === 'h2' && 'font-size: 32px; font-weight: 700;'}
    ${props => props.variant === 'h3' && 'font-size: 30px; font-weight: 600;'}
    ${props => props.variant === 'h4' && 'font-size: 30px; font-weight: 400;'}
    ${props => props.variant === 'h5' && 'font-size: 24px; font-weight: 400;'}
    ${props => props.variant === 'h6' && 'font-size: 18px; font-weight: 400;'}
    ${props => props.variant === 'p' && 'font-size: 16px; font-weight: 400;'}
    ${props => props.variant === 'span' && 'font-size: 12px; font-weight: 400;'}
    margin: 0;
    font-family: 'Raleway';
  `;
  return <Component variant={variant} style={style}>{children}</Component>;
}