import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import axios from "axios";
import "./index.css";

// SETUP AXIOS
axios.defaults.baseURL = import.meta.env.VITE_API;
console.log("🚀 ~ axios.defaults.baseURL:", axios.defaults.baseURL);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);