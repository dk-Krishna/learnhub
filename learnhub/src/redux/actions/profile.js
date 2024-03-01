import { server } from '../store';
import axios from 'axios';
import {
  changePasswordFail,
  changePasswordRequest,
  changePasswordSuccess,
  updateProfileFail,
  updateProfilePictureFail,
  updateProfilePictureRequest,
  updateProfilePictureSuccess,
  updateProfileRequest,
  updateProfileSuccess,
} from '../reducers/profileReducer.js';

export const updateProfile = (name, email) => async dispatch => {
  try {
    dispatch(updateProfileRequest());
    const { data } = await axios.put(
      `${server}/user/updateProfile`,
      { name, email },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch(updateProfileSuccess(data.message));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(updateProfileFail(error.response.data.message));
  }
};

export const changePassword = (oldPassword, newPassword) => async dispatch => {
  try {
    dispatch(changePasswordRequest());
    const { data } = await axios.put(
      `${server}/user/updateProfile`,
      { oldPassword, newPassword },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch(changePasswordSuccess(data.message));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(changePasswordFail(error.response.data.message));
  }
};

export const updateProfilePicture = formdata => async dispatch => {
  try {
    dispatch(updateProfilePictureRequest());
    const { data } = await axios.put(`${server}/user/updateProfile`, formdata, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
      withCredentials: true,
    });

    dispatch(updateProfilePictureSuccess(data.message));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(updateProfilePictureFail(error.response.data.message));
  }
};
