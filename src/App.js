import React , { Component } from "react";
import Branch from "./components/branch/index";
import Hotmap from "./components/hotmap/index";
import Ranking from "./components/ranking/index";
import BranchsAll from "./components/branchsall/index";
console.log(BranchsAll)
import "./app.css";
class App extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="App">
                <div className="branch_moudle" >
                    <Branch/>
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