import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import echarts from "echarts";
import options from "./rankOptions";
import "../style.css";
class Ranking extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const ranking = echarts.init(this.refs.ranking)
        ranking.setOption(options);
    }
    render() {
        return (
            <div>
                <div className="ranking_top" ref="ranking"></div>
            </div>
        )
    }
}
export default Ranking;