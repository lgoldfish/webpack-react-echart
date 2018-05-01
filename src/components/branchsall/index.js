import React, {Component} from "react";
import Branchs from "./Branchs";
import HisBranchs from "./HisBranchs";
import "../style.css";
class BranchsAll extends Component {
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
    componentDidMount(){
    }
    render(){
        const {navi} = this.state;
        return (
            <div>
                总馆客流趋势：
                <div  className={navi=='current'?'acitveLink':'navLink'} onClick={this.naviCurrent}>
                    当天
                </div>
                <div className={navi=='current'?'navLink':'acitveLink'} onClick={this.naviHistory}>
                    历史
                </div>
                 <div className="branchsall_container" ref="branchall">
                 {
                  navi === 'current'?<Branchs/>:<HisBranchs/>
                }
                 </div>
            </div>
        )       
    }
}
export default BranchsAll;