# Emerging Technologies 2019 Project
## by Tomas Brazas G00349242

# Project Outline
1. Create a Flask web application that allows users to draw digits on a Canvas.

2. The application should pre-process the drawn image before running it through a trained Model which should return a prediction for the drawn number back to the frontend user.

3. The development of the Model should be documented in a Jupyter Notebook, including clear explanations, documentation and training of the Model.

# Research 
Extra Research can be found in the Jupyter notebook.

**Keras**
Keras is an open-source neural-network library written in Python. It is capable of running on top of TensorFlow, Microsoft Cognitive Toolkit, R, Theano, or PlaidML. Designed to enable fast experimentation with deep neural networks, it focuses on being user-friendly, modular, and extensible. Its used to quickly build neural networks without worrying about the mathematical aspects of tensor algebra, numerical techniques, and optimization methods.

**Tensorflow**
Tensorflow is an open-source, python friendly, library that is used for numerical computation to make machine learning easier and faster. Tensorflow was created by the Google Brains team in 2015, it is designed to mix together machine learning and neural netwroking models together and making use of what they share in common. Tensorflows biggest benifit is that it uses abstraction to allow for increased re-usability. In the case of this project we will be using tensorflow for aiding in predicition of hand-written items.

**MNIST**
The MNIST dataset is a database of handwritten digits ranging from 0-9, priarily used for testing purposes. The dataset contains 60,000 training images and 10,000 testing images for a total of 70,000 images. Each image in the dataset has been normalized to fit into 28x28 pixel image. In the case of this project the MNIST dataset will be used as the base comparison for the sumbitted hand-written image, so the model created using keras and tensorflow can make a prediction on the entered digit.

**OpenCV**
OpenCV was started at Intel in 1999 by Gary Bradsky, and the first release came out in 2000. Vadim Pisarevsky joined Gary Bradsky to manage Intel's Russian software OpenCV team. In 2005, OpenCV was used on Stanley, the vehicle that won the 2005 DARPA Grand Challenge. Later, its active development continued under the support of Willow Garage with Gary Bradsky and Vadim Pisarevsky leading the project. OpenCV now supports a multitude of algorithms related to Computer Vision and Machine Learning and is expanding day by day.

OpenCV supports a wide variety of programming languages such as C++, Python, Java, etc., and is available on different platforms including Windows, Linux, OS X, Android, and iOS. Interfaces for high-speed GPU operations based on CUDA and OpenCL are also under active development.

OpenCV-Python is the Python API for OpenCV, combining the best qualities of the OpenCV C++ API and the Python language.

# Running the application
**Requirements:**
1. Anaconda
2. Keras
3. Tensorflow 
4. OpenCV

Cmder is suggested but not neccesary.

**Steps to run:**
1. Make sure Anaconda is updated to atleast 3.7 or newer. If not, type into command prompt: **"conda update --all"**
2. To install Keras/Tensorflow type into command prompt: **"conda install -c conda-forge keras tensorflow"**
3. Install OpenCV type into command prompt: **"pip install opencv-python"**
4. Clone this github repository. 
5. Navigate to the folder using the command prompt, using **"cd Emergingtech2019/web-app"**
6. To run the web application using command prompt: **"python web-app.py"**
7. Upon running you should be able to access the Web Application on **http://127.0.0.1:5000/** .

# References 
https://www.tensorflow.org/tutorials/keras/classification <br>
https://nextjournal.com/gkoehler/digit-recognition-with-keras <br> 
https://machinelearningmastery.com/keras-functional-api-deep-learning/ <br>
https://arrow.dit.ie/cgi/viewcontent.cgi?article=1190&context=scschcomdis <br>
https://web.microsoftstream.com/video/8e965392-ccc2-4faa-a755-8d86de6a91d6?referrer=https:%2F%2Flearnonline.gmit.ie%2Fcourse%2Fview.php%3Fid%3D135 <br>
https://github.com/ianmcloughlin/jupyter-teaching-notebooks/blob/master/keras-neurons.ipynb <br>
https://www.ics.uci.edu/~mohamadt/keras_mnist.html <br>
