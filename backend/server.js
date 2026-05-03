import express from "express";
import cors from "cors";

const app = express();

// ✅ Allow all origins (simple fix)
app.use(cors());

// OR stricter (optional)
// app.use(cors({
//   origin: "https://developer-productivity-8mi907eos-thorlapati-rahul-s-projects.vercel.app"
// }));

app.use(express.json());

// your routes
import metricsRoutes from "./routes/metrics.js";
app.use("/api", metricsRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});