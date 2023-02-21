// import { useEffect } from 'react';

import PropTypes from 'prop-types';

import { Route, Routes } from 'react-router-dom';

import { Main } from './TitleAndMainStyled/TitleAndMainStyled.styled';

import Layout from './Layout/Layout';
import { LoginForm } from './pages/LoginForm/LoginForm';
import { SignUpForm } from './pages/SignUpForm/SignUpForm';
import { Contacts } from './pages/Contacts/Contacts';

export const App = () => {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/contacts" element={<Contacts />} />
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
