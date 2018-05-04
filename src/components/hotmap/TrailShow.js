import React, {Component} from "react";
import NGRMap from "./NGRMap";
import {connect} from "react-redux";
import {apiTraiNavi} from "../../config";
import requset from "../../server";
class HisHotmap extends Component {
    constructor(){
        super()
        this.timer = ""
    }
    componentDidMount(){
        this.ngrMap = new NGRMap();
        window.ngrMap = this.ngrMap;
        this.ngrMap.initMap();
    }
    componentWillUnmount(){
        this.timer &&clearInterval(this.timer)
    }
    componentWillReceiveProps(nextProps){
        if(this.props.phone != nextProps.phone){
            this.timer && clearInterval(this.timer);
            this.timer = "";
            this.ngrMap.addTrailLine(nextProps.phone)
            this.timer = setInterval(()=>{
                this.ngrMap.addTrailLine(nextProps.phone);
            },1000*60)
        }
    }
    render(){
        return(
            <div>
                <div  id="map" style={{width: "100%", height: "100%", margin: 0, padding: 0, position:"absolute"}}></div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        phone:state.getTraiByPhoneReducer
    }
}
export default connect(mapStateToProps)(HisHotmap);