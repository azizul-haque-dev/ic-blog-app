import argon2 from "argon2";

export const validatePassword = async (hashedPassword, plainPassword) => {
  try {
    return await argon2.verify(hashedPassword, plainPassword);
  } catch (error) {
    
    console.error("Error verifying password:", error);
    
    return false;
  }
};
