import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/app";
import "./style.css";

ReactDOM.hydrate(<App />, document.getElementById("root"));
