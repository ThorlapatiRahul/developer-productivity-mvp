import axios from "axios";

const BASE_URL = "https://developer-productivity-mvp-des3.onrender.com";

export const getMetrics = async (developerId) => {
  const res = await axios.get(`${BASE_URL}/metrics/${developerId}`);
  return res.data;
};