import { readExcelData } from "./dataService.js";

export const getMetricsData = async (developerId) => {
  let rawData = [];

  try {
    rawData = await readExcelData();
  } catch (e) {
    console.log("Excel read failed, using fallback data");
  }

  // 👉 If no data, use dummy values
  if (!rawData || rawData.length === 0) {
    return {
      leadTime: 5,
      cycleTime: 3,
      bugRate: 2,
      deploymentFrequency: 7,
      prThroughput: 12,
      insights: [
        {
          title: "Low Deployment Frequency",
          message: "Releases are slow",
          action: "Automate CI/CD pipeline",
        },
        {
          title: "Low PR Throughput",
          message: "Low development output",
          action: "Identify blockers",
        },
      ],
    };
  }

  // 👉 REAL calculation (basic demo logic)
  const devData = rawData.filter(
    (item) => item.developerId == developerId
  );

  return {
    leadTime: devData.length,
    cycleTime: devData.length / 2,
    bugRate: devData.length / 3,
    deploymentFrequency: devData.length / 4,
    prThroughput: devData.length,
    insights: [
      {
        title: "Data Loaded",
        message: "Using Excel data",
        action: "Improve metrics logic",
      },
    ],
  };
};