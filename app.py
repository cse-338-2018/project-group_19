import time
import numpy as np
from flask import Flask, request, jsonify, render_template
import json
import pickle
import pandas as pd
# from model import predict;
predict_diabetes=pickle.load(open('model_diabetes.pkl','rb'))
app = Flask(__name__)
@app.route('/')
def home():
    return render_template('index.html')
@app.route('/diabetes.html')
def diabetes():
    return render_template('diabetes.html')    
@app.route('/predict_api',methods=['POST'])
def predict_api():
    '''
    For direct API calls trought request
    '''
    data = request.get_json(force=True)
    arr = [float(numeric_string) for numeric_string in data['val'][0]]
    brr =[]
    brr.append(arr)
    prediction=predict_diabetes(brr)
    print(prediction)
    if(prediction[0] == 1):
        return "yes"
    else:
        return "no"

if __name__ == "__main__":
    app.run(debug=True)