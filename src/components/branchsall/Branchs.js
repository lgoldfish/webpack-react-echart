import React, {Component} from "react";
import echarts from "echarts";
import options from "./branchsOptions";
class BranchsAll extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const branchsall = echarts.init(this.refs.branchall);
        branchsall.setOption(options);
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