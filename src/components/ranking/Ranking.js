import React, {Component} from "react";
import echarts from "echarts";
import options from "./rankOptions";
import {apiBranchRank} from "../../config";
import request from "../../server";
class Ranking extends Component {
    constructor(props) {
        super(props)
        this.timer = ""
    }
    componentDidMount() {
        this.ranking = echarts.init(this.refs.ranking)
        this.requestData();
        this.timer = setInterval(()=>{
        this.requestData();
        },1000*60)
    }
    componentWillUnmount(){
        this.timer && clearInterval(this.timer)
    }
    requestData(){
        request(apiBranchRank+"?type=hour").then(branchCount=>{
            const libraries = [];
            const sum = [];
            branchCount.forEach((val,i)=>{
                libraries.push(val.libraries);
                sum.push(val.sumUsers);
            })
            options.yAxis.data = libraries;
            options.series[0].data = Array(sum.length).fill(sum[0]*1.1);
            options.series[1].data = sum;
            this.ranking.setOption(options);
        }).catch(error=>{
            console.log(error)
        })
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