export const generateInsights = (metrics) => {
  const insights = [];

  if (metrics.leadTime > 5) {
    insights.push({
      title: 'High Lead Time',
      message: 'PR reviews or deployment delays',
      action: 'Reduce PR size and speed up reviews'
    });
  }

  if (metrics.cycleTime > 4) {
    insights.push({
      title: 'High Cycle Time',
      message: 'Tasks are taking too long',
      action: 'Break tasks into smaller units'
    });
  }

  if (metrics.bugRate > 0.2) {
    insights.push({
      title: 'High Bug Rate',
      message: 'Too many production bugs',
      action: 'Improve testing and QA'
    });
  }

  if (metrics.deploymentFrequency < 5) {
    insights.push({
      title: 'Low Deployment Frequency',
      message: 'Releases are slow',
      action: 'Automate CI/CD pipeline'
    });
  }

  if (metrics.prThroughput < 5) {
    insights.push({
      title: 'Low PR Throughput',
      message: 'Low development output',
      action: 'Identify blockers'
    });
  }

  return insights;
};