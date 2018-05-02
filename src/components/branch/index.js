import React, {Component} from "react";
import {NavLink, Switch, Route } from "react-router-dom";
import Branch from "./Branch";
import HisBranch from "./HisBranch";
import "../style.css";
class IndexBranch extends Component {
    constructor(props) {
        super(props)
        this.naviCurrent = this.naviCurrent.bind(this)
        this.naviHistory = this.naviHistory.bind(this)
    }
    state = {
        navi:'current'
    }
    naviCurrent(){
        this.setState({
            navi:"current"
        })
    }
    naviHistory(){
        this.setState({
            navi:"history"
        })
    }
    render() {
        const {navi} = this.state;
        return (
            <div>
               <span className="branch_title">分馆客流趋势：</span> 
                <div  className={navi=='current'?'acitveLink':'navLink'} onClick={this.naviCurrent}>
                    当天
                </div>
                <div className={navi=='current'?'navLink':'acitveLink'} onClick={this.naviHistory}>
                    历史
                </div>
                <div className="branchs_container">
                {
                  navi === 'current'?<Branch/>:<HisBranch/>
                }
                </div>
            </div>
        )
    }
}
export default IndexBranch;