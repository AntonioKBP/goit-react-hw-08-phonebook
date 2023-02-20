import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/auth-selectors';
import { useEffect } from 'react';
import { selectProfile } from 'redux/profile/profile.selectors';
import { getProfileThunk } from 'redux/profile/profile.thunk';
import { authLogoutThunk } from 'redux/auth/auth.thunk';

export const AuthNav = () => {
  const token = useSelector(selectAuthToken);
  const dispatch = useDispatch();
  const profile = useSelector(selectProfile);
  useEffect(() => {
    if (token) {
      dispatch(getProfileThunk());
    }
  }, [token, dispatch]);

  const handleLogOut = () => {
    dispatch(authLogoutThunk());
  };

  return (
    <div>
      <div>
        {!token && <p>Please Login</p>}
        {token && profile && (
          <>
            <h2>Welcome Back{profile.name}</h2>
            <button onClick={handleLogOut}>Log Out</button>
          </>
        )}
        {token ? (
          <></>
        ) : (
          <>
            <NavLink to={'sign-up'}>Sign Up</NavLink>
            <NavLink to={'login'}>Login</NavLink>
            <NavLink to={'/'}>Home</NavLink>
          </>
        )}
      </div>
    </div>
  );
};
