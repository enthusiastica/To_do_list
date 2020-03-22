import React from "react";
import { render } from "react-dom";

import { store, persistor } from "./helpers";

import "antd/dist/antd.css";
import "./global.less";

import App from "./containers/app";

const target = document.getElementById("root");

render(<App store={store} storePersistor={persistor} />, target);
