import React, { Component } from "react";
import Ranking from "./Ranking";
import HisRanking from "./HisRanking";
import "../style.css";
class RankingMoudel extends Component {
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
                分馆客流排名：
                <div  className={navi=='current'?'acitveLink':'navLink'} onClick={this.naviCurrent}>
                    当天
                </div>
                <div className={navi=='current'?'navLink':'acitveLink'} onClick={this.naviHistory}>
                    历史
                </div>
                <div className="ranking_container">
                {
                  navi === 'current'?<Ranking/>:<HisRanking/>
                }
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
export default RankingMoudel;