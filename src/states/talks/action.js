/**
 * @TODO: Define all the actions (creator) for the talks state
 */

import api from "../../utils/api";

const ActionType = {
    RECEIVE_TALKS: 'RECEIVE_TALKS',
    ADD_TALK: "ADD_TALK",
    TOGGLE_LIKE_TALK: "TOGGLE_LIKE_TALL",
}

function receiveTalksActionCreator(talks) {
    return {
        type: ActioType.RECEIVE_TALKS,
        paylaod: {
            talks,
        },
    };
}

function addTalkActionCreator(talk) {
    return {
       type: ActioType.ADD_TALK,
        paylad: {
            talk,
        }
    };
}

function toggleLikeTalkActionCreator({ talkId, userId }) {
    return {
      type: ActionType.TOGGLE_LIKE_TALK,
      payload: {
        talkId,
        userId,
      },
    };
  }

  function asyncAddTalk({text, replyTo = ''}) {
    return async (dispatch) => {
        try{
            const talk = await api.createTalk({talk, replyTo});
            dispatch(addTalkActionCreator(talk));
        }catch(error){
            alert(error.message);
        }
    };
  }

  function asyncToogleLikeTalk(talkId) {
    return async (dispatch, getState) => {
        const {authUser} = getState();
        dispatch(toggleLikeTalkActionCreator({talkId, userId: authUser.id}));

        try{
            await api.toggleLikeTalk(talkId);
        }catch(error){
            alert(error.message);
            dispatch(toggleLikeTalkActionCreator({talkId,userId: authUser.id}));
        }
    };
  }

  export {
    ActionType,
    receiveTalksActionCreator,
    addTalkActionCreator,
    toggleLikeTalkActionCreator,
    asyncAddTalk,
    asyncToogleLikeTalk,
  };