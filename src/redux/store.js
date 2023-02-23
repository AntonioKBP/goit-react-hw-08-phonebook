// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { phoneBookReducer } from './users/users.reducer';
import { contactsInitState } from './contacts/contacts.init-state';
import { authInitState } from './auth/auth.init-state';
import { profileInitState } from './profile/profile.init-state';
import { phoneBookReducer } from './contacts/contacts.slice';
import { authReducer } from './auth/auth-slice';
import { profileReducer } from './profile/profile.slice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// import { usersReducer } from './users/users.reducer';
// import { usersInitState } from './users/users.init-state';

// const enhancer = devToolsEnhancer();

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// export const store = createStore(phoneBookReducer, initState, enhancer);

const initState = {
  contacts: contactsInitState,
  auth: authInitState,
  profile: profileInitState,
};

export const store = configureStore({
  devTools: true,
  preloadedState: initState,
  reducer: {
    contacts: phoneBookReducer,
    auth: authReducer,
    profile: profileReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// const contactsReducer = (state = [], action) => {};

// const filterReducer = (state = '', action) => {};
