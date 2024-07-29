/**
 * @TODO: Define the reducer for the authUser state
 */

import { ActioType } from "./action";

function authUserReducer(authUser = null, action={}) {
    switch(action.type){
        case ActioType.SET_AUTH_USER:
            return action.payload.authUser;
        case ActioType.UNSET_AUTH_USER:
            return null;
        default:
            return authUser;
    }
}

export default authUserReducer;
