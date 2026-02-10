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

  useEffect(() => {
    // 1. Get the Bayesian analysis results from Flask
    axios
      .get("http://127.0.0.1:5000/api/analysis")
      .then((res) => setAnalysis(res.data))
      .catch((err) => console.log("Backend not running?"));

    // 2. Get the historical price data from Flask
    axios
      .get("http://127.0.0.1:5000/api/prices")
      .then((res) => setPrices(res.data));
  }, []);

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
          Birhan Energies: Brent Oil Analysis
        </h1>
        <p>Interactive View of Structural Market Breaks</p>
      </header>

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
        <h3>Historical Price Trend & Model Detection</h3>
        <div style={{ height: "400px", width: "100%" }}>
          <ResponsiveContainer>
            <LineChart data={prices}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Date" />
              <YAxis domain={["auto", "auto"]} />
              <Tooltip />

              {/* NEW: Vertical indicator for the detected change point */}
              <ReferenceLine
                x="2005-02-23"
                stroke="red"
                label={{
                  value: "Market Shift",
                  position: "top",
                  fill: "red",
                  fontSize: 14,
                }}
                strokeDasharray="5 5"
              />

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

// Simple styling for our cards
const cardStyle = {
  flex: 1,
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  textAlign: "center",
};

export default App;
