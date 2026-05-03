import axios from "axios";

// ✅ Production backend URL
const BASE_URL = "https://developer-productivity-mvp-des3.onrender.com";

export const getMetrics = async (developerId) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/metrics/${developerId}`);
    return res.data;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};