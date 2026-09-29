import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connextDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGOOSE_URL}/${DB_NAME}`);
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Error in connecting to database", error);
        process.exit(1);    
    }
}
export default connextDB;