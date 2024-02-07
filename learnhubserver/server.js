import app from "./app.js";
// importing routes
import courseRoutes from "./routes/courseRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const port = process.env.PORT;

app.get("/", (req, res) => { 
  res.send("Testing api fine...");
});

// using routes
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/user", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
