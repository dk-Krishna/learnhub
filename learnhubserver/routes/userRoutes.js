import Express from "express";
import {
  signup,
  login,
  logout,
  getMyProfile,
  changePassword,
  updateProfile,
  updateProfilePicture,
  forgetPassword,
  resetPassword,
  addToPlaylist,
  removeFromPlaylist,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

export default Express.Router()

  .post("/signup", signup)
  .post("/login", login)
  .get("/logout", logout)

  .get("/getMyProfile", isAuthenticated, getMyProfile)
  .put("/changePassword", isAuthenticated, changePassword)
  .put("/updateProfile", isAuthenticated, updateProfile)
  .put("/updateProfilePicture", isAuthenticated, updateProfilePicture) // remains

  .post("/forgetPassword", forgetPassword)
  .put("/resetPassword/:token", resetPassword)

  // PLAYLIST FUNCTIONALITIES
  .post("/addToPlaylist", isAuthenticated, addToPlaylist)
  .delete("/removeFromPlaylist", isAuthenticated, removeFromPlaylist);
