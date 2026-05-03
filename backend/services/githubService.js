import axios from "axios";

const GITHUB_API = "https://api.github.com";

export const getUserRepos = async (username) => {
  const res = await axios.get(`${GITHUB_API}/users/${username}/repos`);
  return res.data;
};

export const getRepoCommits = async (username, repo) => {
  const res = await axios.get(
    `${GITHUB_API}/repos/${username}/${repo}/commits`
  );
  return res.data;
};

export const getRepoPRs = async (username, repo) => {
  const res = await axios.get(
    `${GITHUB_API}/repos/${username}/${repo}/pulls?state=closed`
  );
  return res.data;
};

export const getRepoIssues = async (username, repo) => {
  const res = await axios.get(
    `${GITHUB_API}/repos/${username}/${repo}/issues?state=all`
  );
  return res.data;
};