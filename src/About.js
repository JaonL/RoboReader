import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
const About = () => (
  <div className='about'>
    <h1>More about what's going on:</h1>
    <p>This app is communicating with a <a href='https://github.com/JaonL/MultiLabelTextML'>server</a> hosting a machine learning model trained to detect toxic comments on the internet.</p>
    <h4>Here's how it was made:</h4>
    <ol>
      <li>A dataset courtesy of <a href='https://www.kaggle.com/c/jigsaw-toxic-comment-classification-challenge'>Kaggle</a> was loaded and cleaned, which contains comments from wikipedia rated by humans for toxicity.</li>
      <li>The words were processed into number representations, which helps the machines do work on them!</li>
      <li>This was assisted by <a href='https://nlp.stanford.edu/projects/glove/'>GloVe Project's</a> pre trained word vectors, from which the 6B.100d pre trained word vector set was used </li>
      <li>After all the data was prepared, the set was split, and the algorithm was trained and tested until it could learn to tell what kind of comments were bad!</li>
    </ol>
    <p>Now, this is a very simple implementation, so the model doesn't even come close to truly solving the problem of recognising toxicity, especially the more subtle human nuances often present in communication.</p>
    <p>Some notable improvements could include:</p>
    <ul>
      <li>Using a bigger more robust word vector set than what was chosen</li>
      <li>Further preprocessing, e.g to account for more variations in grammar</li>
      <li>Optimizing training settings for the neural network</li>
      <li>Checking and controlling for overfitting if necessary (which was not done on this model)</li>
    </ul>
    <Link id='appLink' to={'/'}>Back To App</Link>
    <div>Created By: <a href='https://www.linkedin.com/in/jason-l-3aab8686/'>Jason Lu</a></div>
    <div>Contact: <a href='mailto:jasnxl@gmail.com'>Email</a></div>
  </div>
);
export default About