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

/*
⚡ Real-World Usage

throw error
Jab tu chaahta hai ki caller decide kare error ke baad kya karna hai
Reusable functions (e.g. connectDb) → yaha throw karna better hai

process.exit(1)
Jab tu startup stage me ho aur error ka matlab hai app ko band karna hi hoga
Production startup (DB connect fail, port bind fail, env missing)

*/