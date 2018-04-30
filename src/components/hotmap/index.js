import React ,{ Component } from "react";
import {NavLink} from "react-router-dom";
import "../style.css";
class Hotmap extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){

    }
    render(){
        return (
            <div>
                <NavLink exact className="navLink" to="/hotmap/current" >   实时热力 </NavLink>
                <NavLink className="navLink" activeClassName="acitveLink" to="/hotmap/history" >  轨迹查询</NavLink>
                 <div className="hotmap_container">

                 </div>
            </div>
        )
    }
}
export default Hotmap;