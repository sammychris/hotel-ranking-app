import React, {FC} from 'react';
import * as S from './Header.styled';
import { BsPlusLg } from 'react-icons/bs';



const Header: FC<S.HeaderProps> = ({addNewRef, showAddNew, showAddNewRef, onChangeView}) => {  
  return (
    <>
      <S.Header>
        <S.HeaderSection>
          <S.Navigation>
            <S.NavLink onClick={() => onChangeView('default')}>Top Ranking</S.NavLink>
            <S.NavLink onClick={() => onChangeView('brands')}>Listed Brands</S.NavLink>
          </S.Navigation>
          <S.Navigation>
              Logo
          </S.Navigation>
          <S.Actions>
            <S.Menu>
              <S.List>
                <S.Item>
                  <S.Link ref={addNewRef}>
                    <BsPlusLg />
                  </S.Link>
                  {showAddNew && (
                    <S.NextedList ref={showAddNewRef}>
                      <S.NextedItem>
                        <S.NextedLink onClick={() => onChangeView('brandFields')}>
                          Create a brand
                        </S.NextedLink>
                        <S.NextedLink onClick={() => onChangeView('hotelFields')}>
                          List an hotel
                        </S.NextedLink>
                      </S.NextedItem>
                    </S.NextedList>
                  )}
                </S.Item>
              </S.List>
              <S.List>
                <S.Item>
                  <S.UserIcon />
                  <span>Me</span>
                </S.Item>
              </S.List>
            </S.Menu>
          </S.Actions>
        </S.HeaderSection>
      </S.Header>
    </>
  );
}


export default Header;
