import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXOIT3pakKnECVuJupCWqh61NOTZ5gdfM",
  authDomain: "e-commerce-pablo-adamo.firebaseapp.com",
  projectId: "e-commerce-pablo-adamo",
  storageBucket: "e-commerce-pablo-adamo.appspot.com",
  messagingSenderId: "109901131955",
  appId: "1:109901131955:web:7db191795f91ef4ceb40c6",
};


// Initialize Firebase
/* eslint-disable no-unused-vars */
const app = initializeApp(firebaseConfig);
/* eslint-disable no-unused-vars */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
