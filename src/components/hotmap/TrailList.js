import React, {Component} from 'react';

class TrailList extends Component {
    constructor(){
        super()
    }
    state={
        trailList:[
            {date:"2018/3/23",time:'15:30',site:"A2馆"},
            {date:"2018/3/23",time:'15:30',site:"A2馆"},
            {date:"2018/3/23",time:'15:30',site:"A2馆"},
            {date:"2018/3/23",time:'15:30',site:"A2馆"},
            {date:"2018/3/23",time:'15:30',site:"A2馆"},
            {date:"2018/3/23",time:'15:30',site:"A2馆"},
            {date:"2018/3/23",time:'15:30',site:"A2馆"},
            {date:"2018/3/23",time:'15:30',site:"A2馆"},
            {date:"2018/3/23",time:'15:30',site:"A2馆"},
            {date:"2018/3/23",time:'15:30',site:"A2馆"},
            {date:"2018/3/23",time:'15:30',site:"A2馆"},
            {date:"2018/3/23",time:'15:30',site:"A2馆"},
        ]
    }
    componentDidMount(){

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
                                <span>2018/3/23</span>
                                <span>15:30</span>
                                <span>A2馆</span>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default TrailList ; 