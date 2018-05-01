import React, {Component} from "react";
import {BrowserRouter as Router, history,Route} from "react-router-dom";
import App from "./App";
import IndexBranch from "./components/branch/index";
import Branch from "./components/branch/Branch"
import HisBranch from "./components/branch/HisBranch";
const Routes = () => (
    <Router history={history}>
        <Route path="/" component={App}>
            {/* <Route path="branch" component={IndexBranch}>
                <IndexRoute component={Branch}/>
                <Route path="current" component={Branch}/>
                <Route path="history" component={HisBranch}/>
            </Route> */}
            {/* <Route>
                <Route path="current" component={Branch}/>
                <Route path="history" component={Branch}/>
            </Route>
            <Route>
                <Route path="current" component={Branch}/>
                <Route path="history" component={Branch}/>
            </Route>
            <Route>
                <Route path="current" component={Branch}/>
                <Route path="history" component={Branch}/>
            </Route> */}
        </Route>
    </Router>
)
export default Routes;