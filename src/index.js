import React from "react";
import ReactDOM from "react-dom/client";
//import Variabel from "./reactjsdasar/Variabel";
//import App from "./reactjsdasar/App";
// import StateProps from "./reactjsdasar/StateProps";
//import Map from "./reactjsdasar/Map";
//import Lifecycle from "./reactjsdasar/Lifecycle";
import "bootstrap/dist/css/bootstrap.min.css";
import Crud from "./crud";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>
);
