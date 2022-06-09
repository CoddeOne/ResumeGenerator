import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, combineReducers } from "redux"
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

export const provider = new GoogleAuthProvider();
console.log(provider)
const firebaseConfig = {
  apiKey: "AIzaSyCGfyeM3ZnJTslmzBIDdL5snL8AkDwhaWM",
  authDomain: "uniq-77803.firebaseapp.com",
  projectId: "uniq-77803",
  storageBucket: "uniq-77803.appspot.com",
  messagingSenderId: "658552378657",
  appId: "1:658552378657:web:9aeb252fa4edec621b5a60"
};


export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
console.log(auth)


ReactDOM.render(
  <BrowserRouter>

    <App />

  </BrowserRouter>

  ,
  document.getElementById('root')
);


