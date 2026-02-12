Birhan Energies: Brent Oil Price Structural Break Analysis Dashboard

Bayesian Change Point Analysis and Interactive Visualization (1987–2022)

📌 About Birhan Energies

Birhan Energies is a consultancy firm specializing in data-driven energy market insights and strategic advisory services for investors, policymakers, and energy companies.

This project demonstrates how advanced statistical modeling combined with interactive visualization can uncover structural shifts in global energy markets.

🚀 Project Overview

This project analyzes historical Brent Oil prices (1987–2022) to detect structural breaks — major regime shifts where the underlying price dynamics permanently changed.

The project consists of three main tasks:

✅ Task 1 – Event Research & Data Enrichment

Identified major geopolitical and economic events that historically influenced oil prices.

✅ Task 2 – Bayesian Change Point Modeling

Built a Bayesian stochastic change-point model (PyMC) to statistically detect structural shifts in oil prices.

✅ Task 3 – Full-Stack Dashboard

Developed an interactive Flask (backend) + React (frontend) dashboard to communicate findings clearly to stakeholders.

📊 Key Findings
🔎 Major Structural Break Detected

February 23, 2005

💰 Average Price Before Break

$21.44

💰 Average Price After Break

$75.60

📈 Structural Impact

A +252.6% permanent increase in baseline oil prices.

🌍 Historical Interpretation

The detected break aligns with the Commodity Super-Cycle (mid-2000s) driven by:

Rapid industrialization in China

Global demand expansion

Sustained energy consumption growth

This indicates a permanent market regime shift — not a temporary shock.

📅 Historical Events Considered (Task 1)

The following major geopolitical and economic events were compiled to contextualize structural changes:

Date	Event	Description	Market Impact
1990-08	Gulf War	Iraq invades Kuwait	Major supply disruption
1997-07	Asian Financial Crisis	Financial collapse in Asia	Demand contraction
2001-09	9/11 Attacks	Terrorist attacks in USA	Short-term demand shock
2003-03	Iraq War	U.S.-led invasion of Iraq	Geopolitical uncertainty
2005-02	Commodity Super-Cycle	Rapid growth in China demand	Long-term price regime shift
2008-09	Global Financial Crisis	Global recession	Sharp price collapse
2014-06	Oil Price Crash	OPEC supply expansion	Market oversupply
2020-03	COVID-19 Pandemic	Global lockdowns	Historic demand collapse
2022-02	Russia–Ukraine War	Major geopolitical conflict	Price spike & volatility

These events were used to interpret model-detected structural changes.

🧠 Methodology (Task 2)
Bayesian Change Point Model

A stochastic change-point model was implemented using PyMC.

The model assumes:

A pre-change regime with mean price μ₁

A post-change regime with mean price μ₂

An unknown switch point τ

Using MCMC sampling, the model inferred:

Change-point date (τ)

Regime means (μ₁, μ₂)

Convergence diagnostics (R-hat)

Model Reliability

R̂ (R-hat) = 1.0
Indicates excellent convergence and high statistical confidence.

🖥️ Interactive Dashboard (Task 3)

The dashboard translates complex Bayesian outputs into stakeholder-friendly insights.

Features
🔹 Key Indicator Cards

Detected Change Point

Percentage Price Increase

🔹 Interactive Price Chart

Full historical Brent price timeline

Visualizes:

2005 regime shift

2008 crash

2020 COVID collapse

2022 volatility

Built using Recharts for responsive and dynamic visualization.

🖼️ Dashboard Screenshot

<img width="1900" height="849" alt="image" src="https://github.com/user-attachments/assets/86e4ddbe-a630-439f-b693-93267ab03936" />



Create a folder named screenshots/ and place your image inside it.

🏗️ System Architecture

The project follows a full-stack architecture:

Backend (Flask)

Processes historical data

Stores Bayesian model results

Serves JSON API endpoints

Frontend (React)

Fetches data using Axios

Displays metrics and charts

Responsive stakeholder-focused UI

📊 API Endpoints
Endpoint	Description
GET /api/prices	Returns historical Brent price data
GET /api/analysis	Returns change-point date and percentage impact
📂 Project Structure
|---dashboard
    ├── app.py
|--- data
    ├── BrentOilPrices.csv
    ├── events.csv
├── .gitignore
├── brent-dashboard/
│   ├── src/
│   ├── package.json
│   └── ...
|---notebooks
    |---task1-eda.ipynb
    |---preparingdata.ipynb
├── requirements.txt
└── README.md

💻 Setup Instructions
1️⃣ Prerequisites

Python 3.x

Node.js

npm

2️⃣ Backend Setup (Flask)
pip install -r requirements.txt
python app.py


Backend runs at:
http://127.0.0.1:5000

3️⃣ Frontend Setup (React)
cd brent-dashboard
npm install
npm install axios recharts
npm start


Frontend runs at:
http://localhost:3000

⚠️ Limitations

Assumes only one dominant structural break

Does not include macroeconomic covariates

Does not model volatility regime shifts

🔮 Future Improvements

Multiple change-point detection

Regime-switching volatility models

Integration of GDP, inflation, exchange rates

Forecasting with Bayesian hierarchical models

📌 Conclusion

This project demonstrates how Bayesian inference combined with full-stack visualization can:

Detect permanent structural shifts in financial markets

Quantify long-term regime changes

Communicate advanced analytics to non-technical stakeholders

The 2005 structural break confirms that the global oil market transitioned into a permanently higher price regime, reshaping energy economics for nearly two decades.
