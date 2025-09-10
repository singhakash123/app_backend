import mongoose from "mongoose";
import { db_name } from "../constant.js";

export const db_connected = async () => {
  try {
    const connectionUri = `${process.env.MONGODB_URI}/${db_name}`;

    const connection = await mongoose.connect(connectionUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ Database connected: ${connection.connection.host}`);
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1); // Exit process if DB fails
  }
};
