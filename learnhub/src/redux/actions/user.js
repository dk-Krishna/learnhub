import { server } from '../store';
import axios from 'axios';
import {
  loginRequest,
  loginSuccess,
  loginFail,
  loadUserRequest,
  loadUserSuccess,
  loadUserFail,
} from '../reducers/userReducer.js';

export const login = (email, password) => async dispatch => {
  try {
    dispatch(loginRequest());
    const { data } = await axios.post(
      `${server}/user/login`,
      { email, password },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    console.log('🚀 ~ login ~ data:', data);
    dispatch(loginSuccess(data));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(loginFail(error.response.data.message));
  }
};

export const loadUser = () => async dispatch => {
  try {
    dispatch(loadUserRequest());
    const { data } = await axios.get(`${server}/user/getMyProfile`, {
      withCredentials: true,
    });

    console.log('🚀 ~ login ~ data:', data.user);
    dispatch(loadUserSuccess(data.user));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(loadUserFail(error.response.data.message));
  }
};
