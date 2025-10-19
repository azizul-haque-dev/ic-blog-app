import mongoose from "mongoose";
export async function connectDb() {
  try {
    const res = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error, "db connection error");
    process.exit(1);
  }
}
