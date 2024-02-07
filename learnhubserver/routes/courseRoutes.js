import Express from "express";
import { testingApi } from "../controllers/courseController.js";

export default Express.Router()
    .get("/", testingApi);