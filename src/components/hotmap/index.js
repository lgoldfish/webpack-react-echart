import React ,{ Component } from "react";
import {connect} from "react-redux";
import "../style.css";
import Hotmap from "./Hotmap";
import TrailShow from "./TrailShow";
import {apiTraiList} from "../../config";
import requset from "../../server";
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
        this.props.dispatch({
            type:"hide_trail"
        })
    }
    naviHistory(){
        this.setState({
            navi:"history"
        })
        this.props.dispatch({
            type:"show_trail"
        })
    }
    handleInput(e){
        this.setState({
            traiByPhone:e.target.value
        })
    }
    requsetTrail(){
        this.props.dispatch({
            type:"getTraiByPhone",
            phone:this.state.traiByPhone
        })
    }
    componentDidMount(){
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
                {
                    navi==='history'?
                    <div className="trailSearch">
                     <img onClick={this.requsetTrail.bind(this)} src={require('../../asset/ic_search.png')} alt="search"/>
                        <input type="text" onChange={this.handleInput.bind(this)}  placeholder="13914689223"/>
                    </div>:''
                }
                <div className="branchs_container">
                <div className="hotmap_container">
                {
                  navi === 'current'?<Hotmap/>:<TrailShow/>
                }
                </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        show:state.showTrailReducer.show
    }
}
export default connect(mapStateToProps)(HotmapMoudle);