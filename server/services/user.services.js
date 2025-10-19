import { UserModel } from "../models/user.models.js";

export const findUserByEmail = async (email) => {
  try {
    const user = await UserModel.findOne({ email }).select("-password");
    return user;
  } catch (error) {
    console.error("Error in findUserByEmail service:", error);
    
    throw new Error("Error fetching user from database.");
  }
};


export const findUserById = async (id) => {
  try {
    const user = await UserModel.findById(id).select("-password");
    return user;
  } catch (error) {
    console.error("Error in findUserById service:", error);
    throw new Error("Error fetching user from database.");
  }
};

