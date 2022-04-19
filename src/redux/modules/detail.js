import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { Apis } from "../../shared/api";

// 액션타입
const GET_Detail = "GET_Detail";


// 액션생성함수 
const getDetail = createAction(GET_Detail, (detail) => ({ detail }));

const initialState = {
  detail: null,
}

// 미들웨어 (서버와 통신하는 함수. 줄거, 받아올거)
const getDetailDB = () => {
  return function (dispatch, getState, {history}) {
    Apis.loadDetail()
    .then(function (response) {
      console.log(response.data)
      dispatch(getDetail(response.data));
      console.log("성공")
    })
    .catch(function (error) {
      console.log(error);
      console.log("실패")
    });
  }
}


// 리듀서 (리덕스에 담는곳)
export default handleActions(
  {
    [GET_Detail]: (state, action) => produce(state, (draft) => {
      console.log("디테일 가져왔다.")
      draft.detail = action.payload.detail;
    }),

  },
  initialState
)

const detailCreators = {
  getDetail,
  getDetailDB,
}

export { detailCreators }