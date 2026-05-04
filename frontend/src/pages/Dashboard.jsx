import { useEffect, useState } from "react";
import { getMetrics } from "../services/api";
import { motion } from "framer-motion";
import MetricsChart from "../components/MetricsChart";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState("ThorlapatiRahul");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getMetrics(username)
      .then((res) => {
        setData(res);
        setError(null);
      })
      .catch(() => {
        setError("Failed to load data. Check username or server.");
      })
      .finally(() => {
        setLoading(false);
      });

  }, [username]);

  // 🔄 Loading UI
  if (loading) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        Loading...
      </h1>
    );
  }

  // ❌ Error UI
  if (error) {
    return (
      <h2 style={{ textAlign: "center", color: "red", marginTop: "40px" }}>
        {error}
      </h2>
    );
  }

  const cards = [
    { title: "Lead Time", value: data.leadTime },
    { title: "Cycle Time", value: data.cycleTime },
    { title: "Bug Rate", value: Number(data.bugRate).toFixed(1) },
    { title: "Deployment Frequency", value: data.deploymentFrequency },
    { title: "PR Throughput", value: data.prThroughput }
  ];

  return (
    <div className="container">

      {/* 🔍 USER INPUT */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            width: "250px"
          }}
        />
      </div>

      {/* 🧠 TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Developer Productivity Dashboard
      </motion.h1>

      {/* 📊 METRICS */}
      <div className="metrics-grid">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="metric-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="metric-title">{card.title}</div>

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

      {/* 📈 CHART */}
      <MetricsChart data={data} />

      {/* 💡 INSIGHTS */}
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