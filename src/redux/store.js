// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { phoneBookReducer } from './users/users.reducer';
import { usersInitState } from './users/users.init-state';
import { authInitState } from './auth/auth.init-state';
import { phoneBookReducer } from './users/users.slice';
import { authReducer } from './auth/auth-slice';
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
  contacts: usersInitState,
  auth: authInitState,
};

export const store = configureStore({
  devTools: true,
  preloadedState: initState,
  reducer: {
    contacts: phoneBookReducer,
    auth: authReducer,
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
