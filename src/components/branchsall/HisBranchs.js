import React, {Component} from "react";
import echarts from "echarts";
import options from "./branchsOptions";
class HisBranchs extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        const branchsall = echarts.init(this.refs.branchall);
        branchsall.setOption(options);
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