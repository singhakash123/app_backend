## ---------------------------------------------- PROJECT SETUP (PART 1) ---------------------------------------------------------------------

// npm init -y
--Output: ek ready-made package.json file aa jata hai project root me.

## 👉 Apne Node.js project me dependencies (libraries) ko manage karne ke liye package.json banana

For example:
Tum npm init -y chalate ho → package.json ban jata hai.
Ab jab tum npm install express karte ho → woh dependency automatically package.json me save ho jati hai.
Isse fayda:
Dusra developer sirf npm install chala ke tumhara pura project setup kar sakta hai.

## npm i -D <package name > // this command use to install dev depencies

## npm i <package name > // this command use to install dependecies

## git init // to intilize git :

          git init
          git add .
          git commit -m "first commit"
          git branch -M main
          git remote add origin https://github.com/singhakash123/chai_backend.git
          git push -u origin main

// note : git track only file not folder , to track empty folder use .gitkeep

## How to setup a professional backend project

project-root/
├── .gitignore # Ignore node_modules, logs, etc.
├──\_\_ REDME.md
├── .env # Environment variables
├── .env.sample # Sample env for developers
├── .prettierrc # Code formatter config
├── .prettierignore # Ignore files for prettier
│
├── public/ # Public assets or uploads
├── temp/ # Temporary files (keep with .gitkeep)
│
└── src/
├── server.js # Entry point (start server, connect DB)
├── app.js # Main express app (routes, middleware load)
├── constant.js

├── db /
| └── index.js # Database connection logic

├── config/ # 💡 All configs here
│ └── cloudinary.js # Cloudinary config
│ └── logger.js # Winston or custom logger
│ └── rateLimiter.js # Security middlewares (rate limit etc)

    ├── models/                 # Mongoose schema definitions
    │   └── user.model.js
    │   └── todo.model.js

    ├── controllers/           # Request handlers / business logic
    │   └── auth.controller.js
    │   └── user.controller.js

    ├── routes/                # All routes
    │   └── auth.routes.js
    │   └── user.routes.js
    │   └── index.js           # Route aggregator

    ├── middlewares/          # Custom middlewares
    │   └── auth.middleware.js
    │   └── error.middleware.js
    │   └── upload.middleware.js
    │   └── authorizeRoles.js

    ├── services/             # 💡 Business-level services (optional)
    │   └── user.service.js    # Logic abstracted from controllers

    ├── utils/                # Utility functions
    │   └── ApiError.js
    │   └── ApiResponse.js
    │   └── asyncHandler.js
    │   └── sendEmail.js

    ├── constants/            # Centralized enums / roles / messages
    │   └── roles.js
    │   └── messages.js

    ├── validators/           # 🛡 Joi or express-validator schemas
    │   └── user.validator.js
    │
    ├── docs/                 # Swagger/OpenAPI docs if any
    │   └── swagger.yaml
    │
    └── tests/                # Jest or supertest-based tests
        └── auth.test.js

## ✅ Why this structure is better?

Layer Purpose
config/ All external service configs in one place
services/ Separation of concerns: logic outside controllers
validators/ Input validation separated from business logic
constants/ Easy update and readability for enums, role names, status messages etc.
docs/ Swagger or Postman specs, centralised docs
temp/ Placeholder for temporary data (keep clean with .gitkeep)

## Use .gitkeep to preserve empty directories in Git.

## Configure Scripts & Imports

-- Use nodemon for auto-restarting during development ("dev": "nodemon src/index.js").
-- Implement ES modules "module" across the project.

## Initial Git Workflow

-- After setup, commit and push remote origin.

## Verify files on GitHub to ensure clean version control practices.

## ---------------------------------------------------- How to connect database (part2) -----------------------------------------

## note : while importing file dont forget to use .js at the end

## 📦 Tools & Libraries

-- mongoose – ODM to connect Node.js with MongoDB.
-- dotenv – For managing environment variables.

```
-- conn## dotenv config :

## 🧠 What it Means:

✅ -r dotenv/config
This tells Node.js to require the dotenv/config module before anything else runs.
It automatically reads your .env file and loads the variables (like MONGO_URI, PORT, etc.) into process.env.

✅ --exec node
It tells nodemon to execute your script using Node.js after applying the required dotenv/config.
Without --exec node, nodemon would treat your script as a normal file, not knowing to use Node.js.exction string : mongodb+srv://Akash:<db_password>@cluster0.o5qcxhc.mongodb.net/

✅ Full Breakdown:
                      ## -- nodemon -r dotenv/config --exec node src/index.js
                      ## nodemon: watches for file changes
                      ## -r dotenv/config: preloads environment variables
                      ## --exec node: runs your app with Node.js
                      ## src/index.js: your app’s entry point

🔥 Why This is Powerful:

You can skip writing:
import dotenv from 'dotenv'
dotenv.config()

Just write:
console.log(process.env.PORT)
And it will work ✨ if your .env file is loaded via -r dotenv/config.

✅ Professional tip:
Dono valid hain, but generally dotenv.config() in code use karna better hai, kyunki woh VS Code, Docker, CI/CD pipelines sab me predictable rehta hai.
-r dotenv/config mostly quick shortcuts ya demo projects me use hota hai.


```

## process.exit :

```
## process.exit() is a Node.js global method used to immediately terminate the process running your application. Here's how it works and why it's used:


            0 → Success (default if not passed)
            1 or higher → Failure/Error (used when you want to indicate something went wrong)
```

## mongoose.connect use to connect database

    — mongoose.connect is the function used to connect your Node.js app to a MongoDB database using the Mongoose library. Let’s break it down step-by-step like a real expert 🔥

    -- parameters of mongoose.connect

`mongoose.connect(<connection_string>, <options_object>) `

```
`1 : connection String :
🧩 MongoDB Atlas Setup & Connection
1️⃣ Create a Cluster
Go to MongoDB Atlas.

Choose the Free Tier (Shared Cluster).

2️⃣ Create a Database User
Navigate to Database Access.

Click + Add New Database User.

Set username & password.

Choose Role: Read and Write to any database.

3️⃣ Configure Network Access
Go to Network Access → + Add IP Address.

For local development:

✅ Use "Add My Current IP"

❌ Avoid using "Allow access from anywhere" (0.0.0.0/0) in production.

⚠️ Never choose 0.0.0.0/0 in production
This exposes your database to the entire internet and creates a severe security risk.

```

// 2nd way also to get connection string

## step to get connection string professinal :

         1 Create a Project
                           Left sidebar → Projects → New Project.
                            Project ka naam do (e.g., BackendApp).
                            Next → Add members (optional) → Create Project.

        2 Build a Cluster
                           Inside project → Build a Database.
                           Choose Free (Shared) tier (for learning/dev) or dedicated cluster (for production).
                           Choose cloud provider (AWS/Azure/GCP) and region close to your users.
                           Click Create Cluster.
                                     ⚠️ Free cluster create hone me 1–3 min lagta hai.

        3 Add Database User
                           Cluster → Database Access → Add New Database User.
                           Username & password set karo (production me strong password ya SCRAM + environment variables use karo).
                           Role: Atlas Admin (dev ke liye) ya specific (production ke liye limited roles).

                                 Save user.

        4 Network Access (IP Whitelist)
                           Cluster → Network Access → Add IP Address.
                                   Options:
                                  0.0.0.0/0 → allows from anywhere (useful for dev but not safe for prod).
                                Specific server IP → safest for production.

Save.

//
`

## 2. options (optional but recommended)

useNewUrlParser: true – for the new MongoDB URL parser
useUnifiedTopology: true – enables modern connection engine
These options prevent warnings and improve compatibility.

```
## what mongoose.connect return

`const connectionInstance = await mongoose.connect(...)`
connectionInstance contains the actual connection info, including:
connectionInstance.connection.host
connectionInstance.connection.port
connectionInstance.connection.name

## 🧪 Best Practice

-- Use a separate DB_NAME constant in a constants.js file.
-- Always use try-catch with mongoose.connect.
-- Use .env to protect your DB URI and avoid hardcoding credentials.
-- Handle connection errors with process.exit(1) for immediate visibility.

```

:: NOTE : when async operation get compelete that time it return promise
When called a database , it returns a Promise — either:
Resolved → then() block runs.
Rejected → catch() block runs.

## ---------------------- Express Middleware , Custom Api Response and Error , asyncandler (PART 3) ---------------------------------

## ------------------------------- express middleware ---------------------------

✅ Built-in Express middlewares
These come with Express itself:

```
express.json([options])
Parses incoming JSON requests.
Example: app.use(express.json({ limit: "10kb" }));

express.urlencoded([options])
Parses URL-encoded requests (like form submissions).
Example: app.use(express.urlencoded({ extended: true }));

express.static(root, [options])
Serves static files like HTML, CSS, JS, images.
Example: app.use(express.static("public"));
```

✅ Popular Third-Party Middlewares
These are installed separately and widely used:

```
🔒 Security
helmet → Adds security headers.
import helmet from "helmet";
app.use(helmet());



✅ 1. 📈 Rate Limiting

const limiter = rateLimit({
windowMs: 15 _ 60 _ 1000, // 15 mins
max: 100,
message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

🔍 What it does:
Prevents DDoS attacks or abuse by limiting requests from a single IP.
windowMs: 15 minutes time window.
max: Only 100 requests allowed in 15 mins.
If limit is crossed, user gets a 429 error with the message.

✅ Use Case:
Protect your server from brute-force attacks or overloading.
Important for public APIs and login/signup endpoints.

✅ 2. 🔐 Security Middleware
✅ cors()
app.use(cors({
credentials: true,
origin: process.env.ORIGIN || "http://localhost:3000",
}));

🔍 What it does:
Allows your frontend (React, etc.) to access the backend, even if they are on different domains.
credentials: true: Sends cookies with requests.
origin: Restricts access to your allowed frontend origin.

✅ Use Case:
Required for all client-server setups where frontend and backend are separate (CORS policy protection).

✅ helmet()
🔍 What it does:
Sets secure HTTP headers automatically:
Prevents XSS, clickjacking, content sniffing, etc.
Example: disables X-Powered-By header.
Improves baseline security instantly.

✅ Use Case:
Used in almost every production Express app for baseline web security.

✅ 3. 📦 Body Parsers
app.use(express.json({ limit }));

🔍 What it does:
Parses incoming JSON payloads (Content-Type: application/json) into req.body.
limit: Optional — restricts how large the request body can be (prevents abuse with large payloads)

✅ urlencoded()
app.use(urlencoded({ limit, extended: true }));
🔍 What it does:
Parses form data (x-www-form-urlencoded) into req.body.
extended: true: Allows rich data like arrays and nested objects.
✅ Use Case:
Accepts input from HTML forms, etc.

✅ 4. 🍪 Cookie Parser
🔍 What it does:
Parses cookies from incoming requests and attaches them to req.cookies.

✅ Use Case:
Essential for authentication, especially when using JWT in cookies, CSRF tokens, or session-based auth

✅ 5. 🪵 Logger
app.use(morgan("dev"));

🔍 What it does:
Logs incoming requests: method, URL, status, response time, etc.
dev format gives colored logs during development.

✅ Use Case:
Great for debugging, monitoring request activity, and error tracing.

✅ 6. 📂 Static File Serving

app.use(express.static("public"));
🔍 What it does:
Serves static files like:
Uploaded images
CSS/JS files
Documentation
PDFs, etc.

Exposes /public directory over HTTP.

✅ Use Case:
Hosting images or files uploaded by users.

Serving frontend assets if you're not using a separate frontend server.

```

--------------------------------------- Api Error ----------------------------------------------

## ApiError

```
class ApiError extends Error {
constructor (
stattusCode ,
message = "something went wrong " ,
error = [] ,
stack = ""

){
super(message) ;
this.statusCode = statusCode ;
this.message = message ;
this.success = false ;
this.error = error ;

if(stack){
this.stack = stack ;

}else{
Error.captureStackTrace(this , this.constructor)
}
🔍 What it does:
this: The error object you're constructing.
this.constructor: Refers to the custom error class, so the stack trace omits the constructor function from the trace.
}
}
```

```
 constructor(statusCode, message = "something went wrong", error = [], stack = "") {
This is the constructor method that runs when a new ApiError is created.
statusCode: HTTP status code like 400, 500, etc.
message: Custom message for the error. Default is "something went wrong".
error: Can be used to send extra error details (like from a Joi validation or database).
stack: Optional. If passed, you’re manually assigning a stack trace; otherwise it'll auto-generate one.
```

.

```
🔸 super(message);
Calls the parent class (Error) constructor with the message.
This sets the message property and ensures the Error class logic (like stack trace creation) is initialized properly.

this.error = error;
If extra info is passed (e.g., validation failure reasons), it will be stored in this array/object.

 if (stack) { this.stack = stack; }
If a custom stack trace is provided, use it instead of generating a new one.

🔸 else { Error.captureStackTrace(this); }
If no custom stack trace is given, generate one.
Error.captureStackTrace(this) attaches the line number and file path where the error was thrown (super helpful during debugging).
```

```

```

throw new ApiError(400, "Invalid input", ["Email is required"]);
This will create an error like:
{
"statusCode": 400,
"message": "Invalid input",
"success": false,
"error": ["Email is required"],
"stack": "..." // auto-generated
}

## ------------------------------------------------------------------- Api Response -------------------------------------

## ApiResponse

class ApiResponse{
constrictor(
statusCode ,
data = null ,
message = "success" ,

       ){
           this.statuscode = statuscode ;
           this.data = data ;
           this.success = statuscode < 400 ;
           this.message = message
       }

}
new ApiResponse(200 , data , )

## -------------------------------------------------------- AsyncHandler ---------------------------------------------------------

## AsyncHandler :

    export const asyncHandler = (requestHandler) => {
             return (req , res , next) => {
                 Promise.resolve(requestHandler(req , res , next)). catch(next)
             }
    }

🔍 Explanation Line-by-Line:
✅ export const asyncHandler = (requestHandler) => {
This defines and exports a higher-order function called asyncHandler.
requestHandler is expected to be an asynchronous function (like an Express controller).
This is done so you can wrap all your route/controller logic with this handler to catch any errors automatically.

✅ return (req, res, next) => {
Returns a new middleware function that Express understands (it receives req, res, next).
This function is what gets executed when a route is hit.
You can now use asyncHandler(controllerFn) instead of writing try/catch in every controller.

✅ Promise.resolve(requestHandler(req, res, next))
The requestHandler function is called with Express's req, res, and next.
It might return a promise (because it's async).
Wrapping it in Promise.resolve() ensures that even if it's not async, it will still be handled like a Promise.
This line attempts to execute the handler.

✅ .catch(next);
If the promise (i.e. requestHandler) throws any error, it will be caught here.
The error is passed to Express's next() function → which takes it to the global error handler middleware.
This eliminates the need to write try/catch in every controller.

💡 Why is this helpful?
Without this wrapper, you’d write this in every controller:
try {
// async code
} catch (err) {
next(err);
}

## -------------------------------------------- hooks pre and post and other hook ------------------------------------------------------

🔑 What are Hooks in Mongoose?
Hooks (middleware) are functions that run automatically before or after certain Mongoose actions (like save, update, delete, etc.).

🧩 Types of Hooks :

<!-- Document Middleware → Works on documents (instances). -->

pre('save') → Runs before saving a document.
post('save') → Runs after saving a document.
pre('validate'), post('validate')

<!-- Query Middleware → Works on queries (like find, updateOne). -->

pre('find'), post('find')
pre('findOne'), post('findOne')
pre('updateOne'), post('updateOne')

<!-- Aggregate Middleware → Runs on aggregation pipeline. -->

pre('aggregate'), post('aggregate')

Model Middleware → Special, works at model level.

🛠 Example (Most Common)
userSchema.pre('save', async function(next) {
// Hash password before saving
if (this.isModified('password')) {
this.password = await bcrypt.hash(this.password, 10);
}
next();
});

userSchema.post('save', function(doc, next) {
console.log("New user created:", doc.email);
next();
});

<!-- ✅ Why Important? -->

Pre hooks → Best for validations, hashing passwords, cleaning data before saving.
Post hooks → Logging, sending emails/notifications after saving.
Prevents code duplication by centralizing logic.

👉 In short:
Mongoose hooks = lifecycle functions (before/after DB ops) → used for security, automation, logging, and consistency.

## -------------------------------------------- bcrypt js -----------------------------------------------------------------------

🔑 What is bcryptjs?
A library to hash passwords in Node.js.
Hashing = one-way encryption (cannot get original password back).
Used for storing passwords securely in DB.

🧩 Important Things to Know

<!-- Hashing a password -->

const bcrypt = require("bcryptjs");
const hash = await bcrypt.hash("mypassword", 10);
// "10" = salt rounds (strength)

<!-- Comparing password -->

const isMatch = await bcrypt.compare("mypassword", hash);
// returns true/false

## ------------------------------------ jwt sign explation and jwt verify ------------------------------------------------------

```
JWT = compact, signed token → used for authentication & authorization.
jwt.sign() → create token
jwt.verify() → validate token

```

```
<!-- ✅ Why JWT Important? -->
Stateless (server ko session store karna nahi padta).
Secure (signature ensure karta hai token tamper-proof hai).
Can include roles/permissions (RBAC).
```

🧩 Structure of JWT
JWT 3 parts me hota hai (dot . se alag):

```
header.payload.signature
Header → Algo + type (e.g. { alg: "HS256", typ: "JWT" })
Payload → Data (e.g. { id: 123, role: "user" })
Signature → Server secret se signed (tamper-proof).

⚙️ How JWT Works (Flow)

Login → User login karta hai.
Server → JWT banata hai (with secret key).
Client → Token ko save karta hai (localStorage/cookie).
Next Requests → Client har request ke saath Authorization: Bearer <token> bhejta hai.
Server Verify → Server JWT verify karta hai, user ko access deta hai.
🛠 Common Functions
import jwt from "jsonwebtoken";

// Sign (create token)
const token = jwt.sign({ id: user._id }, "SECRET_KEY", { expiresIn: "1h" });

// Verify (check token)
const decoded = jwt.verify(token, "SECRET_KEY");


```

verifyAccessToken → finds the user and sets req.user
-- This verifyAccessToken middleware is used to protect private routes — so that only logged-in users can access them.

## This middleware decodes the JWT and finds the user from DB and attaches it to req.user

## export const verifyAccessToken = asyncHandler(async (req, res, next) => {

-- 1️⃣ Get token from cookie or Authorization header
const token =
req.cookies?.accessToken ||
req.headers.authorization?.replace("Bearer ", "");

if (!token) {
throw new ApiError(401, "Access Token is missing or expired");
}

// 2️⃣ Verify token
const decoded = jwt.verify(token, process.env.ACCESSTOKEN_SECRETKEY);

// 3️⃣ Attach user to req
const user = await User.findById(decoded.\_id);
if (!user) {
throw new ApiError(401, "User not found with this token");
}

req.user = user;
next(); // continue to controller
});

## ✅ Code Breakdown — verifyAccessToken

## export const verifyAccessToken = asyncHandler(async (req, res, next) => {

           🔹 verifyAccessToken is a middleware:
               Used to protect routes (like GET /profile, POST /todos etc.)
               Runs before the controller function.
                Wrap with asyncHandler() to automatically catch and forward any async errors to global error handler

### 1️⃣ Get Token from Cookies or Authorization Header

               const token =
                         req.cookies?.accessToken ||
                         req.headers.authorization?.replace("Bearer ", "");

                           🧠 Why both?
                        Frontend can send token in HTTP-only cookie (req.cookies.accessToken)
                        Or via Authorization header (Bearer <token>)

                        This line covers both:
                                  Method               Example
                                   Cookie              accessToken=xyz123...
                                   Authorization       Authorization: Bearer xyz123...

-- It first tries to get the token from cookie, then falls back to header.

### 2️⃣ Token Not Found?

                                  if (!token) {
                                           throw new ApiError(401, "Access Token is missing or expired");
                                       }
                                 -- If token is missing (user not logged in or token expired) → return 401 Unauthorized
                                 -- ApiError is your custom error class — this lets you use centralized error responses.

## 3️⃣ Verify Token

                                   const decoded = jwt.verify(token, process.env.ACCESSTOKEN_SECRETKEY);

                                     jwt.verify() checks:
                                     Signature is valid (matches secret key)
                                     Token has not expired (exp field)
                                    If invalid or expired, throws error automatically — caught by asyncHandler

                          📦 After verification
                            decoded = {
                                     \_id: "6488adbcf...", // user ID embedded when signing token
                                        username: "akash",
                                        email: "akash@example.com",
                                        iat: ..., // issued at
                                        exp: ... // expiry timestamp
                                    }

## 4️⃣ Find User in DB

              const user = await User.findById(decoded.\_id);
                        if (!user) {
                            throw new ApiError(401, "User not found with this token");
                             }
                          Why this step?
                           Token may be valid, but user could be deleted/deactivated.
                             We check DB to confirm the user still exists.
                            If not → throw 401.

## 5️⃣ Attach User to Request

                   req.user = user;
                    next(); // continue to controller
                     Now that user is verified, we attach the full user document to req.user.

                      So in any protected controller (like getMyProfile), we can simply do:

✅ Final Flow Summary

Client 🡲 /api/user/profile
⬇️ (middleware)
verifyAccessToken
⬇️ - Get token from cookie/header - Verify JWT token - Get user from DB - Attach user to req.user
⬇️
Controller (getMyProfile)

\*/

## --------------------------------------- file uploader ----------------------------------------

## ----------------------------------------- aggrigation peginate --------------------------------------------------

It’s a pagination plugin for Mongoose aggregation queries. :

## ------------------------------------------- aggrigation pipeline ---------------------------------------------
