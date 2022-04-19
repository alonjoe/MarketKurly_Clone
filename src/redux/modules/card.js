import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";


// 액션타입
const GET_NEW = "GET_NEW";
const GET_BEST = "GET_BEST";


// 액션생성함수 
const getNew = createAction(GET_NEW, (newList) => ({ newList }));
const getBest = createAction(GET_NEW, (bestList) => ({ bestList }));

const initialState = {
  list: [],
}

// 미들웨어 (서버와 통신하는 함수. 줄거, 받아올거)
const getNewDB = () => {
  return function (dispatch, getState, {history}) {
    axios({
      method: "GET",
      // url: "",
    }).then((response) => {
      let newList = [];
      const news = response.data;  //data.뭐들어갈지는 콘솔찍어보기
      news.forEach((item) => {
        newList.push({ productId: item.productId, ...item });
      });
      dispatch(getNew(newList));   //리듀서로 넘겨주는 행위(DB와 통신했으니 이제 넘겨주자!)
    }).catch((error) => {
      console.log(error);
    })
  }
}

const getBestDB = () => {
  return function (dispatch, getState, {history}) {
    axios({
      method: "GET",
      // url: 'https://virtserver.swaggerhub.com/Ohjinwoo/clone/1.0.0/api/product/best',
    }).then((response) => {
      let bestList = [];
      const news = response.data;  //data.뭐들어갈지는 콘솔찍어보기
      news.forEach((item) => {
        bestList.push({ productId: item.productId, ...item });
      });
      dispatch(getBest(bestList));
    }).catch((error) => {
      console.log(error);
    })
  }
}


// 리듀서 (리덕스에 담는곳)
export default handleActions(
  {
    // 신상품리스트 리덕스에 넣기
    [GET_NEW]: (state, action) => produce(state, (draft) => {
      console.log("신상품리스트 가져왔다.")
      draft.list = action.payload.newList;
    }),
    [GET_BEST]: (state, action) => produce(state, (draft) => {
      console.log("베스트상품들 가져왔다.");
      draft.list = action.payload.bestList;
    }),

  },
  initialState
)

const actionsCreators = {
  getNewDB,
  getBestDB,

}

export { actionsCreators }