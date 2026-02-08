# Detecting-changes-and-associating-causes-on-time-series-data

Brent Oil Price Change Point Analysis
Task 1: Foundation & Exploratory Analysis
Project Overview

This project is part of 10 Academy – AI Mastery Program (Week 11 Challenge).
The objective is to analyze Brent oil price time series data to understand how major geopolitical and economic events are associated with structural changes in oil prices.

Task 1 focuses on planning, understanding the data, and exploratory analysis, laying the foundation for Bayesian change point modeling in later stages.

🎯 Objectives of Task 1

The goals of Task 1 are to:

Define a clear data analysis workflow for the project

Understand the statistical properties of Brent oil price time series

Conduct initial exploratory data analysis (EDA)

Compile a structured dataset of major oil-related events

Document key assumptions and limitations

📁 Project Structure (Task 1)
├── data/
│   ├── brent_oil_prices.csv
│   └── oil_events.csv
│
├── notebooks/
│   └── task1_eda.ipynb
│
├── .gitignore
│  
│
└── README.md

📊 Dataset Description
Brent Oil Price Data

Source: Historical Brent oil price records

Time Period: May 20, 1987 – September 30, 2022

Frequency: Daily

Columns:

Date: Date of observation

Price: Brent oil price (USD per barrel)

Event Dataset

A manually curated dataset containing 10–15 major geopolitical and economic events that are relevant to the global oil market, such as:

OPEC policy decisions

Global financial crises

Wars and geopolitical conflicts

COVID-19 pandemic

Each event includes:

Event date

Brief description

🔍 Exploratory Data Analysis (EDA)

The following analyses were performed:

Visualization of Brent oil prices over time

Identification of long-term trends and sudden price shocks

Assessment of stationarity through visual inspection

Computation and visualization of log returns

Observation of volatility clustering

These findings indicate that the price series is non-stationary and exhibits structural breaks, motivating the use of change point analysis.

🧠 Methodological Motivation

Due to:

Changing mean and variance over time

Presence of large external shocks

Volatility clustering

Traditional time series models may be insufficient.
Therefore, this project adopts a Bayesian change point modeling approach (implemented in later tasks) to identify statistically significant regime shifts in Brent oil prices.

⚠️ Assumptions and Limitations

Detected change points represent statistical associations, not causal proof

Multiple real-world events may occur near the same time

Daily price movements are influenced by unobserved market factors

Event dates are approximate and may not capture delayed market reactions

📌 Deliverables for Task 1

✔️ 1–2 page foundation and planning report

✔️ Event dataset (oil_events.csv)

✔️ Initial EDA notebook with visualizations

✔️ This README file

🚀 Next Steps

In Task 2, Bayesian change point detection using PyMC will be applied to:

Identify structural breaks

Quantify changes in price behavior

Associate detected changes with real-world events

👤 Author

Name: Kalkidan Tesfaye
Program: 10 Academy – AI Mastery
Week: 11
Challenge: Change Point Analysis of Time Series Datav
