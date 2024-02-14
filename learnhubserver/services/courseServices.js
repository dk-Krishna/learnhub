import Course from "../models/Course.js";

export const courseServices = {
  findAllCourses: async () => {
    return await Course.find().select("-lectures");
  },

  createACourse: async (insertObj) => {
    return await Course.create(insertObj);
  },

  findCourse: async (courseId) => {
    return await Course.findById(courseId);
  },

  findAndDelete: async (courseId) => {
    return await Course.findByIdAndDelete(courseId);
  },
};
