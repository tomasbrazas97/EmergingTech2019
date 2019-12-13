# Tomas Brazas

# Flask web application that reads data from HTML page,
# Passes to model in the jupyter notebook and returns,
# Prediction that matches the data from HTML page.

# Imports
import flask as fl # Flask
import numpy as np # Plot data
import base64 # Encoding data
import cv2 # Python bindings

from PIL import Image, ImageOps
from keras.models import load_model

# Model
model = load_model('../model.h5')
app = fl.Flask(__name__)

# Variables to re-size img for mnist dataset
height = 28
width = 28
size = height, width

# Routing
@app.route('/')
def home():
    # Routes to HTML file
    return fl.render_template('web-app.html')


@app.route('/predict', methods=['POST'])
def convertImage():
    # GET Img from request
    encodedImg = fl.request.values[('imgBase64')]

    # decode the dataURL
    # remove the added part of the url start from the 22 index of the image array
    decodedImg = base64.b64decode(encodedImg[22:])

    # Save Img
    with open('image.png', 'wb') as f:
        f.write(decodedImg)
    
    # Open Img
    userImage = Image.open("image.png")

    # Resize Img to mnst dataset
    newImage = ImageOps.fit(userImage, size, Image.ANTIALIAS)

    # Save resized Img 28x28
    newImage.save("imageResized.png")

    # cv2 loads the new images
    cv2Image = cv2.imread("imageResized.png")

    # Converting to grayscale and reshaping
    grayScaleImage = cv2.cvtColor(cv2Image, cv2.COLOR_BGR2GRAY)
    grayScaleArray = np.array(grayScaleImage, dtype=np.float32).reshape(1, 784)

    # Return prediction from the model
    setPrediction = model.predict(grayScaleArray)
    getPrediction = np.array(setPrediction[0])

    # Returning predicted number as a String
    predictedNumber = str(np.argmax(getPrediction))
    print(predictedNumber)

    return predictedNumber

app.run(threaded=False)
