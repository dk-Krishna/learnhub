import { userServices } from "../services/userServices.js";
const { createUser } = userServices;

export const testingApi = (req, res, next) => {
  res.send("User api working...");
};
