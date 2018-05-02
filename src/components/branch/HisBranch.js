import React, {Component} from "react";
import echarts from 'echarts';
import branchOption from "./branchOptions";
class HisBranch extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const echart1 =  echarts.init(this.refs.echart1);
        console.log('echarts1 is',echart1)
        echart1.setOption(branchOption);
        const echart2 =  echarts.init(this.refs.echart2);
        echart2.setOption(branchOption);
        const echart3 =  echarts.init(this.refs.echart3);
        echart3.setOption(branchOption);
        const echart4 =  echarts.init(this.refs.echart4);
        echart4.setOption(branchOption);
        const echart5 =  echarts.init(this.refs.echart5);
        echart5.setOption(branchOption);
        const echart6 =  echarts.init(this.refs.echart6);
        echart6.setOption(branchOption);
        const echart7 =  echarts.init(this.refs.echart7);
        echart7.setOption(branchOption);
        const echart8 =  echarts.init(this.refs.echart8);
        echart8.setOption(branchOption);
        const echart9 =  echarts.init(this.refs.echart9);
        echart9.setOption(branchOption);
    }
    render(){
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
export default HisBranch;