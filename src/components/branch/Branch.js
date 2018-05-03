import React, {Component} from "react";
import echarts from "echarts";
import branchOption  from "./branchOptions";
import request from "../../server";
import {apiBranch} from "../../config";
class Branch extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        this.echart1 =  echarts.init(this.refs.echart1);
        this.echart2 =  echarts.init(this.refs.echart2);
        this.echart3 =  echarts.init(this.refs.echart3);
        this.echart4 =  echarts.init(this.refs.echart4);
        this.echart5 =  echarts.init(this.refs.echart5);
        this.echart6 =  echarts.init(this.refs.echart6);
        this.echart7 =  echarts.init(this.refs.echart7);
        this.echart8 =  echarts.init(this.refs.echart8);
        this.echart9 =  echarts.init(this.refs.echart9);
        this.requestData()
        setInterval(()=>{
            this.requestData()
        },1000*60)
    }
    requestData(){
        request(apiBranch+'?type=hour')
        .then((branchs)=>{
            for(let i=0 ; i< branchs.length ; i ++){
                switch(branchs[i].libraries){
                    case 'A1':
                    branchOption.xAxis.data = branchs[i].dateTime;  
                    branchOption.series[0].data = branchs[i].nums;  
                    this.echart1.setOption(branchOption);
                    break;
                    case 'A2':
                    branchOption.xAxis.data = branchs[i].dateTime;  
                    branchOption.series[0].data = branchs[i].nums;  
                    this.echart2.setOption(branchOption);
                    break;
                    case 'B':
                    branchOption.xAxis.data = branchs[i].dateTime;  
                    branchOption.series[0].data = branchs[i].nums;  
                    this.echart3.setOption(branchOption);
                    break;
                    case 'C1':
                    branchOption.xAxis.data = branchs[i].dateTime;  
                    branchOption.series[0].data = branchs[i].nums;  
                    this.echart4.setOption(branchOption);
                    break;
                    case 'C2':
                    branchOption.xAxis.data = branchs[i].dateTime;  
                    branchOption.series[0].data = branchs[i].nums;  
                    this.echart5.setOption(branchOption);
                    break;
                    case 'D':
                    branchOption.xAxis.data = branchs[i].dateTime;  
                    branchOption.series[0].data = branchs[i].nums;  
                    this.echart6.setOption(branchOption);
                    break;
                    case 'E1':
                    branchOption.xAxis.data = branchs[i].dateTime;  
                    branchOption.series[0].data = branchs[i].nums;  
                    this.echart7.setOption(branchOption);
                    break;
                    case 'E2':
                    branchOption.xAxis.data = branchs[i].dateTime;  
                    branchOption.series[0].data = branchs[i].nums;  
                    this.echart8.setOption(branchOption);
                    break;
                    case 'E3':
                    branchOption.xAxis.data = branchs[i].dateTime;  
                    branchOption.series[0].data = branchs[i].nums;  
                    this.echart9.setOption(branchOption);
                    break;
                    default:
                    return;
                }
            }
        })
        .then((err)=>{
            console.log(err)
        })
    }
    render() {
        return (
            <ul>
                <li ref="echart1"></li>
                <li ref="echart2"></li>
                <li ref="echart3"></li>
                <li ref="echart4"></li>
                <li ref="echart5"></li>
                <li ref="echart6"></li>
                <li ref="echart7"></li>
                <li ref="echart8"></li>
                <li ref="echart9"></li>
            </ul>
        )
    }
}
export default Branch;