import { useEffect, useState } from "react";
import { getMetrics } from "../services/api";
import { motion } from "framer-motion";
import MetricsChart from "../components/MetricsChart";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getMetrics("ThorlapatiRahul").then(setData);
  }, []);

  if (!data) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        Loading...
      </h1>
    );
  }

  const cards = [
    { title: "Lead Time", value: data.leadTime },
    { title: "Cycle Time", value: data.cycleTime },
    { title: "Bug Rate", value: Number(data.bugRate).toFixed(1) }, // ✅ fixed
    { title: "Deployment Frequency", value: data.deploymentFrequency },
    { title: "PR Throughput", value: data.prThroughput }
  ];

  return (
    <div className="container">
      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Developer Productivity Dashboard
      </motion.h1>

      {/* METRICS */}
      <div className="metrics-grid">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="metric-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            {/* ✅ LABEL */}
            <div className="metric-title">
              {card.title}
            </div>

            {/* ✅ VALUE */}
            <motion.div
              className="metric-value"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
            >
              {card.value}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* CHART */}
      <MetricsChart data={data} />

      {/* INSIGHTS */}
      <div className="insights">
        {data.insights.map((insight, i) => (
          <motion.div
            key={i}
            className="insight-box"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="insight-title">{insight.title}</div>
            <div className="insight-msg">{insight.message}</div>
            <div className="insight-action">{insight.action}</div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}