import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/auth-selectors';

export const AuthNav = () => {
  const token = useSelector(selectAuthToken);
  console.log('Token Value is', token);
  return (
    <div>
      <div>
        {token ? (
          <>
            <h2>Hello putName</h2>
          </>
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
