import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./styles/login.css";
import "./styles/signup.css";
import "./styles/navbar.css";
import "./styles/AddEmployee.css";
import "./styles/Employeelist.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
