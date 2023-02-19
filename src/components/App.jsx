// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/auth-selectors';
// import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';
import {
  addContactsThunk,
  getContactsThunk,
  deleteContactsThunk,
} from 'redux/users/users.thunk';

import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import // userAddAction,
// userDeleteAction,
// contactsFilterAction,
'redux/users/users.slice';

import {
  selectFilterContacts,
  selectIsLoading,
  selectFilteredContacts,
} from 'redux/users/users.selectors';

// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';

// import { AppBar } from './AppBar/AppBar';

import {
  Main,
  MainTitle,
  SecondartTitle,
  LoadingTitle,
} from './TitleAndMainStyled/TitleAndMainStyled.styled';
import Layout from './Layout/Layout';
import { LoginForm } from './pages/LoginForm/LoginForm';
import { SignUpForm } from './pages/SignUpForm/SignUpForm';

export const App = () => {
  // const dispatch = useDispatch();
  // const filter = useSelector(selectFilterContacts);
  // const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  // useEffect(() => {
  //   dispatch(getContactsThunk());
  // }, [dispatch]);

  // const addUser = data => {
  //   const findExistsName = contacts.some(contact => contact.name === data.name);
  //   if (findExistsName) {
  //     Notify.warning(`${data.name} is already in contacts`);
  //     return;
  //   } else {
  //     const newAbonent = {

  //       ...data,
  //     };

  //     dispatch(addContactsThunk(newAbonent));

  //   }
  // };

  // const handleSearch = e => {
  //   dispatch(contactsFilterAction(e.target.value));
  // };
  // const handleDeleteContact = contactId => {

  //   dispatch(deleteContactsThunk(contactId));

  // };

  // const filteredContacts = useMemo(() => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // }, [contacts, filter]);

  // const contactsLenght = contacts.length;
  // const newUsers = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <Main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>
        {/* <MainTitle>PhoneBook</MainTitle> */}

        {/* <ContactForm onSubmit={addUser} />

        <SecondartTitle>Contacts</SecondartTitle>
        <Filter filterValue={filter} onSearch={handleSearch} />
        {isLoading && <LoadingTitle>Processing your request...</LoadingTitle>}
        {contactsLenght > 0 && (
          <ContactList users={contacts} onDeleteContact={handleDeleteContact} />
        )} */}
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
