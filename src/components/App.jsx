// import { useEffect } from 'react';

import PropTypes from 'prop-types';

import { Route, Routes } from 'react-router-dom';

import { Main } from './TitleAndMainStyled/TitleAndMainStyled.styled';

import Layout from './Layout/Layout';
import { LoginForm } from './pages/LoginForm/LoginForm';
import { SignUpForm } from './pages/SignUpForm/SignUpForm';
import { Contacts } from './pages/Contacts/Contacts';
import { PublicRoute } from './AuthRoutes/PublicRoute';
import { RestrictedRoute } from './AuthRoutes/RestrictedRoute';

export const App = () => {
  return (
    <Main>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Layout />}></Route> */}
          <Route path="" element={<PublicRoute />}>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/sign-up" element={<SignUpForm />} />
          </Route>

          <Route path="/" element={<RestrictedRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Layout>
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
