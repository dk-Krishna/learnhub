import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer.js';
import profileReducer from './reducers/profileReducer.js';

export const server = 'https://learnhub-server-id4k.onrender.com/api/v1';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
  },
});

export default store;
