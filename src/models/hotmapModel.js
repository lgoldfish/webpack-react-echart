import { combineReducers } from "redux";
const SHOW_TRAIL = 'show_trail';
const HIDE_TRAIL = "hide_trail";
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
    show: false
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
const reducers = combineReducers({
    showTrailReducer
})
export default reducers;