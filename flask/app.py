from flask import Flask
from flask_cors import CORS

import json

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
  # Create user in the database
  # user = models.User(
  #   name="Lucas"
  #   password="asdfasdf"
  # )

  return json.dumps("hello from Flask!")