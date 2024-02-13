import { cathAsynError } from "../middlewares/cathAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import cloudinary from "cloudinary";
import { courseServices } from "../services/courseServices.js";
const { findAllCourses, createACourse, findCourse } = courseServices;
import getDataUri from "../utils/dataUri.js";

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

  const file = req.file;
  const fileUri = getDataUri(file);

  const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);

  const newCourse = await createACourse({
    title,
    description,
    category,
    createdBy,
    poster: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
  });

  return res.status(201).json({
    success: true,
    newCourse,
    message: "New course created successfully. You can add lectures now.",
  });
});

export const getCourseLectures = cathAsynError(async (req, res, next) => {
  const course = await findCourse(req.params.courseId);
  if (!course) {
    return next(new ErrorHandler("Course not found.", 404));
  }

  course.views += 1;
  await course.save();

  return res.status(200).json({
    success: true,
    lectures: course.lectures,
  });
});

export const addCourseLecture = cathAsynError(async (req, res, next) => {
  const { title, description } = req.body;

  // const file = req.file;

  const course = await findCourse(req.params.courseId);
  if (!course) {
    return next(new ErrorHandler("Course not found.", 404));
  }

  // Upload files on cloudinary

  course.lectures.push({
    title,
    description,
    video: {
      public_id: "temp",
      url: "url",
    },
  });

  course.numOfVideos = course.lectures.length;

  await course.save();

  return res.status(200).json({
    success: true,
    message: "Lecture added successfully.",
  });
});
