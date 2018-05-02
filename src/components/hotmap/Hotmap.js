import React, {Component} from "react";
// import NGRMap from "./NGRMap";
import "../style.css";
class Hotmap extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // window.ngrMap = new NGRMap();
        // ngrMap.initMap();

    }
    render() {
        return (
            <div  id="hotmap"></div>
        )
    }
}
export default Hotmap;