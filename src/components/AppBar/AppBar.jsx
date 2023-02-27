// import { NavLink } from 'react-router-dom';
import {
  selectAuthIsLoggedIn,
  selectAuthName,
} from 'redux/auth/auth-selectors';

import {
  Header,
  HeaderWrapper,
  HeaderTitle,
  HeaderNavBtn,
  HeaderNav,
  AuthBtn,
} from './AppBar.styled';

import { useSelector, useDispatch } from 'react-redux';

import { logoutThunk } from 'redux/auth/auth.thunk';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const name = useSelector(selectAuthName);
  const dispatch = useDispatch();

  return (
    <Header>
      <HeaderWrapper>
        <HeaderNav>
          {isLoggedIn ? (
            <HeaderNavBtn onClick={() => dispatch(logoutThunk())}>
              LogOut
            </HeaderNavBtn>
          ) : (
            <>
              <AuthBtn to="/login">Login</AuthBtn>
              <AuthBtn to="/signin">Sign In</AuthBtn>
            </>
          )}
        </HeaderNav>
        {isLoggedIn && <HeaderTitle>Hello {name}</HeaderTitle>}
      </HeaderWrapper>
    </Header>
  );
};
