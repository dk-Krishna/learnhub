import Express from "express";
import {
  getAllCourses,
  createCourse,
  getCourseLectures,
  addCourseLecture,
} from "../controllers/courseController.js";

import singleUpload from "../middlewares/multer.js";

export default Express.Router()

  .get("/getAllCourses", getAllCourses)
  .post("/createCourse", singleUpload, createCourse)
  .get("/getCourseLectures/:courseId", getCourseLectures)
  .post("/addCourseLecture/:course", singleUpload, addCourseLecture)
