import time
import numpy as np
from flask import Flask, request, jsonify, render_template
import json
import pickle
import pandas as pd
predict_diabetes=pickle.load(open('model_diabetes.pkl','rb'))
predict_heart_attack=pickle.load(open('model_heart_attack.pkl','rb'))
predict_stroke_attack=pickle.load(open('model_stroke_attack.pkl','rb'))
predict_maternal = pickle.load(open('model_maternity.pkl','rb'))
# from model import predict;
app = Flask(__name__)
@app.route('/')
def home():
    return render_template('index.html')
@app.route('/diabetes.html')
def diabetes():
    return render_template('diabetes.html')
@app.route('/heart.html')
def heart():
    return render_template('heart.html')
@app.route('/stroke.html')
def stroke():
    return render_template('stroke.html')
@app.route('/more.html')
def more():
    return render_template('more.html')
@app.route('/maternal.html')
def maternal():
    return render_template('maternal.html') 
@app.route('/predict_api_diabetes',methods=['POST'])
def predict_api_diabetes():
    '''
    For direct API calls trought request
    '''
    data = request.get_json(force=True)
    arr = [float(numeric_string) for numeric_string in data['val'][0]]
    brr =[]
    brr.append(arr)
    prediction=predict_diabetes(brr)
    if(prediction[0] > 0):
        return "yes"
    else:
        return "no"
@app.route('/predict_api_heart',methods=['POST'])
def predict_api_heart():
    '''
    For direct API calls trought request
    '''
    data = request.get_json(force=True)
    arr = [float(numeric_string) for numeric_string in data['val'][0]]
    brr =[]
    brr.append(arr)
    prediction=predict_heart_attack(brr)
    if(prediction[0] > 0):
        return "yes"
    else:
        return "no"
@app.route('/predict_api_stroke',methods=['POST'])
def predict_api_stroke():
    '''
    For direct API calls trought request
    '''
    data = request.get_json(force=True)
    arr = [float(numeric_string) for numeric_string in data['val'][0]]
    brr =[]
    brr.append(arr)
    prediction=predict_stroke_attack(brr)
    if(prediction[0] > 0):
        return "yes"
    else:
        return "no"
@app.route('/predict_api_maternal',methods=['POST'])
def predict_api_maternal():
    '''
    For direct API calls trought request
    '''
    data = request.get_json(force=True)
    arr = [float(numeric_string) for numeric_string in data['val'][0]]
    brr =[]
    brr.append(arr)
    prediction=predict_maternal(brr)
    print(" kjlsgfai")
    print(prediction)
    if(prediction[0] == 'high risk'):
        return "yes"
    else:
        return "no"
if __name__ == "__main__":
    app.run(debug=True)
