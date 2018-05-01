import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import echarts from "echarts";
import options from "./branchsOptions";
import "../style.css";
class BranchsAll extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const branchsall = echarts.init(this.refs.branchall);
        branchsall.setOption(options);
    }
    render(){
        return (
            <div>
                总馆客流趋势：
                 <NavLink exact className="navLink" to="/branchsall/current" >  当天 </NavLink>
                <NavLink className="navLink" activeClassName="acitveLink" to="/branchsall/history" >  历史</NavLink>
                 <div className="branchsall_container" ref="branchall">

                 </div>
            </div>
        )       
    }
}
export default BranchsAll;