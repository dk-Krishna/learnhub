import { cathAsynError } from "../middlewares/cathAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { sendEmail } from "../utils/sendEmail.js";

export const contact = cathAsynError(async (req, res, next) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return next(new ErrorHandler("Please enter all fields.", 401));
  }

  const to = process.env.MY_EMAIL;
  const subject = "Contact from LearnHub";
  const text = `I am ${name} and my Email is ${email}. \n ${message}`;

  await sendEmail(to, subject, text);

  res.status(200).json({
    success: true,
    message: "Your message has been sent.",
  });
});

export const courseRequest = cathAsynError(async (req, res, next) => {
  const { name, email, course } = req.body;
  if (!name || !email || !course) {
    return next(new ErrorHandler("Please enter all fields.", 401));
  }

  const to = process.env.MY_EMAIL;
  const subject = "Requesting for a course on LearnHub";
  const text = `I am ${name} and my Email is ${email}. \n Course Details: ${course}`;

  await sendEmail(to, subject, text);

  res.status(200).json({
    success: true,
    message: "Your course request has been sent.",
  });
});

export const getDashboardStats = cathAsynError(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Your course request has been sent.",
  });
});
