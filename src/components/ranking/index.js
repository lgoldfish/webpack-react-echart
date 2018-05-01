import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import echarts from "echarts";
import options from "./rankOptions";
import "../style.css";
class Ranking extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
       const ranking =  echarts.init(this.refs.ranking)
       ranking.setOption(options);
    }
    render() {
        return (
            <div>
                分馆客流排名：
                <NavLink className="navLink" activeClassName="acitveLink" to="/ranking/current"> 当天 </NavLink>
                <NavLink className="navLink" activeClassName="acitveLink" to="/ranking/history"> 历史 </NavLink>
                <div className="ranking_container">
                    <div className="ranking_top" ref="ranking">
                    </div>
                    <div className="ranking_middle">
                        <div>今日全馆累计人数：<span>35789</span></div>
                        <div className="line-x"></div>
                        <div>全馆累计人数：<span>886542</span></div>
                    </div>
                    <div className="ranking_bottom">
                    <img src="" alt=""/>
                        石家庄国际会展中心
                        {/* <img src={require("../../asset/a10.png")} alt=""/> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default Ranking;