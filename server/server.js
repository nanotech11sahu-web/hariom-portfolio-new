// server/server.js

import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import contactRoute from "./contactRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Mount API routes
app.use("/api", contactRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});