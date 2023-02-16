import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <div>
        <NavLink to={'sign-up'}>Sign Up</NavLink>
        <NavLink to={'login'}>Login</NavLink>
        <NavLink to={'/'}>Home</NavLink>
      </div>
    </div>
  );
};
