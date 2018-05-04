import React, {Component} from "react";
import echarts from "echarts";
import options from "./branchsOptions";
import request from "../../server";
import {apiBranchAll} from "../../config";
class BranchsAll extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.branchsall = echarts.init(this.refs.branchall);
        this.requestData()
        setInterval(()=>{
            this.requestData()
        },1000*60) 
    }
    requestData(){
        request(apiBranchAll+"?type=hour")
        .then(branchsall=>{
            options.xAxis.data = branchsall.dateTime;
            options.series[0].data = branchsall.nums;
            this.branchsall.setOption(options);
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render(){
        return (
            <div>
                 <div className="branchsall_container" ref="branchall">

                 </div>
            </div>
        )       
    }
}
export default BranchsAll;