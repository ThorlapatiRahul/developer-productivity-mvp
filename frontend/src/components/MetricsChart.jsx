import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function MetricsChart({ data }) {
  const chartData = [
    { name: "Lead", value: data.leadTime },
    { name: "Cycle", value: data.cycleTime },
    { name: "Bug", value: data.bugRate },
    { name: "Deploy", value: data.deploymentFrequency },
    { name: "PR", value: data.prThroughput }
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <XAxis dataKey="name" stroke="#aaa" />
        <YAxis stroke="#aaa" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#a855f7"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}