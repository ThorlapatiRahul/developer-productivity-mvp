import axios from "axios";

const API = "http://localhost:5001/api";

export const getMetrics = async (developerId) => {
  const res = await axios.get(`${API}/metrics/${developerId}`);
  return res.data;
};