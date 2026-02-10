from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app) # This allows your React frontend to talk to this backend

# 1. Load your data (Make sure the CSV is in the same folder!)
def load_data():
    df = pd.read_csv('C:\\Users\\hp\\Desktop\\Kifya\\Detecting-changes-and-associating-causes-on-time-series-data\\data\\BrentOilPrices.csv')
    df['Date'] = pd.to_datetime(df['Date'])
    return df

# 2. Endpoint: Historical Price Data
@app.route('/api/prices', methods=['GET'])
def get_prices():
    df = load_data()
    # We send back Date and Price for the chart
    data = df.tail(1000).to_dict(orient='records') 
    return jsonify(data)

# 3. Endpoint: Change Point Results (From Task 2)
@app.route('/api/analysis', methods=['GET'])
def get_analysis():
    # Here we share the insights you just found!
    results = {
        "change_point": "February 23, 2005",
        "mu1_before": 21.44,
        "mu2_after": 75.60,
        "impact_percent": 252.6
    }
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True, port=5000)