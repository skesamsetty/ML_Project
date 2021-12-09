from flask import Flask, jsonify, render_template, request, redirect, url_for
import pandas as pd 
import json 
import psycopg2
import os

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################

from sqlalchemy import create_engine
# Method 1: Use local config.py
from config import username, password, host, port, database
# # Method 2: (for Heroku) Get DB configuration variables from local OS
# username = os.environ.get('DBUSERNAME')
# password = os.environ.get('DBPASSWORD')
# host = os.environ.get('DBHOST')
# port = os.environ.get('DBPORT')
# database = os.environ.get('DBDATABASE')
connection_string = f'{username}:{password}@{host}:{port}/{database}'
engine = create_engine(f'postgresql://{connection_string}')


#################################################
# Flask Routes
#################################################
@app.route("/index")
def index(): 
    return render_template("index.html")

@app.route("/")
def detail(): 
    return render_template("index.html")

@app.route("/testconnect")
def testconnect():
    df_testconnect = pd.read_sql_table(table_name="questionslist", con = engine.connect(), schema ="public")
    df_testconnect_json = df_testconnect.to_dict(orient="records")
    return jsonify(df_testconnect_json)

if __name__ == "__main__":
    app.run()
