import React, {Component} from "react";
import echarts from "echarts";
import options from "./rankOptions";
class HisRanking extends Component {
    constructor(){
        super()
    }
    componentDidMount(){
        const ranking = echarts.init(this.refs.ranking)
        ranking.setOption(options);
    }
    render(){
        return (
            <div className="ranking_top" ref="ranking"></div>
        )
    }
}
export default HisRanking;