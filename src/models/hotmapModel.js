import { combineReducers } from "redux";
const SHOW_TRAIL = 'show_trail';
const HIDE_TRAIL = "hide_trail";
const TRAI_LIST = "trail_list";
const TRAI_bY_PHONE= "getTraiByPhone";
// let showTrailAction = (state) => {
//     return {
//         type: SHOW_TRAIL,
//         show: true
//     }
// }
// let hideTraiAction = (state) => {
//     return {
//         type: HIDE_TRAIL,
//         show: false
//     }
// }
const initialState = {
    show: false,
    traiList:[]
}
let showTrailReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_TRAIL:
            return {
                show: true
            }
        case HIDE_TRAIL:
            return {
                show: false
            }
        default:
            return state
    }
}
const initTrailList = []
let trailListReducer = (state = initTrailList , action)=> {
    switch(action.type){
        case TRAI_LIST:{
            return action.traiList
        }
        default:
        return state;
    }
}
const initTraiByphone = ''
const getTraiByPhoneReducer = (state = initTraiByphone,action)=>{
    switch(action.type){
        case TRAI_bY_PHONE:
        return action.phone
        default:
        return initTraiByphone;
    }
}
const reducers = combineReducers({
    showTrailReducer,
    trailListReducer,
    getTraiByPhoneReducer
})
export default reducers;