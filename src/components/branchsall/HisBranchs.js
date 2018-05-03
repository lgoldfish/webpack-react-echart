import React, {Component} from "react";
import echarts from "echarts";
import options from "./branchsOptions";
import {apiBranchAll} from "../../config";
import request from "../../server";
class HisBranchs extends Component {
    constructor() {
        super()
    }
    componentDidMount(){
        this.branchsall = echarts.init(this.refs.branchall);
        this.requestData()
        setInterval(()=>{
            this.requestData()
        },1000*60) 
    }
    requestData(){
        request(apiBranchAll+"?type=day")
        .then(branchsall=>{
            options.xAxis.data = branchsall.dateTime;
            options.series[0].data = branchsall.nums;
            this.branchsall.setOption(options);
        })
        .then(error=>{
            console.log(error)
        })
    }
    render() {
        return (
            <div>
                <div className="branchsall_container" ref="branchall"></div>
            </div>
        )
    }
}
export default HisBranchs;