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
# from config import username, password, host, port, database
# Method 2: (for Heroku) Get DB configuration variables from local OS
username = os.environ.get('DBUSERNAME')
password = os.environ.get('DBPASSWORD')
host = os.environ.get('DBHOST')
port = os.environ.get('DBPORT')
database = os.environ.get('DBDATABASE')
connection_string = f'{username}:{password}@{host}:{port}/{database}'
engine = create_engine(f'postgresql://{connection_string}')


#################################################
# Flask Routes
#################################################

# HTML main page '/index' and '/'
@app.route("/index")
def index(): 
    return render_template("index.html")

@app.route("/")
def detail(): 
    return render_template("questionnaire.html")

# Querying the DB for questionslist questions
@app.route("/questionslistDB")
def questionslistDB():
    df_questionslist = pd.read_sql_table(table_name="questionslist", con = engine.connect(), schema ="public")
    df_questionslist_json = df_questionslist.to_dict(orient="records")
    return jsonify(df_questionslist_json)

# Querying the DB for questionnaire responses
@app.route("/questionnaireDB")
def questionnaireDB():
    df_questionnaire = pd.read_sql_table(table_name="questionnaire", con = engine.connect(), schema ="public")
    df_questionnaire_json = df_questionnaire.to_dict(orient="records")
    return jsonify(df_questionnaire_json)

# HTML page displaying questionnaire for new user
@app.route("/questionnaireHTML")
def questionnaireHTML(): 
    return render_template("questionnaire.html")

# Handler for questionnaire submission
@app.route("/send", methods=["GET", "POST"])
def send():
    if request.method == "POST":
        print("Request.form for Q1A is '", request.form["Q1A"], "' value")
        print("Request.form by itself is ", request.form)
        print("Size of the dictionary: ", len(request.form))
        # unpickle the model file
        # get the response into a dataframe
        # response_dict = {}
        # response_dict["Q1A"] = request.form["Q1A"]
        # response_df = pd.DataFrame[response_dict, columns=response_dict[]]
        # response_df.size(-1, 1)
        # size the dataframe appropriately
        # Run a predict with the model
        # Return the output of what we think you are
        # return response_df

    return render_template("questionnaire.html")


# HTML page displaying Tableau demographics dashboard
@app.route("/demographics1")
def demographics1(): 
    return render_template("demographics1.html")

# Alternate HTML page displaying Tableau demographics work sheets
@app.route("/demographics2")
def demographics2(): 
    return render_template("demographics2.html")

if __name__ == "__main__":
    app.run()
