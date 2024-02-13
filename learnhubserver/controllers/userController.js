import { cathAsynError } from "../middlewares/cathAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import crypto from "crypto";
import { userServices } from "../services/userServices.js";
import { sendToken } from "../utils/sendToken.js";
import { sendEmail } from "../utils/sendEmail.js";
const { createUser, checkUserExists, findUser, checkUserExistsWithResetToken } =
  userServices;

export const signup = cathAsynError(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(new ErrorHandler("Please enter all fields", 400));
  }

  const user = await checkUserExists(email);
  if (user) {
    return next(
      new ErrorHandler("User already exists with this email address", 400)
    );
  }

  // const file = req.file;
  // Upload file on cloudinary

  const newUser = await createUser({
    name,
    email,
    password,
    avatar: {
      public_id: "temp_id",
      url: "temp_url",
    },
  });

  sendToken(res, newUser, "Registered Successfully.", 200);
});

export const login = cathAsynError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please enter all fields", 400));
  }

  const user = await checkUserExists(email);
  if (!user) {
    return next(new ErrorHandler("User dosen't exist.", 401));
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return next(new ErrorHandler("Incorrect email or password.", 401));
  }

  sendToken(res, user, `${user.name}, Logged In Successfully.`, 200);
});

export const logout = cathAsynError(async (req, res, next) => {
  return res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Logged Out Successfully.",
    });
});

export const getMyProfile = cathAsynError(async (req, res, next) => {
  const user = await findUser(req.userId);
  if (!user) {
    return next(new ErrorHandler("User dosen't exist.", 401));
  }

  return res.status(200).json({
    success: true,
    user,
  });
});

export const changePassword = cathAsynError(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {
    return next(new ErrorHandler("Please enter all fields", 401));
  }

  const user = await findUser(req.userId);
  if (!user) {
    return next(new ErrorHandler("Login first...", 401));
  }

  const isMatch = await user.comparePassword(oldPassword);
  if (!isMatch) {
    return next(new ErrorHandler("Incorrect old password.", 401));
  }

  user.password = newPassword;
  user.save();

  return res.status(200).json({
    success: true,
    message: "Password changed successfully.",
  });
});

export const updateProfile = cathAsynError(async (req, res, next) => {
  const { name, email } = req.body;

  const user = await findUser(req.userId);
  if (!user) {
    return next(new ErrorHandler("Login first...", 401));
  }

  if (name) user.name = name;
  if (email) user.email = email;

  user.save();

  return res.status(200).json({
    success: true,
    message: "Profile updated successfully.",
    user,
  });
});

export const updateProfilePicture = cathAsynError(async (req, res, next) => {
  // CLOUDINARY

  user.save();

  return res.status(200).json({
    success: true,
    message: "Profile picture updated successfully.",
  });
});

export const forgetPassword = cathAsynError(async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return next(
      new ErrorHandler("Please enter email to forget password.", 401)
    );
  }

  const user = await checkUserExists(email);
  if (!user) {
    return next(new ErrorHandler("User dosen't exist.", 401));
  }

  const resetToken = await user.getResetToken();
  await user.save();

  // send token via email
  const url = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;
  const message = `Click on the link to reset your password. ${url}. If you have not requested please ignore.`;
  await sendEmail(user.email, "LearnHub Reset Password", message);

  return res.status(200).json({
    success: true,
    message: `Reset token has been sent to ${user.email}`,
  });
});

export const resetPassword = cathAsynError(async (req, res, next) => {
  const { token } = req.params;

  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const user = await checkUserExistsWithResetToken(resetPasswordToken);
  if (!user) {
    return next(new ErrorHandler("Token is invalid or has been expired.", 401));
  }

  user.password = req.body.newPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();

  return res.status(200).json({
    success: true,
    message: "Profile password changed successfully.",
  });
});
