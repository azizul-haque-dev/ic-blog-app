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



// update user by id
export const updateUserById = async (id, updateData) => { 
  try {
    const user = await UserModel.findByIdAndUpdate(id, updateData, {new:true}).select("-password -emailVerificationToken -verificationTokenExpireAt ")
    return user;

  } catch (error) {
    console.error("Error in updateUserById service:", error);
  }
}


export const checkEmailExists = async (email) =>  {
  try {
    const user = await UserModel.findOne({email, _id:{$ne: excludeUserId}})
    return !!user;
  } catch (error) {
    console.error("Error in checkEmailExists service:", error);
  }
}