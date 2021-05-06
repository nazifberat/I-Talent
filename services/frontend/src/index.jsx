import React from "react";
import ReactDOM from "react-dom";
import axe from "@axe-core/react";
// import { render } from "react-dom";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import App from "./App";

if (process.env.NODE_ENV !== "production") {
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(<App />, document.getElementById("root"));
