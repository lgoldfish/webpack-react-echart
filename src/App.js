import React , { Component } from "react";
import IndexBranch from "./components/branch/index";
import Hotmap from "./components/hotmap/index";
import Ranking from "./components/ranking/index";
import BranchsAll from "./components/branchsall/index";
import Branch from "./components/branch/Branch";
import "./app.css";
class App extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div className="App">
                <div className="branch_moudle" >
                    <IndexBranch/>
                </div>
                <div className="center_moudle">
                    <div className="hotmap_moudle">
                        <Hotmap/>
                    </div>
                    <div className="allBranchs_moudle">
                        <BranchsAll/>
                    </div>
                </div>
                <div className="branch_ranking">
                    <Ranking/>
                </div>
            </div>
        )
    }
}
export default App;