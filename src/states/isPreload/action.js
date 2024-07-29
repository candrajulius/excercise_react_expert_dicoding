/**
 * @TODO: Define all the actions (creator) for the isPreLoad state
 */
import api from "../../utils/api";
import { setAuthUserActionCreator } from "../authUser/action";
const ActioType = {
    SET_IS_PRELOAD = 'SET_IS_PRELOAD,
};

function setIsPreloadActionCreator(isPreload) {
    return {
        type: ActioType.SET_IS_PRELOAD,
        payload: {
            isPreload,
        },
    };
}

function asyncPreloadProcess(){
    return async (dispatch) => {
        try{
            const authUser = await api.getOwnProfile();
            dispatch(setAuthUserActionCreator(authUser));
        }catch(error){
            dispatch(setAuthUserActionCreator(null))
        }finally{
            dispatch(setIsPreloadActionCreator(false));
        }
    };
}

export{
    ActioType,
    setIsPreloadActionCreator,
    asyncPreloadProcess,
}