import { useSelector } from 'react-redux';
import { selectAuthToken } from '../../redux/auth/auth-selectors';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  const token = useSelector(selectAuthToken);
  return token ? <Navigate to="/" /> : <Outlet />;
};
