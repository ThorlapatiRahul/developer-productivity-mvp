import express from "express";
import cors from "cors";
import metricsRoutes from "./routes/metricsRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// main API
app.use("/api", metricsRoutes);

export default app;