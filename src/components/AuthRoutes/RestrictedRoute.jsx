import { useSelector } from 'react-redux';
import { selectAuthToken } from '../../redux/auth/auth-selectors';
import { Navigate, Outlet } from 'react-router-dom';

export const RestrictedRoute = () => {
  const token = useSelector(selectAuthToken);
  return token ? <Outlet /> : <Navigate to="/login" />;
};

// export const RestrictedRoute = ({
//   componnent: Component,
//   redirectTo = '/',
// }) => {
//   const token = useSelector(selectAuthToken);
//   return token ? <Navigate to={redirectTo} /> : <Component />;
// };
