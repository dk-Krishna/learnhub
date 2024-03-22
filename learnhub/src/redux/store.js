import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer.js';
import profileReducer from './reducers/profileReducer.js';
import courseReducer from './reducers/courseReducer.js';
import subscriptionReducer from './reducers/subscriptionReducer.js';

export const server = 'https://learnhub-server-id4k.onrender.com/api/v1';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    subscription: subscriptionReducer,
  },
});

export default store;
