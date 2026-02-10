Birhan Energies: Brent Oil Price Analysis Dashboard
This project analyzes historical Brent Oil prices to detect "Structural Breaks"—significant moments where the market regime changed. It uses Bayesian Inference for the math and a Full-Stack Dashboard for visualization.

🚀 Project Overview
Task 1: Defined historical events affecting oil prices.

Task 2: Built a Bayesian Change-Point Model (PyMC) to find market shifts.

Task 3: Developed an interactive Flask + React dashboard.

🛠️ Key Findings
Major Market Shift: Detected on February 23, 2005.

Average Price Before: $21.44.

Average Price After: $75.60.

Economic Impact: A structural price increase of 252.6%, linked to the "Commodity Super-Cycle" and rising demand in China.

🏗️ System Architecture
The project is split into two main parts:

Backend (Flask): Processes the data and serves analysis results via API endpoints.

Frontend (React): An interactive UI that displays key metrics and price trends using Recharts.

💻 Setup Instructions
1. Prerequisites
Make sure you have Python 3.x and Node.js installed on your computer.

2. Backend Setup (Flask)
Open a terminal in the project folder.

Install dependencies:

Bash

pip install flask flask-cors pandas
Run the server:

Bash

python app.py
The backend will run on http://127.0.0.1:5000.

3. Frontend Setup (React)
Open a second terminal in the brent-dashboard folder.

Install dependencies:

Bash

npm install
npm install axios recharts
Start the dashboard:

Bash

npm start
The dashboard will open at http://localhost:3000.

📊 API Endpoints
GET /api/prices: Returns the last 1000 days of historical price data.

GET /api/analysis: Returns the change-point date and impact percentages.

📂 Project Structure
app.py: Flask backend server.

brent_oil_prices.csv: Raw historical data.

brent-dashboard/: React frontend application.

.gitignore: List of files to ignore for Git.
