import Express from "express";
import { testingApi } from "../controllers/userController.js";

export default Express.Router()

    .get("/", testingApi);
