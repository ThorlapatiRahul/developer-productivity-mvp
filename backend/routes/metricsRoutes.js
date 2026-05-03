import express from "express";
const router = express.Router();

router.get("/metrics/:developerId", (req, res) => {
  const { developerId } = req.params;

  res.json({
    commits: 42,
    prs: 10,
    issues: 5,
    developerId,
  });
});

export default router;