import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './CouterSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

let perrsistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

let rootReducer = combineReducers({
  counter: counterReducer,
});

const persitedReducer = persistReducer(perrsistConfig, rootReducer);

export const store = configureStore({
  reducer: persitedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
