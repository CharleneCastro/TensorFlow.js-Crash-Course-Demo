//Tutorial: https://codingthesmartway.com/tensorflow-js-crash-course-machine-learning-for-the-web-getting-started/
//Tutorial: https://www.youtube.com/watch?v=M4YsClyTMzg

//***note: need to parse the input value into int in order to work

//linear regression: y=2x-1
//sample input = 5; result = ~9

import * as tf from '@tensorflow/tfjs';
import 'bootstrap/dist/css/bootstrap.css';



// Define a machine learning model for linear regression
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));



// Specify loss and optimizer for model
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});



// Prepare training data
const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6,1]);



// Train the model and set predict button to active
model.fit(xs, ys, {epochs: 500}).then(() => {
    // Use model to predict values
    document.getElementById('predictButton').disabled = false;
    document.getElementById('predictButton').innerText = "Predict";
    
});



// Register click event handler for predict button
document.getElementById('predictButton').addEventListener('click', (el, ev) => {
    let val = document.getElementById('inputValue').value;
    val = parseInt(val);
    let result = model.predict(tf.tensor2d([parseInt(val)], [1,1]));
    document.getElementById('output').innerText = result;
});