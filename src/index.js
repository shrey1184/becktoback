import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

import express from "express";

const app = express();
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGOOSE_URL}/${DB_NAME}`);
    app.on("error", () => {
        console.log("Error in connecting to database", error);
        throw error;
    })
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
  } catch (error) {
    console.log("Error in connecting to database", error);
    throw error;
  }
};

connectDB();
