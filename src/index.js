import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:5000";
console.log = console.warn = console.error = () => {};
ReactDOM.render(
  <AuthContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
