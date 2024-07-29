/**
 * @TODO: Define reducer for the isPreLoad state
 */
import { ActioType } from "./action";

function isPreloadReducer(isPreLoad = true,action = {}) {
    switch(action.type){
        case ActioType.SET_IS_PRELOAD:
            return action.payload.isPreLoad;
        default:
            return isPreLoad;
    }
}

export default isPreloadReducer;