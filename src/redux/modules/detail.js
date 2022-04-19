import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { Apis } from "../../shared/api";
import axios from "axios";


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
    console.log("df");

    axios({
      method: "GET",
      url: "http://13.125.11.137/api/product/new",
    }).then((response) => {
      console.log(response);
      const bests = response.data.bestList;  //data.뭐들어갈지는 콘솔찍어보기
      console.log(bests)
    }).catch((error) => {
      console.log(error);
    })


    // axios
    //   .get(
    //     // "http://13.125.11.137/api/product/new",
    //     "https://624ff4c4e3e5d24b34192201.mockapi.io/review",
    //   )
    //   .then(function (response) {
    //       console.log("--getDetailDB api call Success");
    //       console.log(response);
    //       dispatch(getDetail(response));
    //   })
    //   .catch(function (error) {
    //       console.log("--getDetailDB api call Fail");
    //       console.log(error.response);
    //   });


    // console.log("hi");
    // Apis.loadDetail()
    // .then(function (response) {
    //   console.log(response.data);
    //   dispatch(getDetail(response.data));
    //   console.log("디테일 가져옴 성공");
    // })
    // .catch(function (error) {
    //   console.log(error);
    //   console.log("실패")
    // });
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