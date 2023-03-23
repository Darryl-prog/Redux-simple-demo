import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import inputReducer from './input';

const store = configureStore({
  reducer: {
    auth: authReducer,
    input: inputReducer,
  },
});

export default store;
