import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import axios from "axios";
import Signup from "../../pages/Signup";



// actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// action creators
const logIn = createAction(LOG_IN, user => ({ user}));
const logOut = createAction(LOG_OUT, user => ({ user}));
const getUser = createAction(GET_USER, user_info => ({ user_info}));
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
        
        console.log(id, pwd)
        // const userinfo = await axios.post('13.125.11.137', {id: id, password: pwd})
        axios({
            method: "post",
            url: "http://13.125.11.137/api/login",
            data: {
                userId: id,
                password: pwd,
            },
            headers: {
            }
          })
            .then(function (response) {
              console.log(response);
              localStorage.setItem("token", response.data.token);
              console.log("로그인 완료!")
              history.push("/")
            })
            .catch(function (error) {
              if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config);
            });
        
        // .then(function (response) {
        //     console.log(response)
        //     })
        //   .catch(function (error) {
        //     console.log(error);
        //     console.log("실패")
        //   });

        // console.log()

        // dispatch(logIn(userinfo));
        // history.push("/")
    }
}

//회원가입 미들웨어
const signUpMD = (id, pwd, pwdC, name, address) => {
    return async function (dispatch, getState, {history}) {
        
        // const userinfo = await axios.post('13.125.11.137/api/signup', {id: id, password: pwd}).then();
        axios({
            method: "post",
            url: "http://13.125.11.137/api/signUp",
            data: {
                userId: id,
                password: pwd,
                passwordCheck: pwdC,
                userName: name,
                address: address,
            },
            headers: {
            }
          })
            .then(function (response) {
              console.log(response);
              window.alert("회원가입 완료")
              history.push("/login")
            })
            .catch(function (error) {
                window.alert('중복된 아이디 입니다.', error);
            })
       
        // dispatch(getUser());
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
