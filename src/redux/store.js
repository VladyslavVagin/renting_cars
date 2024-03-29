import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { carsReducer } from './carsSlice';

const persistConfig = {
  key: 'cars',
  storage,
};


export const store = configureStore({
  reducer: {
    cars:  persistReducer(persistConfig, carsReducer),
  },
  middleware: getDefaultMiddleware => 
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
});

export const persistor = persistStore(store);