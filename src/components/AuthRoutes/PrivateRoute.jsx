import { useSelector } from 'react-redux';
import { selectAuthToken } from '../../redux/auth/auth-selectors';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  const token = useSelector(selectAuthToken);
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

// export const PrivateRoute = ({
//   componnent: Component,
//   redirectTo = '/',
// }) => {
//   const token = useSelector(selectAuthToken);
//   return token ? <Navigate to={redirectTo} /> : <Component />;
// };
