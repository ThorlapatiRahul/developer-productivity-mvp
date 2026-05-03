import express from "express";
import {
  getUserRepos,
  getRepoCommits,
  getRepoPRs,
  getRepoIssues,
} from "../services/githubService.js";

const router = express.Router();

router.get("/metrics/:username", async (req, res) => {
  try {
    const { username } = req.params;

    const repos = await getUserRepos(username);

    let totalCommits = 0;
    let totalPRs = 0;
    let totalIssues = 0;

    for (let repo of repos.slice(0, 5)) { // limit to avoid rate limit
      const commits = await getRepoCommits(username, repo.name);
      const prs = await getRepoPRs(username, repo.name);
      const issues = await getRepoIssues(username, repo.name);

      totalCommits += commits.length;
      totalPRs += prs.length;
      totalIssues += issues.length;
    }

    // 🎯 Derived metrics (simple logic)
    const leadTime = Math.max(1, Math.round(totalCommits / 10));
    const cycleTime = Math.max(1, Math.round(totalPRs / 5));
    const bugRate = totalIssues / (totalPRs + 1);
    const deploymentFrequency = totalCommits / 20;
    const prThroughput = totalPRs;

    res.json({
      leadTime,
      cycleTime,
      bugRate,
      deploymentFrequency,
      prThroughput,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch GitHub data" });
  }
});

export default router;