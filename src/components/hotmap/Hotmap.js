import React, {Component} from "react";
import NGRMap from "./NGRMap";
import "../style.css";
class Hotmap extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        window.ngrMap = new NGRMap();
        ngrMap.initMap();
        // console.log('NGR is',NGR)
    }
    render() {
        return (
            <div  id="map" style={{width: "100%", height: "100%", margin: 0, padding: 0, position:"absolute"}}></div>
        )
    }
}
export default Hotmap;