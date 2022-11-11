import React from 'react';
import styled from 'styled-components';


export interface HeaderProps {
    addNewRef: React.RefObject<HTMLAnchorElement>
    showAddNew: boolean
    showAddNewRef: React.RefObject<HTMLUListElement>
    onChangeView: Function
}

export const Header = styled.div`
    position: relative;
    z-index: 2;
    background: #fff;
`;

export const HeaderSection = styled.header`
    height: 80px;
    max-width: 1230px;
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

export const NavLink = styled.button`
    color: #1890ff;
    background: #fff;
    border: 0;
    cursor: pointer;
`;

export const Navigation = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    height: 100%;
    width: 234px;
    justify-content: space-around;
`;

export const Actions = styled.div`
    width: 234px;
    display: flex;
    justify-content: flex-end;
    position: relative;
`;

export const Menu = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const List = styled.div`
    list-style-type: none;
    display: flex;
    font-size: 10px;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    width: 230px;
    align-items: center;
`;


export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;


export const NextedLink = styled.a`
  display: block;
  padding: 4px 8px 4px 16px;
`

export const Link = styled.a`
    display: flex;
    position: relative;
    color: #666666;
    font-size: 14px;
    align-items: center;
    &::after {
        content: '';
        border: 6px solid black;
        border-color: black transparent transparent;
        margin-left: 5px;
    }
`

export const NextedItem = styled.li`
  width: 160px;
`

export const NextedList = styled.ul`
  text-decoration: none;
  box-shadow: 2px 5px 19px 4px #0000004d;
  background: white;
  position: absolute;
  border-radius: 5px !important;
  padding: 5px 0;
  font-size: 12px;
  top: 100%;
  margin-top: 11px;
  list-style-type: none;
  right: 0;
  &::before {
    position: absolute;
    right: 14px;
    top: -12px;
    content: '';
    border: 6px solid white;
    border-color: transparent transparent #fff;
  }
`

export const UserIcon = styled.div`
    width: 30px;
    height: 30px;
    background: #b9b9b9;
    border-radius: 50px;
`
