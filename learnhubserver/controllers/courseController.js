import { cathAsynError } from "../middlewares/cathAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";

import { courseServices } from "../services/courseServices.js";
const { findAllCourses, createACourse } = courseServices;

export const getAllCourses = cathAsynError(async (req, res, next) => {
  const courses = await findAllCourses();

  if (!courses || courses.length === 0) {
    return next(new ErrorHandler("Courses are empty", 200));
  }

  return res.status(200).json({
    success: true,
    courses,
  });
});

export const createCourse = cathAsynError(async (req, res, next) => {
  const { title, description, category, createdBy } = req.body;

  if (!title || !description || !category || !createdBy) {
    return next(new ErrorHandler("Please enter all fields", 400));
  }

  // const file = req.file;

  const newCourse = await createACourse({
    title,
    description,
    category,
    createdBy,
    poster: {
      public_id: "temp",
      url: "temp",
    },
  });

  return res.status(201).json({
    success: true,
    newCourse,
    message: "New course created successfully. You can add lectures now.",
  });
});
