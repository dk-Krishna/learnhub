import { server } from '../store';
import axios from 'axios';

import {
  allCoursesFail,
  allCoursesRequest,
  allCoursesSuccess,
} from '../reducers/courseReducer';

export const getAllCourses =
  (category = '', keyword = '') =>
  async dispatch => {
    try {
      dispatch(allCoursesRequest());
      const { data } = await axios.get(
        `${server}/course/getAllCourses?keyword=${keyword}&category=${category}`
      );

      dispatch(allCoursesSuccess(data.courses));
    } catch (error) {
      console.log('🚀 ~ login ~ error:', error);
      dispatch(allCoursesFail(error.response.data.message));
    }
  };
