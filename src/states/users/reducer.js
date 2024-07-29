/**
 * @TODO: Define reducer for the users state
 */

import { ActioType } from "./action";

function usersReducer(pusers = [], action = {}) {
    switch(action.type){
        case ActioType.RECEIVE_USERS:
            return action.payload.users;
        default:
            return users;
    }
}

export default usersReducer