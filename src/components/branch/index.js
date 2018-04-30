import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import  "../style.css";
// let a1png = require("../../asset/a1.png");
// console.log("a1png is",a1png);
// const a2png = require("../../asset/a2.png");
// const a3png = require("../../asset/a3.png");
// const a4png = require("../../asset/a4.png");
// const a5png = require("../../asset/a5.png");
// const a6png = require("../../asset/a6.png");
// const a7png = require("../../asset/a7.png");
// const a8png = require("../../asset/a8.png");
// const a9png = require("../../asset/a9.png");
// const background = {
//     backgroundImage:`url(${a1png})`,
//     backgroundRepeat:'no-repeat',
//     backgroundSize:'100%'
// }
class Branch extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){

    }
    render(){
        return (
            <div>
                分馆客流趋势：
                <NavLink exact className="navLink" to="/brach/current" >  当天 </NavLink>
                <NavLink className="navLink" activeClassName="acitveLink" to="/branch/history" >  历史 </NavLink>
                <div className="branchs_container">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Branch; 