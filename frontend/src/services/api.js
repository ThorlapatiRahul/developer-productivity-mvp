import axios from "axios";

const BASE_URL = "https://developer-productivity-mvp-des3.onrender.com";

export const getMetrics = async (username) => {
  console.log("CALLING:", `${BASE_URL}/api/metrics/${username}`); // debug
  const res = await axios.get(`${BASE_URL}/api/metrics/${username}`);
  return res.data;
};