import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

if (typeof window.process === "undefined") {
  window.process = { env: { NODE_ENV: "development" } };
}

ReactDOM.render(<App />, document.getElementById("root"));