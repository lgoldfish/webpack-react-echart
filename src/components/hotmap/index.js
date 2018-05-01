import React ,{ Component } from "react";
import "../style.css";
import Hotmap from "./Hotmap";
import HisHotmap from "./HisHotmap";
class HotmapMoudle extends Component {
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
    render(){
        const {navi} = this.state;
        return (
            <div>
                 <div  className={navi=='current'?'acitveLink-hotmap':'navLink'}  onClick={this.naviCurrent}>
                      实时热力
                </div>
                <div className={navi=='current'?'navLink':'acitveLink-hotmap'}  onClick={this.naviHistory}>
                    轨迹查询
                </div>
                <div className="branchs_container">
                <div className="hotmap_container">
                {
                  navi === 'current'?<Hotmap/>:<HisHotmap/>
                }
                </div>
                </div>
            </div>
        )
    }
}
export default HotmapMoudle;