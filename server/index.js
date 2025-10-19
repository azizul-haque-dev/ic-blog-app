import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDb } from "./utils/connectDb.js";

dotenv.config({
  path: "./.env"
});
const port = process.env.PORT || 8001;
connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server in running at port : ${port}`);
    });
  })
  .catch((err) => console.error(err, "MongoDB connection faild!!!"));
