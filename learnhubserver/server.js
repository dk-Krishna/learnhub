import app from "./app.js";

// Database Connection
import { ConnectDB } from "./config/database.js";
ConnectDB();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
