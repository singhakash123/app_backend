export const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch(next);
  };
};



/*
🔹 Problem kya hai?
Express me agar tum async/await use karte हो, aur koi error aata hai, to tumhe manually try...catch lagाना पड़ता है.

Example without asyncHandler:
app.get("/user/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return next(new ApiError(404, "User not found"));
    }
    res.json(new ApiResponse(200, user));
  } catch (error) {
    next(error); // ✅ manually pass error
  }
});

हर बार try-catch लिखना पड़ेगा ❌ (boring + repetitive).

With asyncHandler (clean ✅):
app.get("/user/:id", asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) throw new ApiError(404, "User not found");
  res.json(new ApiResponse(200, user));
}));

asyncHandler = Express me async/await error handling ka shortcut wrapper.

*/
