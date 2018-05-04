import React, {Component} from 'react';
import {connect} from "react-redux";
import {apiTraiList} from "../../config";
import requset from "../../server";
class TrailList extends Component {
    constructor(){
        super()
        this.timer = ""
    }
    state={
        trailList:[
        ]
    }
    componentDidMount(){

    }
    componentWillUnmount() {
        this.timer && clearInterval(this.timer)
    }
    componentWillReceiveProps(nextProps){
        if(this.props.phone!=nextProps.phone){
            this.requsetTraiList(nextProps)
            this.timer = setInterval(()=>{
                this.requsetTraiList(nextProps)
            },1000*60)
        }
    }
    requsetTraiList(nextProps){
        requset(apiTraiList + "?phone=" + nextProps.phone)
        .then((trailList)=>{
           this.setState({
            trailList
           })
        })
        .then(error=>{
            console.log(error)
        })
    }
    render(){
        return(
            <div className="ranking_top">
                <ul className="trail_list">
                    {
                        this.state.trailList.map((val,i)=>{
                            return (
                                <li key={i}>
                                <div></div>
                                <span>{val.date}</span>
                                <span>{val.time}</span>
                                <span>{val.libraries}</span>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        trailList:state.trailListReducer,
        phone:state.getTraiByPhoneReducer
    }
}
export default connect(mapStateToProps)(TrailList) ; 