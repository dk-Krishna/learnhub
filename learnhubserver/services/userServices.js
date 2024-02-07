import User from "../models/User.js";

export const userServices = {
  createUser: async (insertObj) => {
    return await User.create(insertObj);
  },
};
