import React, {Component} from "react";
import NGRMap from "./NGRMap";
import "../style.css";
class Hotmap extends Component {
    constructor(props) {
        super(props)
        this.timer = ""
    }
    componentDidMount() {
        const ngrMap = new NGRMap();
        ngrMap.initMap();
        ngrMap.addHeatMapLayer();
        this.timer = setInterval(()=>{
            ngrMap.addHeatMapLayer();
        },1000*60)
    }
    componentWillUnmount(){
        this.timer && clearInterval(this.timer)
    }
    render() {
        return (
            <div  id="map" style={{width: "100%", height: "100%", margin: 0, padding: 0, position:"absolute"}}></div>
        )
    }
}
export default Hotmap;