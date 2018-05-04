import React, {Component} from "react";
import NGRMap from "./NGRMap";
class HisHotmap extends Component {
    constructor(){
        super()
    }
    componentDidMount(){
        const ngrMap = new NGRMap();
        window.ngrMap = ngrMap;
        ngrMap.initMap();
        ngrMap.addTrailLine();
    }
    render(){
        return(
            <div>
                <div  id="map" style={{width: "100%", height: "100%", margin: 0, padding: 0, position:"absolute"}}></div>
            </div>
        )
    }
}
export default HisHotmap;