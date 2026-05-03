const InsightsPanel = ({ insights }) => {
  return (
    <div>
      <h2>Insights</h2>
      {insights.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
          }}
        >
          <h4>{item.title}</h4>
          <p>{item.message}</p>
          <b>{item.action}</b>
        </div>
      ))}
    </div>
  );
};

export default InsightsPanel;