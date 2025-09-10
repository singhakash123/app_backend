import dotenv from "dotenv";
import { db_connected } from "./db/index.js";
import { app } from "./app.js";

// 🔹 Load environment variables
dotenv.config({
  path: "./.env"
});

// 🔹 Port config
const port = process.env.PORT || 3000;

app.on("error", (error) => {
  console.error("❌ Application-level error:", error);
  process.exit(1); // optional: exit process on critical failure
});


// 🔹 Start Server after DB Connection
db_connected()
  .then(() => {
    app.listen(port, () => {
      console.log(`✅ Server is running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1); // stop app if DB connection fails
  });



  /*
  (async () => {
  try {
    await connectDb();

    const server = app.listen(port, () => {
      console.log(`🚀 Server is running at http://localhost:${port}`);
    });

    server.on("error", (error) => {
      console.error("❌ Server startup failed:", error.message);
      process.exit(1);
    });

  } catch (error) {
    console.error("❌ Startup failed:", error.message);
    process.exit(1);
  }
})();*/