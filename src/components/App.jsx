// import { useEffect } from 'react';

import PropTypes from 'prop-types';

import { Route, Routes } from 'react-router-dom';

import { Main } from './TitleAndMainStyled/TitleAndMainStyled.styled';

import Layout from './Layout/Layout';
import { LoginForm } from './pages/LoginForm/LoginForm';
import { SignUpForm } from './pages/SignUpForm/SignUpForm';
import { Contacts } from './pages/Contacts/Contacts';
import { PublicRoute } from './AuthRoutes/PublicRoute';
import { PrivateRoute } from './AuthRoutes/PrivateRoute';
import { HomePage } from './pages/HomePage/HomePage';

export const App = () => {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<PublicRoute />}>
            <Route path="/" element={<HomePage />} />;
            <Route path="/login" element={<LoginForm />} />
            <Route path="/sign-up" element={<SignUpForm />} />
          </Route>

          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Route>
      </Routes>
    </Main>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.number.isRequired,
      number: PropTypes.number,
    })
  ),
  filter: PropTypes.string,
};

//  <Main>
//    <Routes>
//      <Route path="/" element={<Layout />}>
//        <Route path="" element={<PublicRoute />}>
//          <Route path="/login" element={<LoginForm />} />
//          <Route path="/sign-up" element={<SignUpForm />} />
//        </Route>

//        <Route path="/" element={<RestrictedRoute />}>
//          <Route path="/contacts" element={<Contacts />} />
//        </Route>
//      </Route>
//    </Routes>
//  </Main>;

//  <Route path="/" element={<HomePage />} />;

//  <Routes>
//    <Route path="" element={<Layout />}>
//      <Route path="/" element={<PublicRoute />}>
//        <Route path="/login" element={<LoginForm />} />
//        <Route path="/sign-up" element={<SignUpForm />} />
//      </Route>

//      <Route path="" element={<PrivateRoute />}>
//        <Route path="/contacts" element={<Contacts />} />
//      </Route>
//    </Route>
//  </Routes>;
