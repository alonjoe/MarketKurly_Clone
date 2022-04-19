import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import axios from "axios";



// actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// action creators
const logIn = createAction(LOG_IN, user => ({ user}));
const logOut = createAction(LOG_OUT, user => ({ user}));

//  액션크리에이터 함수가 없을때 밑처럼 액션 객체로 만들어 넘겨준다.
// const logIn = (user) => {
//     return {
//         type: LOG_IN,
//         user
//     }
// }

// 초기 값
const initialState = {
    userinfo: null,
    is_login: false,
};

//로그인 미들웨어
const loginMD = (id, pwd) => {
    return async function (dispatch, getState, { history }) {
        
        const userinfo = await axios.post('url', {id: id, password: pwd}).then();
        dispatch(logIn(userinfo));
        history.push("/")
    }
}

//회원가입 미들웨어
const signUpMD = (id, pwd, name) => {
    return function (dispatch, getState, {history}) {
        
    }
}

// reducer
export default handleActions(
    {
        [LOG_IN]: (state, action) => 
            produce(state, (draft) => {
                draft.user = action.payload.user;
                // 불변성 관리로 만들어진 draft를 변경시키는 작업 위의 initialstate 값들을
                //변경
                //payload에 보내는 정보가 담긴다. 
                draft.is_login = true;
            }),
        [LOG_OUT]: (state, action) =>
            produce(state, draft => {
                draft.userinfo = null;
            }),
        // [GET_USER]: (state, action) => 
        //     produce({}),
    }, 
    initialState
);

//리듀서안에서 일어나는걸 immer로 불변성 관리 해줘야함


// 액션 객체로 받을때 리듀서
// const reducer = (state={}, action={}) => {
//     switch(action.type){
//         case "LOG_IN" : { 
//             state.user = action.user;
//         }
//     }
// }

// 미들웨어

// action creator export
const actionCreators = {
    logIn,
    logOut,
    // getUser,
    loginMD,
    signUpMD,
};

export { actionCreators };
