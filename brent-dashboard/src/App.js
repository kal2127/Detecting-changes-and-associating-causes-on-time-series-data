import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

function App() {
  const [analysis, setAnalysis] = useState({});
  const [prices, setPrices] = useState([]);
  const [events, setEvents] = useState([]);
  // Use the YYYY-MM-DD format here too
  const [startDate, setStartDate] = useState("1987-05-20");
  const [endDate, setEndDate] = useState("2022-09-30");

  useEffect(() => {
    // 1. Get the Bayesian analysis results
    axios
      .get("http://127.0.0.1:5000/api/analysis")
      .then((res) => setAnalysis(res.data))
      .catch((err) => console.log("Backend offline"));

    // 2. Get the historical price data
    axios
      .get("http://127.0.0.1:5000/api/prices")
      .then((res) => setPrices(res.data));

    // 3. NEW: Get the event-correlation data
    axios
      .get("http://127.0.0.1:5000/api/events")
      .then((res) => setEvents(res.data));
  }, []);

  // Filter data based on user selection
  const filteredData = prices.filter(
    (p) => p.Date >= startDate && p.Date <= endDate,
  );

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f4f7f6",
        minHeight: "100vh",
      }}
    >
      <header style={{ marginBottom: "30px" }}>
        <h1 style={{ color: "#2c3e50" }}>
          Birhan Energies: Brent Oil Dashboard
        </h1>
        <p>Interactive View of Structural Market Breaks & Global Events</p>
      </header>

      {/* NEW: DATE FILTERS */}
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <label>From:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label>To:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <span style={{ marginLeft: "20px", fontSize: "0.9rem", color: "#666" }}>
          (Filter data to see specific periods)
        </span>
      </div>

      {/* KEY STATS CARDS */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
        <div style={cardStyle}>
          <h4>Detected Change Point</h4>
          <h2 style={{ color: "#3498db" }}>
            {analysis.change_point || "Loading..."}
          </h2>
        </div>
        <div style={cardStyle}>
          <h4>Average Price Increase</h4>
          <h2 style={{ color: "#e74c3c" }}>+{analysis.impact_percent}%</h2>
        </div>
      </div>

      {/* PRICE CHART */}
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h3>Historical Price Trend & Event Correlation</h3>
        <div style={{ height: "450px", width: "100%" }}>
          <ResponsiveContainer>
            <LineChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Date" />
              <YAxis domain={["auto", "auto"]} />
              <Tooltip />

              {/* Main Structural Break Line */}
              <ReferenceLine
                x="2005-02-23"
                stroke="red"
                strokeWidth={2}
                label={{ value: "MAJOR SHIFT", fill: "red" }}
              />

              {/* NEW: Interactive Event Highlights */}
              {events.map((ev, i) => (
                <ReferenceLine
                  key={i}
                  x={ev.date}
                  stroke="orange"
                  strokeDasharray="3 3"
                  label={{
                    value: ev.event,
                    position: "insideBottomRight",
                    fill: "orange",
                    fontSize: 10,
                  }}
                />
              ))}

              <Line
                type="monotone"
                dataKey="Price"
                stroke="#2980b9"
                dot={false}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  flex: 1,
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  textAlign: "center",
};

export default App;
