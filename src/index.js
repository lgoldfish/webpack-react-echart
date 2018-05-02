import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./models/hotmapModel";
import Routes from "./router";
import css from "./app.css";
const store = createStore(reducers);
ReactDOM.render(
    <Provider store={store}>
         <Routes />
    </Provider> ,
    document.getElementById("app")
)