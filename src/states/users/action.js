/**
 * @TODO: Define all the actions (creator) for the users state
 */

import api from "../../utils/api";

const ActioType = {
    RECEIVE_USERS: "RECEIVE_USERS",
}

function receiveUsersAction(users) {
    return{
        type: ActioType.RECEIVE_USERS,
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
    ActioType,
    receiveUsersAction,
    asyncRegisterUser,
}
