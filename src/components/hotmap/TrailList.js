import React, {Component} from 'react';
import {connect} from "react-redux";
class TrailList extends Component {
    constructor(){
        super()
    }
    state={
        trailList:[
            // {date:"2018/3/23",time:'15:30',site:"A2馆"},
            // {date:"2018/3/23",time:'15:30',site:"A2馆"},
            // {date:"2018/3/23",time:'15:30',site:"A2馆"},
            // {date:"2018/3/23",time:'15:30',site:"A2馆"},
            // {date:"2018/3/23",time:'15:30',site:"A2馆"},
            // {date:"2018/3/23",time:'15:30',site:"A2馆"},
            // {date:"2018/3/23",time:'15:30',site:"A2馆"},
            // {date:"2018/3/23",time:'15:30',site:"A2馆"},
            // {date:"2018/3/23",time:'15:30',site:"A2馆"},
            // {date:"2018/3/23",time:'15:30',site:"A2馆"},
            // {date:"2018/3/23",time:'15:30',site:"A2馆"},
            // {date:"2018/3/23",time:'15:30',site:"A2馆"},
        ]
    }
    componentDidMount(){

    }
    componentWillReceiveProps(nextProps){
        const {trailList} = nextProps;
        nextProps.trailList && this.setState({
            trailList
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
    console.log('trail list ',state);
    return {
        trailList:state.trailListReducer
    }
}
export default connect(mapStateToProps)(TrailList) ; 