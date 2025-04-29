from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)  # Enable CORS

quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don’t let yesterday take up too much of today.",
    "It’s not whether you get knocked down, it’s whether you get up.",
]

@app.route("/api/quote")
def get_quote():
    return jsonify({"quote": random.choice(quotes)})

if __name__ == "__main__":
    app.run(debug=True)
