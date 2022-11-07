import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
    children: React.ReactNode
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
    cls?: string
    size?: string
    position?: string
    style?: React.CSSProperties;
    type?: string
}

export const Button = styled.button<ButtonProps>`
font-size: 16px;
padding: 5px 10px;
margin: 5px 5px 10px 0;
cursor: pointer;
&:hover {
    background: #fff;
}
${props => props.size === 'small' &&`
    font-size: 12px;
    padding: 5px 10px;
    border: 0;
    margin-right: 20;
`}
${props => props.position === 'right' &&`
    position: absolute;
    top: 0;
    right: 0;
`}
${props => props.cls === 'danger' &&`
    background: #f96565;
    color: #fff;
    border: 0;
    &:hover {
        background: #c14f4f;
    }
`}
${props => props.cls === 'primary' &&`
    background: #007bff;
    color: #fff;
    border: 0;
    &:hover {
        background: #007bbb;
    }
`}
${props => props.cls === 'active' &&`
    background: #fff;
    color: #000;
    border: 2px solid black;
    &:hover {
        background: #fff;
        border: 2px solid black;
    }
`}
`;
