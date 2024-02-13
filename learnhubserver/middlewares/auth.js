import jwt from "jsonwebtoken";
import { cathAsynError } from "./cathAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { userServices } from "../services/userServices.js";
const { findUser } = userServices;

export const isAuthenticated = cathAsynError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return next(new ErrorHandler("User not logged in..", 401));

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await findUser(decoded._id);
  req.userId = decoded._id;

  next();
});
