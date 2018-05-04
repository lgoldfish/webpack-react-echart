import React, { Component } from "react";
import {connect} from "react-redux";
import Ranking from "./Ranking";
import HisRanking from "./HisRanking";
import TrailList from "../hotmap/TrailList";
import request from "../../server";
import {apiUsersCount} from "../../config";
import "../style.css";
class RankingMoudel extends Component {
    constructor(props) {
        super(props)
        this.naviCurrent = this.naviCurrent.bind(this)
        this.naviHistory = this.naviHistory.bind(this)
    }
    state = {
        navi:'current',
        trailShow:false,
        usersCurrent:0,
        usersHistory:0
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
    componentWillReceiveProps(nextProps){
        if(nextProps.trailShow){
            this.setState({
                trailShow:true
            })
        }else{
            this.setState({
                trailShow:false
            })
        }
    }
    componentDidMount(){
        this.setState({
            trailShow:this.props.trailShow
        })
       this.requestData()
       setInterval(()=>{
        this.requestData();
       },1000*60)
    }
    requestData(){
        request(apiUsersCount).then(count=>{
            this.setState({
                usersCurrent:count.currentUsers,
                usersHistory:count.historyUsers,
            })
        }).catch(error=>{
            console.log(error)
        })
    }
    render() {
        const {navi,trailShow,usersCurrent,usersHistory} = this.state;
        return (
            <div>
                {trailShow?<div className="trail_title">轨迹</div>:<div>
                    分馆客流排名：
                    <div  className={navi=='current'?'acitveLink':'navLink'} onClick={this.naviCurrent}>
                        当天
                    </div>
                    <div className={navi=='current'?'navLink':'acitveLink'} onClick={this.naviHistory}>
                        历史
                    </div>
                </div>}
                <div className="ranking_container">
                {
                   trailShow?<TrailList/>: <div>
                        {
                         navi === 'current'?<Ranking/>:<HisRanking/>
                        }
                    </div>
                }
                    <div className="ranking_middle">
                        <div>今日全馆累计人数：<span>{usersCurrent}</span></div>
                        <div className="line-x"></div>
                        <div>全馆累计人数：<span>{usersHistory}</span></div>
                    </div>
                    <div className="ranking_bottom">
                    <img src={require("../../asset/logo.png")} alt="logo"/>
                        石家庄国际会展中心
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        trailShow:state.showTrailReducer.show
    }
}
export default connect(mapStateToProps)(RankingMoudel);