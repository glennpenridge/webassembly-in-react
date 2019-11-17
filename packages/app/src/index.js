import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <App title="Hello, ReactBris!" />,
  document.getElementById("app"),
);

module.hot.accept();
