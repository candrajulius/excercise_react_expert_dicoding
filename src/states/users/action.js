/**
 * @TODO: Define all the actions (creator) for the users state
 */

import api from "../../utils/api";

const ActionType = {
    RECEIVE_USERS: "RECEIVE_USERS",
}

function receiveUsersAction(users) {
    return{
        type: ActionType.RECEIVE_USERS,
        payload: {
            users,
        },
    };
}

function asyncRegisterUser({id, name, password}){
    return async() => {
        try{
            await api.register({id,name,password});
        }catch(error){
            alert(error.message);
        }
    };
}

export{
    ActionType,
    receiveUsersAction,
    asyncRegisterUser,
}
