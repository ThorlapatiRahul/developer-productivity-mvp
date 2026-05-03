import { getMetricsData } from "../services/metricsService.js";

export const getMetrics = async (req, res) => {
  try {
    const { developerId } = req.params;

    const data = await getMetricsData(developerId);

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};