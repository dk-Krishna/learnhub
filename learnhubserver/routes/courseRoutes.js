import Express from "express";
import { getAllCourses, createCourse } from "../controllers/courseController.js";

export default Express.Router()

    .get("/getAllCourses", getAllCourses)
    .post("/createCourse", createCourse)