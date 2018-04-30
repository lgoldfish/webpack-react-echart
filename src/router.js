import React, {Component} from "react";
import {BrowserRouter as Router , Route } from "react-router-dom";
import App from "./App";
const Routes = () =>(
    <Router>
        <Route path="/" component={App}/>
        {/* <Route path="/branch/current" component={App}/>
        <Route path="/bracn/history" component={App}/> */}
    </Router>
)
export default Routes;